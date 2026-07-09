import {
  MousePointerClick, Search, LayoutTemplate, Zap, Repeat, PhoneCall,
  ShieldCheck, Wallet, MapPin,
} from "lucide-react";

/* Icons are referenced by key so this file stays serializable-friendly. */
export const SERVICES = [
  { icon: MousePointerClick, title: "Meta Ads", body: "Direct response campaigns on Facebook and Instagram built around real remodeling intent: kitchen, bath, whole home. Creative, targeting, and offers tested every week." },
  { icon: Search, title: "Google Search Ads", body: "Bottom of funnel capture for homeowners actively searching to remodel, paired with Meta so you cover both ways homeowners buy." },
  { icon: LayoutTemplate, title: "Landing Pages & Site", body: "Fast, conversion built pages made for remodelers. Hosted, maintained, and tuned so clicks become booked consultations." },
  { icon: Zap, title: "Speed to Lead Automation", body: "Automated text and booking flows that reach every lead within minutes. Speed is the single biggest factor in whether a lead ever shows." },
  { icon: PhoneCall, title: "Live Appointment Setting", body: "A trained human team qualifies every homeowner on budget, timeline, and project scope, then books them directly onto your calendar. No raw leads dumped on you." },
  { icon: Repeat, title: "Multi Channel Retargeting", body: "Retargeting across Meta, Google, and YouTube so homeowners who did not book the first time keep seeing your brand until they do." },
];

export const PILLARS = [
  { icon: Wallet, title: "We Cover the Ad Spend", lead: "Not just \u201Cwe run the ads.\u201D", body: "Most agencies say they handle the ads, then hand you the daily ad bill whether a homeowner shows or not. We cover the ad spend and the creative. If campaigns do not produce appointments, we lose money, not you." },
  { icon: ShieldCheck, title: "Pay Per Shown Appointment", lead: "Easy to claim. Harder to honor.", body: "We define exactly what counts as a qualified, shown remodeling consultation before we start. You pay only when a homeowner actually shows. Never for no shows, reschedules, or leads that go nowhere." },
  { icon: MapPin, title: "Exclusive Territory", lead: "Nothing generic to share.", body: "Shared lead platforms sell the same lead to several contractors racing to answer first. We run a custom campaign under your brand in your market, and we will not run a competing account next door." },
];

export const STEPS = [
  { n: "01", t: "Growth call and market check", b: "We confirm your territory is open, agree in writing on what a qualified appointment means for your business, and size the volume you can handle." },
  { n: "02", t: "We launch under your brand", b: "Ads on Meta and Google, landing pages, and tracking, all built and funded by us. You never touch an ad account or an ad bill." },
  { n: "03", t: "Every lead is contacted in minutes", b: "Automated speed to lead texts open the conversation, and our live appointment setting team qualifies each homeowner on budget, timeline, and project scope." },
  { n: "04", t: "Appointments land on your calendar", b: "Confirmed estimate visits arrive by text and email with the homeowner's name, project type, and verified details. Reminders and confirmations run automatically." },
  { n: "05", t: "You pay per shown appointment", b: "No shows, reschedules, and dead leads cost you nothing. You pay a flat fee only when a qualified homeowner actually shows for the visit." },
];

export const FAQ = [
  { q: "Do you guarantee leads?", a: "We guarantee something stronger: you pay only when a qualified homeowner shows up for a booked remodeling consultation. Lead counts are noise. Shown appointments put projects on the board, and the risk sits with us, not you." },
  { q: "Do I pay for the ad spend?", a: "No. We cover the ad spend and the creative. You pay only when a qualified homeowner actually shows. Most agencies, including ones claiming pay per anything, still hand you the ad bill. We do not." },
  { q: "What does this cost?", a: "You pay a flat fee per shown appointment. No per lead games, no spend markup. The right number for your market depends on territory, project size, and volume, which is exactly what we size together on the call." },
  { q: "How is this different from Angi, Houzz, or Thumbtack?", a: "Shared lead platforms sell the same lead to several contractors, so you are racing to answer and half are not qualified. We run exclusive campaigns in your territory from our own ad account, qualify the homeowner, and book them onto your calendar. No sharing, no racing." },
  { q: "What kinds of remodelers do you work with?", a: "Kitchen and bath, whole home, additions, basements, and general contractors ready to scale. We stay narrow on purpose. One focus and one deliverable, so the playbook compounds instead of spreading thin." },
  { q: "How fast do you contact leads?", a: "Under five minutes on the large majority of leads, with coverage into the evening in the homeowner's local time. Speed to lead is the biggest factor in whether a lead becomes a shown appointment, so we treat it as core." },
  { q: "What's the commitment?", a: "No long term contract. Results handle retention. If we are not booking qualified homeowners onto your calendar, you should not be paying us." },
  { q: "How quickly can we launch?", a: "After you decide to move forward, we book onboarding within a few business days, and most clients are live shortly after. Because we run from our own ad account, there is no waiting on access handoffs." },
];

/* ---- Results page: video carousel + reviews ---- */
export const VIDEOS = [
  { name: "Brady Schwartz", company: "Paradise Homes Inc.", tag: "Kitchen & Bath Remodeler", result: "Strong leads that lead to actual customer meetings", featured: true, embed: "https://drive.google.com/file/d/1ZMHXVTPlziPaoFkxmrLrvic0J5GGbKyv/preview", src: null, poster: null },
  { name: "Stephan Machado", company: "5 Star Bath & Kitchen", tag: "Kitchen & Bath Remodeler", result: "Quality leads delivered consistently", featured: true, embed: "https://drive.google.com/file/d/1s0f2no_SaeEsySMLtfVYnJLouYSv9Rtz/preview", src: null, poster: null },
  { name: "Terrance Berdis", company: "Integrity Contracting Solutions", tag: "General Contractor", result: "Scheduled appointments with follow-ups included", featured: true, embed: "https://drive.google.com/file/d/1e7Rn2C3cf428oHGvNimF9dkn04KIP4aH/preview", src: null, poster: null },
  { name: "Josh Rogers", company: "Star Renovations", tag: "Whole Home Remodeler", result: "Receiving quality leads and closing new jobs", featured: true, embed: "https://drive.google.com/file/d/14FWR6127yegJsQFOOpbLXBaX1uFUhEZD/preview", src: null, poster: null },
  { name: "Jeremiah Layne-Goodman", company: "Elite Arbor Group LLC", tag: "General Contractor", result: "Tremendous help growing client base", featured: true, embed: "https://drive.google.com/file/d/1zdq26_OH7a1bVNzHqD5RX60yUIWs6YfH/preview", src: null, poster: null },
];

export const REVIEWS = [
  { quote: "Smooth interaction, really impressive customer service, quick responses, strong leads that actually lead to meetings with customers. They delivered on their promise.", name: "Brady Schwartz", company: "Paradise Homes Inc.", tag: "Kitchen & Bath" },
  { quote: "Great service! Love it — quality leads!", name: "Stephan Machado", company: "5 Star Bath & Kitchen", tag: "Kitchen & Bath" },
  { quote: "Top notch service. Scheduled appointments. They do follow-ups and resets. Can't beat it.", name: "Terrance Berdis", company: "Integrity Contracting Solutions", tag: "General Contractor" },
  { quote: "We have been receiving leads and closing new jobs. Good opportunity to bring in new business.", name: "Josh Rogers", company: "Star Renovations", tag: "Whole Home" },
  { quote: "Ben and his team have been a tremendous help in growing my client base. Ben in particular has been professional, attentive, and always available.", name: "Jeremiah Layne-Goodman", company: "Elite Arbor Group LLC", tag: "General Contractor" },
];

/* ---- Blog: each post becomes /blog/[slug], indexed separately ---- */
export const BLOG_POSTS = [
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
      "The difference shows up in close rate. A shown, qualified, exclusive appointment closes at a completely different rate than a shared lead, because the homeowner chose to meet with you specifically. That is the model we run at InstantAppointment AI, and it is why we charge per shown appointment instead of per lead. When the incentive is a shown appointment, everything upstream gets built to produce exactly that.",
    ],
  },
  {
    slug: "speed-to-lead-remodeling",
    title: "Speed to Lead: The Metric That Decides Whether Your Marketing Works",
    date: "June 2026", read: "5 min read",
    excerpt: "The gap between a five minute response and a one hour response is the difference between a booked estimate and a dead lead. Here is how to fix it.",
    body: [
      "Ask any remodeler with a full calendar what changed their business and the honest ones say the same thing: they got faster. Not better ads, not a new offer. Faster follow up.",
      "Homeowner attention is a melting asset. When someone submits a form about a kitchen remodel, they are on their phone, thinking about their kitchen, right now. An hour later they are at dinner. A day later they forgot they filled out the form at all.",
      "Industry research has shown for years that contact rates collapse as response time grows from minutes to hours. You do not need the exact numbers to see it in your own pipeline: compare how conversations go when you respond immediately versus the next morning.",
      "Fixing it takes two layers. The first is automation: an instant text that acknowledges the homeowner, confirms their project, and offers times. That buys you the window. The second is a live team that qualifies and books inside that window, because automation alone cannot handle a homeowner who answers with three questions of their own.",
      "This is why speed to lead is core infrastructure at InstantAppointment AI rather than an afterthought. Every lead gets contacted within minutes, with live coverage into the evening in the homeowner's local time, because a booked estimate visit is the only outcome that counts.",
    ],
  },
  {
    slug: "what-qualified-appointment-means",
    title: "What \u201CQualified Appointment\u201D Should Actually Mean for a Remodeler",
    date: "June 2026", read: "4 min read",
    excerpt: "Every agency promises qualified appointments. Almost none define the word. Here is the definition we hold ourselves to, and the questions you should ask any vendor.",
    body: [
      "\u201CQualified\u201D is the most abused word in contractor marketing. It can mean anything from \u201Cfilled out a form\u201D to \u201Cverified homeowner with budget, timeline, and a confirmed visit on your calendar.\u201D The gap between those two definitions is the gap between wasted afternoons and a growing business.",
      "Our definition has four parts. The person owns the home. The project matches work you actually do. They have a realistic budget range and timeline for that project. And they booked a specific time to meet, confirmed it, and showed up.",
      "That last word matters most. A qualified appointment that does not show is worth exactly nothing, which is why our billing is tied to shown appointments rather than booked ones. When the vendor only gets paid on shows, confirmation sequences, reminders, and rescheduling stop being optional features.",
      "If you are evaluating any appointment provider, ask three questions. How exactly do you define qualified, in writing? What happens when an appointment does not show? And who pays for the ad spend that generated it? The answers tell you where the risk really sits.",
      "At InstantAppointment AI the answers are simple: the definition is agreed in writing before launch, no shows are never billed, and we cover the ad spend. The risk sits with us on purpose.",
    ],
  },
];

export const SITE = {
  name: "InstantAppointment AI",
  legalName: "InstantAppointment AI LLC",
  domain: "https://instantappointment-ai.com",
};
