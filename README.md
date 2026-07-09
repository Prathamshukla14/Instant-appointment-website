# InstantAppointment AI — Marketing Site

Next.js 14 (App Router) marketing site for InstantAppointment AI LLC. Dark, premium theme, fully responsive, SEO-ready. Built to run on an EC2 instance behind Nginx with PM2 (no Vercel required).

## Stack
- Next.js 14 (App Router), React 18
- `lucide-react` for icons
- Plain CSS in `app/globals.css` (no Tailwind, no build step for styles)
- `output: "standalone"` so the build produces a self-contained Node server

## Project layout
```
app/
  layout.js            root layout: metadata + Organization JSON-LD + Nav/Footer
  page.js              home
  services/            /services
  how-it-works/        /how-it-works
  results/             /results  (video + written testimonials)
  blog/                /blog  and  /blog/[slug]  (one URL per article)
  about/  contact/  privacy/  terms/
  sitemap.js  robots.js  not-found.js
components/             Nav, Footer/Layout, Primitives, Showcase (calendar + notifs),
                       FaqList, ResultsContent, ContactForm
lib/content.js         ALL copy/data: services, pillars, FAQ, blog posts, videos, reviews
public/logo/           logo assets (SVG + PNG)
```

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                  # http://localhost:3000
```

## Before launch — content checklist (all in `lib/content.js` unless noted)
- [ ] `VIDEOS` — add each client's real video: set `embed` (YouTube/Vimeo) or `src` (MP4), plus `name`, `company`, `tag`, `poster`.
- [ ] `REVIEWS` — replace placeholder quotes with real client quotes, names, companies.
- [ ] Results stat numbers — in `components/ResultsContent.jsx`, replace with real, defensible figures.
- [ ] Founder photo — replace the `.photo-ph` block in `app/about/page.js` with a real `<img>` (drop the file in `public/`).
- [ ] Social URLs — in `components/Primitives.jsx` (`SocialIcons`) set the four real profile links, and add the same URLs to `sameAs` in `app/layout.js`.
- [ ] Contact form — set `NEXT_PUBLIC_GHL_WEBHOOK_URL` in `.env.local` to your GHL inbound webhook. Form posts the lead JSON there.
- [ ] Privacy + Terms — paste real legal text into `app/privacy/page.js` and `app/terms/page.js`.
- [ ] Confirm domain in `lib/content.js` `SITE.domain` (used by metadata, sitemap, schema).

## Build
```bash
npm run build
```
With `output: "standalone"`, the server bundle lands in `.next/standalone`. Static assets stay in `.next/static` and `public/`.

## Deploy on EC2 (Nginx + PM2)

**1. Server prep (Ubuntu):**
```bash
sudo apt update && sudo apt install -y nginx
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm i -g pm2
```

**2. Get the code on the box and build:**
```bash
git clone <your-repo> /var/www/iaai && cd /var/www/iaai
npm ci
cp .env.example .env.local   # fill in NEXT_PUBLIC_GHL_WEBHOOK_URL etc.
npm run build
```

**3. Assemble the standalone server** (standalone doesn't copy `static`/`public` automatically):
```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

**4. Start with PM2:**
```bash
cd /var/www/iaai/.next/standalone
PORT=3000 pm2 start server.js --name iaai
pm2 save
pm2 startup    # run the command it prints, so it survives reboot
```

**5. Nginx reverse proxy** — `/etc/nginx/sites-available/iaai`:
```nginx
server {
    listen 80;
    server_name instantappointment-ai.com www.instantappointment-ai.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```
```bash
sudo ln -s /etc/nginx/sites-available/iaai /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

**6. HTTPS (Let's Encrypt):**
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d instantappointment-ai.com -d www.instantappointment-ai.com
```

**7. Point DNS:** A record for `instantappointment-ai.com` → your EC2 Elastic IP, and a `www` record (A or CNAME) too. Make sure the EC2 security group allows inbound 80 and 443.

## Redeploys
```bash
cd /var/www/iaai && git pull && npm ci && npm run build
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
pm2 restart iaai
```
(Consider a small `deploy.sh` with these lines.)

## Notes
- Pinned to Next `14.2.35` (patched). If you bump versions, re-run `npm run build` before deploying.
- The Organization JSON-LD in `app/layout.js` is what helps Google recognize the brand as an entity. Keep `name`, `legalName`, and `sameAs` accurate.
- After go-live: submit `https://instantappointment-ai.com/sitemap.xml` in Google Search Console.
