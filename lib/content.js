import {
  MousePointerClick, Search, LayoutTemplate, Zap, Repeat, PhoneCall,
  ShieldCheck, Wallet, MapPin, Target, MessageSquare, UserCheck, BellRing, PhoneOutgoing,
  ListChecks, Lock, GaugeCircle, Pause, CreditCard, Clock,
  Trash2, TreePine, Shield, Paintbrush, Home, Hammer, Wind, Layers,
  Sprout, Droplets, SprayCan, Bug, Fence, SquareStack, Blocks,
} from "lucide-react";

/* Icons are referenced by key so this file stays serializable-friendly. */

/* ---- Marketing mechanics (used on appointment niche pages + how-it-works) ---- */
export const SERVICES = [
  { icon: MousePointerClick, title: "Meta Ads", body: "Direct response campaigns on Facebook and Instagram built around real buying intent. Creative, targeting, and offers tested every week." },
  { icon: Search, title: "Google Search Ads", body: "Bottom of funnel capture for homeowners actively searching for your service, paired with Meta so you cover both ways homeowners buy." },
  { icon: LayoutTemplate, title: "Landing Pages & Site", body: "Fast, conversion built pages made for home service companies. Hosted, maintained, and tuned so clicks become booked jobs." },
  { icon: Zap, title: "Speed to Lead Automation", body: "Automated text and booking flows that reach every lead within minutes. Speed is the single biggest factor in whether a lead ever converts." },
  { icon: PhoneCall, title: "Live Appointment Setting", body: "A trained human team qualifies every homeowner on budget, timeline, and project scope, then books them onto your calendar." },
  { icon: Repeat, title: "Multi Channel Retargeting", body: "Retargeting across Meta, Google, and YouTube so homeowners who did not book the first time keep seeing your brand until they do." },
];

/* ---- The two offers ---- */
export const OFFERS = {
  lead: {
    key: "lead",
    name: "Pay Per Lead",
    badge: "Exclusive Leads",
    tagline: "Exclusive homeowner leads delivered to your pipeline. You only pay per lead.",
    priceLine: "3-day trial, then per-lead or weekly packages",
    points: [
      "We cover the ad spend and all lead generation",
      "100% exclusive leads, never shared with another contractor",
      "You control the volume, pause or resume anytime",
      "Start with a low risk 3-day trial",
      "Simple weekly or monthly packages, cancel anytime",
    ],
    cta: "Start a 3-Day Trial",
  },
  appointment: {
    key: "appointment",
    name: "Pay Per Shown Appointment",
    badge: "Shown Appointments",
    tagline: "Qualified, confirmed appointments on your calendar. You only pay when the homeowner shows.",
    priceLine: "$350–450 per shown appointment by area & service",
    points: [
      "We cover everything: ad spend, lead generation, qualification, and confirmation",
      "You pay only when a homeowner actually shows",
      "Exclusive territory, one company per market",
      "No shows, reschedules, and dead leads cost you nothing",
    ],
    cta: "Secure Your Market",
  },
};

/* ---- Niches / services. live:true pages are fully built; others link to contact. ---- */
export const NICHES = [
  {
    slug: "roofing", name: "Roofing", plural: "roofing companies", icon: Home,
    model: "lead", live: true,
    metaTitle: "Exclusive Roofing Leads | Pay Per Lead Roofing Marketing",
    metaDescription: "Exclusive, verified roofing leads delivered to your phone within 24 hours. We cover the ad spend, you pay per lead. No shared leads, control your volume, cancel anytime.",
    keywords: ["roofing leads", "exclusive roofing leads", "roofing lead generation", "pay per lead roofing", "roof replacement leads", "roofing contractor marketing"],
    eyebrow: "ROOFING LEAD GENERATION",
    h1: "Exclusive roofing leads, delivered to your phone.",
    lede: "Verified homeowners in your service area who want a roof estimate, sent straight to your team within 24 hours. Exclusive to you, never shared, and you only pay per lead.",
    intro: "Roofing is a speed and trust game. The homeowner with a leak or storm damage calls the first credible roofer who picks up. We put real, interested homeowners in your pipeline every morning, so your team is calling warm estimates instead of buying the same shared lead as four other roofers.",
    problems: [
      { t: "Shared roofing leads sold five times", b: "Angi and HomeAdvisor resell the same roof inquiry to a handful of roofers. You race to the phone and win on luck, not fit." },
      { t: "Storm chasers and tire kickers", b: "Half of bought roofing leads are browsing, uninsured, or years out. They cost the same as a ready homeowner." },
      { t: "No control over volume", b: "Lead platforms flood you one week and go quiet the next, so crews sit idle or you turn work away." },
    ],
    benefits: [
      { t: "100% exclusive to your company", b: "Every roofing lead is yours alone. You are the only roofer in the conversation, so close rates climb." },
      { t: "Verified and estimate ready", b: "We confirm the homeowner owns the home, wants a roof estimate, and is in your area before the lead ever reaches you." },
      { t: "You set the volume", b: "Want 5 roofing leads a day or 15? Pause during a busy stretch and resume when crews open up. You are in control." },
    ],
  },
  {
    slug: "junk-removal", name: "Junk Removal", plural: "junk removal businesses", icon: Trash2,
    model: "lead", live: true,
    metaTitle: "Exclusive Junk Removal Leads | Pay Per Lead Junk Hauling Marketing",
    metaDescription: "Exclusive junk removal leads delivered within 24 hours. We cover the ad spend and lead generation, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["junk removal leads", "exclusive junk removal leads", "junk hauling leads", "junk removal marketing", "pay per lead junk removal", "junk removal lead generation"],
    eyebrow: "JUNK REMOVAL LEAD GENERATION",
    h1: "Exclusive junk removal leads, ready to book.",
    lede: "Homeowners in your area who need junk hauled, sent to your crew within 24 hours. Exclusive, verified, and pay per lead, so every dollar goes to real jobs.",
    intro: "Junk removal runs on volume and speed. The job is booked by whoever calls back first with a price. We keep a steady stream of local homeowners hitting your phone every day, exclusive to you, so your dispatch team stays busy instead of chasing recycled leads.",
    problems: [
      { t: "Low ticket means margins are thin", b: "Paying for shared or junk leads eats the profit on a haul before the truck even rolls." },
      { t: "Feast or famine scheduling", b: "Without a predictable lead flow, crews are slammed one day and idle the next." },
      { t: "Price shoppers everywhere", b: "Generic lead sources send curiosity clicks, not homeowners ready to book a pickup." },
    ],
    benefits: [
      { t: "Steady daily volume", b: "A reliable flow of local junk removal jobs so your trucks and crews stay booked." },
      { t: "Exclusive, never shared", b: "Every lead is yours. No racing three other haulers to the same driveway." },
      { t: "Pay only for real leads", b: "We cover the ad spend and generation. You pay per verified, interested homeowner." },
    ],
  },
  {
    slug: "remodeling", name: "Remodeling", plural: "remodeling contractors", icon: Hammer,
    model: "appointment", live: true,
    metaTitle: "Pay Per Shown Appointment Remodeling Marketing | Remodeling Leads",
    metaDescription: "Qualified, shown remodeling consultations on your calendar. We cover ad spend, lead gen, qualification, and confirmation. Pay only when a homeowner shows, $350–450 per appointment.",
    keywords: ["remodeling leads", "remodeling appointments", "kitchen remodel leads", "bathroom remodel leads", "pay per appointment remodeling", "remodeling contractor marketing"],
    eyebrow: "REMODELING APPOINTMENTS",
    h1: "Qualified, shown remodeling consultations on your calendar.",
    lede: "Kitchen, bath, and whole home homeowners, qualified on budget and timeline, booked onto your calendar. We cover everything and you pay only when they show.",
    intro: "Remodeling is a high ticket, high consideration sale, so a shown consultation with a qualified homeowner is worth far more than a pile of raw leads. We cover the ad spend, run exclusive campaigns under your brand, qualify each homeowner on budget and scope, confirm the visit, and bill you only when they actually show.",
    problems: [
      { t: "Shared leads race to the bottom", b: "The same kitchen inquiry is sold to several contractors. You spend the afternoon quoting deals already decided." },
      { t: "No shows waste real time", b: "A booked consultation that never happens costs you a drive, a quote, and a slot on the calendar." },
      { t: "You carry all the ad risk", b: "Most agencies hand you the ad bill whether homeowners show or not." },
    ],
    benefits: [
      { t: "Pay only when they show", b: "No shows, reschedules, and dead leads cost you nothing. You pay a flat fee per shown appointment." },
      { t: "Qualified on budget and scope", b: "Every homeowner is confirmed as a real, ready buyer before the appointment reaches your calendar." },
      { t: "We cover the ad spend", b: "Ad spend, creative, qualification, and confirmation are all on us. The risk sits with us on purpose." },
    ],
  },
  {
    slug: "hvac", name: "HVAC", plural: "HVAC companies", icon: Wind,
    model: "appointment", live: true,
    metaTitle: "Pay Per Shown Appointment HVAC Marketing | HVAC Leads & Appointments",
    metaDescription: "Qualified, shown HVAC appointments on your calendar. We cover ad spend, lead gen, qualification, and confirmation. Pay only when the homeowner shows, $350–450 per appointment.",
    keywords: ["hvac leads", "hvac appointments", "ac replacement leads", "furnace replacement leads", "pay per appointment hvac", "hvac contractor marketing"],
    eyebrow: "HVAC APPOINTMENTS",
    h1: "Qualified, shown HVAC appointments on your calendar.",
    lede: "Homeowners ready for a system replacement or install, qualified and confirmed, booked onto your calendar. We cover everything and you pay only when they show.",
    intro: "For HVAC replacement and install work, a confirmed in home appointment with a qualified homeowner beats a stack of cold leads every time. We cover the ad spend, qualify each homeowner on system, timeline, and budget, confirm the visit, and bill you only when they show up ready to talk.",
    problems: [
      { t: "Repair calls disguised as installs", b: "Generic leads send low ticket repair requests when you want replacement and install appointments." },
      { t: "No shows on install visits", b: "A missed appointment for a system quote is an expensive hole in a technician's day." },
      { t: "Seasonality and ad risk", b: "Running your own ads means carrying the spend through slow shoulder seasons." },
    ],
    benefits: [
      { t: "Pay only when they show", b: "You pay a flat fee per shown appointment, never for no shows or dead leads." },
      { t: "Qualified for replacement work", b: "Homeowners are confirmed on system, timeline, and budget so appointments match the jobs you want." },
      { t: "We cover the ad spend", b: "Ad spend, creative, qualification, and confirmation are all on us." },
    ],
  },
  // ---- Not yet built out (listed on the hub, routed to contact) ----
  { slug: "tree-service", name: "Tree Service", plural: "tree service companies", icon: TreePine, model: "lead", live: false, lede: "Exclusive tree service and removal leads from homeowners in your area, delivered within 24 hours." },
  { slug: "security-alarm", name: "Security & Alarm", plural: "security and alarm companies", icon: Shield, model: "lead", live: false, lede: "Exclusive home security and alarm leads from homeowners actively looking to protect their homes." },
  { slug: "painting", name: "Painting", plural: "painting companies", icon: Paintbrush, model: "lead", live: false, lede: "Exclusive interior and exterior painting leads from homeowners ready for an estimate." },
  { slug: "concrete", name: "Concrete", plural: "concrete contractors", icon: Layers, model: "lead", live: false, lede: "Exclusive concrete leads for driveways, patios, and flatwork from local homeowners." },
  { slug: "landscaping", name: "Landscaping", plural: "landscaping companies", icon: Sprout, model: "lead", live: false, lede: "Exclusive landscaping and lawn leads from homeowners in your service area." },
  { slug: "gutters", name: "Gutters", plural: "gutter companies", icon: Droplets, model: "lead", live: false, lede: "Exclusive gutter installation and guard leads from homeowners ready for a quote." },
  { slug: "pressure-washing", name: "Pressure Washing", plural: "pressure washing companies", icon: SprayCan, model: "lead", live: false, lede: "Exclusive pressure washing leads for driveways, homes, and decks from local homeowners." },
  { slug: "pest-control", name: "Pest Control", plural: "pest control companies", icon: Bug, model: "lead", live: false, lede: "Exclusive pest control leads from homeowners looking to book service now." },
  { slug: "fencing", name: "Fencing", plural: "fencing companies", icon: Fence, model: "lead", live: false, lede: "Exclusive fence installation and repair leads from homeowners in your area." },
  { slug: "deck", name: "Deck Building", plural: "deck builders", icon: SquareStack, model: "lead", live: false, lede: "Exclusive deck building and repair leads from homeowners ready for an estimate." },
  { slug: "hardscaping", name: "Hardscaping", plural: "hardscaping companies", icon: Blocks, model: "lead", live: false, lede: "Exclusive hardscaping and paver leads from homeowners planning outdoor projects." },
];

/* ---- Lead model: the 5-step outbound system ---- */
export const LEAD_STEPS = [
  {
    n: "01", icon: Target, t: "We build your target list",
    b: "We identify homeowners in your exact service area who are most likely to need your service and an estimate. A fresh, targeted list is built before every campaign run.",
    chips: ["Exact service area", "Ideal homeowners", "Fresh list every campaign"],
  },
  {
    n: "02", icon: MessageSquare, t: "We send the messages",
    b: "Every morning, our system reaches out to your homeowner list, asks if they are interested in your service, and whether they would like an estimate. Real conversations at scale.",
    chips: ["Daily outreach", "Real conversations at scale", "Qualifies for estimates"],
  },
  {
    n: "03", icon: UserCheck, t: "The homeowner responds",
    b: "When a homeowner confirms interest and requests an estimate, we verify it is a real lead. Their response is captured instantly and routed directly to you.",
    chips: ["Verified real leads", "Captured instantly", "100% exclusive to you"],
  },
  {
    n: "04", icon: BellRing, t: "The lead hits your phone",
    b: "The moment a homeowner responds, you get an SMS and email alert with their full contact info and address, plus CRM access to view the original conversation, so you know exactly what they requested before you dial.",
    chips: ["SMS & email alerts", "Full contact & address", "CRM access to conversation"],
  },
  {
    n: "05", icon: PhoneOutgoing, t: "You call and close",
    b: "Call within 5 minutes while the lead is warm. Contractors on our platform who follow this process consistently book 40 to 50% of their leads into estimates. We deliver the opportunity, you do the closing.",
    chips: ["Call within 5 minutes", "40–50% booked into estimates", "You deliver the close"],
  },
];

/* ---- Appointment model steps (remodeling + HVAC) ---- */
export const APPT_STEPS = [
  { n: "01", t: "Growth call and market check", b: "We confirm your territory is open, agree in writing on what a qualified appointment means for your business, and size the volume you can handle." },
  { n: "02", t: "We launch under your brand", b: "Ads on Meta and Google, landing pages, and tracking, all built and funded by us. You never touch an ad account or an ad bill." },
  { n: "03", t: "Every lead is contacted in minutes", b: "Automated speed to lead texts open the conversation, and our live team qualifies each homeowner on budget, timeline, and project scope." },
  { n: "04", t: "Appointments land on your calendar", b: "Confirmed visits arrive by text and email with the homeowner's name, project type, and verified details. Reminders and confirmations run automatically." },
  { n: "05", t: "You pay per shown appointment", b: "No shows, reschedules, and dead leads cost you nothing. You pay a flat fee only when a qualified homeowner actually shows for the visit." },
];

/* ---- Who it's for / not for (lead model) ---- */
export const WHO_FOR = {
  title: "Who this is for",
  lead: "Established home service companies with a real team, a process, and the capacity to handle volume.",
  body: "We work exclusively with owners who have people in place to follow up on leads and book estimates. If that is you, we can have exclusive homeowners ready for quotes hitting your pipeline within 24 hours.",
  points: ["A real team, not a solo operator", "A follow-up process already in place", "Capacity to handle 5–10 leads a day"],
};
export const WHO_NOT = {
  title: "Who this is not for",
  lead: "This is not for one man shows.",
  body: "We send 5 to 10 leads a day, and you need someone dedicated to following up on all of them or they go cold. As you build your team out, keep us in mind.",
  points: ["Solo operators with no follow-up help", "No system to call leads fast", "No capacity for daily volume"],
};

/* ---- Why speed matters (lead model) ---- */
export const SPEED_POINTS = [
  { time: "0–5 min", label: "Highest chance to close", strong: true },
  { time: "15 min", label: "Interest starts cooling", strong: false },
  { time: "30 min", label: "Lead is going cold", strong: false },
  { time: "60 min+", label: "Most leads are lost", strong: false },
];

/* ---- Pricing ---- */
export const PRICING = {
  lead: {
    name: "Pay Per Lead",
    badge: "Most niches",
    price: "$200",
    unit: "/ 3-day trial",
    sub: "10–20 exclusive homeowner estimates to test the quality yourself",
    trialTitle: "What you get in the trial",
    trial: [
      "10–20 exclusive homeowner estimates in 3 days",
      "Real leads to test the quality yourself",
      "Full CRM access to see leads and their responses",
      "No auto-renewal surprises, we ask before continuing",
    ],
    afterTitle: "After the trial, if you love it",
    after: [
      "Continue at a flat weekly rate based on your goals",
      "Weekly lead minimums guaranteed",
      "100% never shared with other contractors",
      "Cancel anytime, no long-term contracts",
    ],
    cta: "Start a 3-Day Trial",
  },
  appointment: {
    name: "Pay Per Shown Appointment",
    badge: "Remodeling & HVAC",
    price: "$350–450",
    unit: "/ shown appointment",
    sub: "Flat fee per shown appointment, by area and service",
    trialTitle: "What's included",
    trial: [
      "We cover ad spend, creative, and lead generation",
      "Homeowners qualified on budget, timeline, and scope",
      "Confirmation and reminder sequences run for you",
      "Exclusive territory, one company per market",
    ],
    afterTitle: "You only pay when",
    after: [
      "A qualified homeowner actually shows for the visit",
      "Never for no shows, reschedules, or dead leads",
      "Flat, predictable fee agreed before launch",
      "No monthly retainer, no ad spend markup",
    ],
    cta: "Secure Your Market",
  },
};

/* ---- Trust badges (lead model highlights) ---- */
export const LEAD_BADGES = [
  { icon: Clock, t: "3-Day Trial", b: "Test before you commit" },
  { icon: Lock, t: "100% Exclusive", b: "Leads only for you" },
  { icon: GaugeCircle, t: "Weekly Minimums", b: "Guaranteed volume" },
  { icon: ListChecks, t: "Full CRM", b: "See every lead" },
  { icon: Pause, t: "Pause Anytime", b: "Control your volume" },
  { icon: CreditCard, t: "Cancel Anytime", b: "No contracts" },
];

export const PILLARS = [
  { icon: Wallet, title: "We Cover the Ad Spend", lead: "Not just “we run the ads.”", body: "Most agencies say they handle the ads, then hand you the daily ad bill whether a homeowner shows or not. We cover the ad spend and the creative, so the risk sits with us, not you." },
  { icon: ShieldCheck, title: "Exclusive, Never Shared", lead: "Nothing generic to share.", body: "Shared lead platforms sell the same homeowner to several contractors racing to answer first. Every lead and appointment we deliver is 100% exclusive to your company." },
  { icon: MapPin, title: "You Control the Volume", lead: "Scale up, pause, resume.", body: "Want more leads this week or a breather while you catch up? You set the volume and can pause or resume anytime. No long-term contracts holding you hostage." },
];

/* ---- Results page: video carousel + reviews ---- */
export const VIDEOS = [
  { name: "Brady Schwartz", company: "Paradise Homes Inc.", tag: "Kitchen & Bath Remodeler", result: "~$300K in pipeline; 3-5 jobs closed in first 2 months", featured: true, embed: "https://drive.google.com/file/d/1ZMHXVTPlziPaoFkxmrLrvic0J5GGbKyv/preview", src: null, poster: "/thumbs/brady.png" },
  { name: "Josh Rogers", company: "Star Renovations", tag: "Whole Home Remodeler", result: "Closed a $28K kitchen; dropped paid ads after $5K wasted over 2 yrs", featured: true, embed: "https://drive.google.com/file/d/1e7Rn2C3cf428oHGvNimF9dkn04KIP4aH/preview", src: null, poster: "/thumbs/joshua.png" },
  { name: "Ken Biggs", company: "Sunnyside Property Services", tag: "General Contractor", result: "Closed 14 of 18 leads in his first week", featured: true, embed: "https://drive.google.com/file/d/14FWR6127yegJsQFOOpbLXBaX1uFUhEZD/preview", src: null, poster: "/thumbs/ken.png" },
  { name: "Shane Hulbert", company: "A Southern Style Tree Service LLC", tag: "General Contractor", result: "$8,000 profit in his first week; booked out 2 weeks", featured: true, embed: "https://drive.google.com/file/d/1zdq26_OH7a1bVNzHqD5RX60yUIWs6YfH/preview", src: null, poster: "/thumbs/shane.png" },
];
/* To add a company logo in the avatar circle, set logo to a path like "/logos/paradise-homes.png" (upload the file to /public/logos/ first). */
export const REVIEWS = [
  { quote: "Smooth interaction, really impressive customer service, quick responses, strong leads that actually lead to meetings with customers. They delivered on their promise.", name: "Brady Schwartz", company: "Paradise Homes Inc.", tag: "Kitchen & Bath", logo: "/logo/paradise.png" },
  { quote: "The team does excellent work, and the leads they provide are very solid. They find homeowners that are ready to buy, and are very thorough in targeting the customers we are searching for.. Great to work with!", name: "Eric Barnes", company: "Regal Bath and Remodeling", tag: "Bath and Remodeling", logo: " /logo/eric-logo.png" },
  { quote: "Top notch service. Scheduled appointments. They do follow-ups and resets. Can't beat it.", name: "Terrance Berdis", company: "Integrity Contracting Solutions", tag: "General Contractor", logo: "/logo/integrity.webp" },
  { quote: "We have been receiving leads and closing new jobs. Good opportunity to bring in new business.", name: "Josh Rogers", company: "Star Renovations", tag: "Whole Home", logo: "/logo/star-renovation.webp" },
  { quote: "Ben and his team have been a tremendous help in growing my client base. Ben in particular has been professional, attentive, and always available.", name: "Jeremiah Layne-Goodman", company: "Elite Arbor Group LLC", tag: "General Contractor", logo: "/logo/elite-arbor.png" },
];

/* ---- FAQ (general / used on home + how-it-works) ---- */
export const FAQ = [
  { q: "What is the difference between the lead offer and the appointment offer?", a: "For most home service niches we deliver exclusive leads and you pay per lead, starting with a 3-day trial. For remodeling and HVAC, where the sale is higher ticket, we deliver qualified, shown appointments and you pay only when the homeowner shows. Either way we cover the ad spend and the leads are exclusive to you." },
  { q: "Are the leads shared with other contractors?", a: "Never. Every lead and appointment we deliver is 100% exclusive to your company. We do not run a competing account in your market and we do not resell the same homeowner. You are the only company in the conversation." },
  { q: "Do I pay for the ad spend?", a: "No. We cover the ad spend and the lead generation. On the lead model you pay per exclusive lead. On the appointment model you pay only when a qualified homeowner shows." },
  { q: "How fast will I start getting leads?", a: "For established teams we can have exclusive homeowners ready for quotes hitting your pipeline within 24 hours of launching your campaign." },
  { q: "Can I control how many leads I get?", a: "Yes. You set the volume, and you can pause or resume anytime. Scale up when crews open up, ease off when you are catching up. There are no long-term contracts." },
  { q: "Who is this not for?", a: "This is not for one man shows. We send 5 to 10 leads a day and you need someone dedicated to following up or they go cold. We work with established home service companies that have a team, a process, and the capacity to handle volume." },
  { q: "What does the trial include?", a: "The 3-day trial is $200 and delivers 10 to 20 exclusive homeowner estimates so you can test the quality yourself, with full CRM access to see the leads. There are no auto-renewal surprises, we ask before continuing." },
  { q: "How quickly should I call a new lead?", a: "Within 5 minutes while the lead is warm. Contractors on our platform who follow that process consistently book 40 to 50% of their leads into estimates. Speed to lead is the single biggest factor in your close rate." },
];

/* ---- Blog: each post becomes /blog/[slug], indexed separately ---- */
export const BLOG_POSTS = [
  {
    slug: "exclusive-vs-shared-leads",
    title: "Exclusive vs Shared Leads: Why Home Service Companies Should Never Buy Shared Leads",
    date: "August 2026", read: "6 min read",
    excerpt: "Shared lead platforms sell the same homeowner to several contractors at once. Here is why the math never works in your favor, and the exclusive model that fixes it.",
    body: [
      "If you have ever bought leads from a shared platform, you know the drill. A homeowner fills out a form once, and within minutes several contractors are calling them. The homeowner is overwhelmed, picks whoever answered first or quoted lowest, and everyone else paid for nothing.",
      "The economics are designed that way. Shared lead platforms make more money selling one homeowner five times than selling them once. Your close rate is not their problem.",
      "Three structural issues make shared leads a losing game. First, you are racing several competitors to the phone, so even a great sales process loses to whoever happened to be free. Second, the leads are unfiltered: renters, price shoppers, and homeowners years away all cost the same as a ready buyer. Third, you build zero brand equity, because the homeowner never chose your company.",
      "The alternative is exclusive, verified leads. Homeowners in your exact service area are contacted under a system built for you, and only the ones who confirm interest and want an estimate are routed to your phone. You are the only company in the conversation.",
      "The difference shows up in close rate. An exclusive homeowner who asked for an estimate closes at a completely different rate than a shared lead. That is the model we run at InstantAppointment AI, across roofing, junk removal, painting, and every home service we serve. When leads are exclusive and verified, your team's follow-up finally pays off.",
    ],
  },
  {
    slug: "speed-to-lead-home-services",
    title: "The 5-Minute Rule: How Fast Follow-Up Wins Home Service Jobs",
    date: "August 2026", read: "5 min read",
    excerpt: "The gap between a five minute response and a one hour response is the difference between a booked estimate and a dead lead. Here is how the best home service teams win it.",
    body: [
      "Ask any home service owner with a full calendar what changed their business and the honest ones say the same thing: they got faster. Not better ads, not a new offer. Faster follow up.",
      "Homeowner attention is a melting asset. When someone asks for an estimate, they are on their phone thinking about the problem right now. An hour later they are back at work. A day later they forgot they asked at all.",
      "The data is consistent across industries: contact rates collapse as response time grows from minutes to hours. Contractors on our platform who call a new lead within five minutes consistently book 40 to 50% of those leads into estimates. The ones who wait until the next morning book a fraction of that.",
      "Winning the five minute window takes two things. The first is instant alerting: the moment a homeowner responds, you get an SMS and email with their full contact info, address, and the conversation history. The second is a team ready to dial, which is exactly why exclusive lead generation is built for companies with people in place to follow up.",
      "We deliver the opportunity, warm and exclusive, straight to your phone. The close rate is decided by how fast you pick it up.",
    ],
  },
  {
    slug: "who-exclusive-lead-generation-is-for",
    title: "Who Exclusive Lead Generation Is (and Isn't) For",
    date: "August 2026", read: "4 min read",
    excerpt: "Exclusive lead generation is a growth engine for the right home service company and a waste of money for the wrong one. Here is how to tell which you are.",
    body: [
      "Exclusive lead generation is not for everyone, and any honest partner will tell you so before you spend a dollar.",
      "It is not for one man shows. When we send 5 to 10 exclusive leads a day, someone has to follow up on every one of them within minutes, or they go cold and the money is wasted. A solo operator on a roof all day physically cannot do that.",
      "It is for established home service companies: owners who have a real team, a follow-up process, and the capacity to handle volume. If you have people in place to call leads fast and book estimates, exclusive homeowners can be hitting your pipeline within 24 hours.",
      "The test is simple. When a lead comes in at 10am on a busy day, is there someone whose job is to call it in the next five minutes? If yes, exclusive lead generation will compound for you. If not, build that seat first, then come back.",
      "This is why we qualify our clients as carefully as we qualify homeowners. The model only works when both sides can hold up their end, and ours is delivering exclusive, verified opportunities every single day.",
    ],
  },
  {
    slug: "why-shared-leads-fail-remodelers",
    title: "Why Shared Leads Fail Remodeling Contractors (And What Works Instead)",
    date: "July 2026", read: "6 min read",
    excerpt: "Angi, Houzz, and Thumbtack sell the same homeowner to three to five contractors at once. Here is why that math never works in your favor, and the model that fixes it.",
    body: [
      "If you have ever bought leads from a shared platform, you know the drill. A homeowner fills out a form once, and within minutes five contractors are calling them. The homeowner is overwhelmed, picks whoever answered first or quoted lowest, and everyone else paid for nothing.",
      "The economics are designed that way. Shared lead platforms make more money selling one homeowner five times than selling them once. Your close rate is not their problem.",
      "Three structural issues make shared leads a losing game for remodelers. First, you are racing four competitors to the phone, so even a great sales process loses to whoever happened to be free at that moment. Second, the leads are unfiltered: renters, price shoppers, and homeowners years away from starting all cost you the same as a ready buyer. Third, you build zero brand equity. The homeowner never saw your company until you called.",
      "The alternative is exclusive, qualified appointments. Ads run under your brand in your territory, a human team qualifies each homeowner on budget, timeline, and scope, and the appointment lands on your calendar. You are the only contractor in the conversation.",
      "The difference shows up in close rate. A shown, qualified, exclusive appointment closes at a completely different rate than a shared lead, because the homeowner chose to meet with you specifically. That is the model we run for remodeling at InstantAppointment AI, and it is why we charge per shown appointment instead of per lead.",
    ],
  },
  {
    slug: "what-qualified-appointment-means",
    title: "What “Qualified Appointment” Should Actually Mean for a Contractor",
    date: "June 2026", read: "4 min read",
    excerpt: "Every agency promises qualified appointments. Almost none define the word. Here is the definition we hold ourselves to, and the questions you should ask any vendor.",
    body: [
      "“Qualified” is the most abused word in contractor marketing. It can mean anything from “filled out a form” to “verified homeowner with budget, timeline, and a confirmed visit on your calendar.” The gap between those two definitions is the gap between wasted afternoons and a growing business.",
      "Our definition has four parts. The person owns the home. The project matches work you actually do. They have a realistic budget range and timeline for that project. And they booked a specific time to meet, confirmed it, and showed up.",
      "That last word matters most. A qualified appointment that does not show is worth exactly nothing, which is why our appointment billing is tied to shown appointments rather than booked ones. When the vendor only gets paid on shows, confirmation sequences, reminders, and rescheduling stop being optional features.",
      "If you are evaluating any appointment provider, ask three questions. How exactly do you define qualified, in writing? What happens when an appointment does not show? And who pays for the ad spend that generated it? The answers tell you where the risk really sits.",
      "At InstantAppointment AI the answers are simple: the definition is agreed in writing before launch, no shows are never billed, and we cover the ad spend. The risk sits with us on purpose.",
    ],
  },
];

export const SITE = {
  name: "InstantAppointment AI",
  legalName: "InstantAppointment AI LLC",
  domain: "https://instantappointment-ai.com",
  tagline: "Exclusive leads and shown appointments for home service companies.",
};
