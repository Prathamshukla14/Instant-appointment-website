import {
  MousePointerClick, Search, LayoutTemplate, Zap, Repeat, PhoneCall,
  ShieldCheck, Wallet, MapPin, Target, MessageSquare, UserCheck, BellRing, PhoneOutgoing,
  ListChecks, Lock, GaugeCircle, Pause, CreditCard, Clock,
  Trash2, TreePine, Shield, Paintbrush, Home, Hammer, Wind, Layers,
  Sprout, Droplets, SprayCan, Bug, Fence, SquareStack, Blocks,
  Wrench, Building2, Sofa, Warehouse, Scissors, Axe, Leaf, Droplet,
  Camera, Bell, DoorOpen, Sparkles, CloudRain, Flame, Utensils,
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

/* ---- Niches / services. Every niche has a full homepage-style page at /services/[slug]. ---- */
export const NICHES = [
  {
    slug: "roofing", name: "Roofing", noun: "roofing", plural: "roofing companies", proLabel: "roofer",
    icon: Home, model: "lead", live: true, leadsPerMonth: "50–250",
    lede: "Exclusive, verified roofing leads from homeowners in your area, delivered within 24 hours.",
    metaTitle: "Exclusive Roofing Leads | Pay Per Lead Roofing Marketing",
    metaDescription: "Exclusive, verified roofing leads delivered to your phone within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["roofing leads", "exclusive roofing leads", "roofing lead generation", "pay per lead roofing", "roof replacement leads", "roofing contractor marketing"],
    hero: {
      eyebrow: "REPLACEMENT · REPAIR · STORM DAMAGE · INSTALL",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "roofing leads."],
      sub: "50 to 250 exclusive roofing leads a month, delivered straight to your team. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Home, title: "Roof Replacement", body: "Homeowners ready to replace an aging or failing roof, the highest ticket jobs you run." },
      { icon: Wrench, title: "Roof Repair", body: "Active leaks and damaged sections from homeowners who need a fix now." },
      { icon: CloudRain, title: "Storm & Hail Damage", body: "Homeowners dealing with recent storm damage and insurance claims." },
      { icon: Hammer, title: "New Roof Installation", body: "New builds and additions that need a full roof system installed." },
      { icon: Building2, title: "Flat & Commercial", body: "Flat roof and light commercial jobs for crews that take on bigger work." },
      { icon: Droplets, title: "Gutters & Fascia", body: "Add-on gutter, fascia, and soffit work that pairs with roofing jobs." },
    ],
  },
  {
    slug: "junk-removal", name: "Junk Removal", noun: "junk removal", plural: "junk removal businesses", proLabel: "hauler",
    icon: Trash2, model: "lead", live: true, leadsPerMonth: "100–400",
    lede: "Exclusive junk removal leads from local homeowners, delivered to your crew within 24 hours.",
    metaTitle: "Exclusive Junk Removal Leads | Pay Per Lead Junk Hauling Marketing",
    metaDescription: "Exclusive junk removal leads delivered within 24 hours. We cover the ad spend and lead generation, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["junk removal leads", "exclusive junk removal leads", "junk hauling leads", "junk removal marketing", "pay per lead junk removal", "junk removal lead generation"],
    hero: {
      eyebrow: "CLEANOUTS · FURNITURE · APPLIANCES · DEBRIS",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "ready" }], "junk removal leads."],
      sub: "100 to 400 exclusive junk removal leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Home, title: "Full Home Cleanouts", body: "Whole house and hoarding cleanouts, the biggest hauls you can book." },
      { icon: Sofa, title: "Furniture Removal", body: "Couches, mattresses, and bulky items homeowners need gone today." },
      { icon: Warehouse, title: "Appliance Haul-Off", body: "Old fridges, washers, and appliances ready for pickup." },
      { icon: Building2, title: "Estate & Foreclosure", body: "Estate, rental, and foreclosure cleanouts from property owners." },
      { icon: Hammer, title: "Construction Debris", body: "Post-renovation and construction debris removal for local pros." },
      { icon: Trash2, title: "Garage & Yard Junk", body: "Garage, basement, and yard junk from homeowners cleaning up." },
    ],
  },
  {
    slug: "tree-service", name: "Tree Service", noun: "tree service", plural: "tree service companies", proLabel: "tree pro",
    icon: TreePine, model: "lead", live: true, leadsPerMonth: "50–300",
    lede: "Exclusive tree service and removal leads from homeowners in your area, delivered within 24 hours.",
    metaTitle: "Exclusive Tree Service Leads | Pay Per Lead Tree Care Marketing",
    metaDescription: "Exclusive tree service and removal leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["tree service leads", "exclusive tree service leads", "tree removal leads", "tree care marketing", "pay per lead tree service", "tree service lead generation"],
    hero: {
      eyebrow: "TRIMMING · REMOVAL · STUMP GRINDING · EMERGENCY",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "tree service jobs."],
      sub: "50 to 300 qualified tree service leads a month, delivered straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Scissors, title: "Tree Trimming", body: "Routine trimming and pruning from homeowners maintaining their trees." },
      { icon: Axe, title: "Tree Removal", body: "Full tree removals, the high ticket work your crews want most." },
      { icon: Layers, title: "Stump Grinding", body: "Stump grinding and removal, often paired with a removal job." },
      { icon: CloudRain, title: "Emergency Storm Work", body: "Fallen and hazardous trees from homeowners who need help now." },
      { icon: TreePine, title: "Lot & Land Clearing", body: "Larger clearing jobs for lots, land, and overgrown properties." },
      { icon: Leaf, title: "Pruning & Shaping", body: "Health pruning and shaping for homeowners who care for their yard." },
    ],
  },
  {
    slug: "security-alarm", name: "Security & Alarm", noun: "home security", plural: "security companies", proLabel: "security company",
    icon: Shield, model: "lead", live: true, leadsPerMonth: "50–250",
    lede: "Exclusive home security and alarm leads from homeowners actively looking to protect their homes.",
    metaTitle: "Exclusive Home Security & Alarm Leads | Pay Per Lead Marketing",
    metaDescription: "Exclusive home security and alarm leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["home security leads", "alarm system leads", "exclusive security leads", "security company marketing", "pay per lead security", "smart home security leads"],
    hero: {
      eyebrow: "ALARMS · CAMERAS · SMART HOME · MONITORING",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "home security leads."],
      sub: "50 to 250 exclusive home security leads a month, sent straight to your team. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Bell, title: "Alarm Installation", body: "Homeowners ready to install a monitored alarm system." },
      { icon: Home, title: "Smart Home Security", body: "Smart locks, sensors, and connected security upgrades." },
      { icon: Camera, title: "Cameras & CCTV", body: "Camera and surveillance systems for homes and properties." },
      { icon: ShieldCheck, title: "Monitoring Upgrades", body: "Homeowners switching or upgrading their monitoring plan." },
      { icon: Building2, title: "Business Security", body: "Light commercial security jobs for teams that take them on." },
      { icon: DoorOpen, title: "Doorbell & Access", body: "Video doorbells and access control from ready buyers." },
    ],
  },
  {
    slug: "painting", name: "Painting", noun: "painting", plural: "painting companies", proLabel: "painter",
    icon: Paintbrush, model: "lead", live: true, leadsPerMonth: "50–300",
    lede: "Exclusive interior and exterior painting leads from homeowners ready for an estimate.",
    metaTitle: "Exclusive Painting Leads | Pay Per Lead Painting Contractor Marketing",
    metaDescription: "Exclusive interior and exterior painting leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["painting leads", "exclusive painting leads", "interior painting leads", "exterior painting leads", "painting contractor marketing", "pay per lead painting"],
    hero: {
      eyebrow: "INTERIOR · EXTERIOR · CABINETS · COMMERCIAL",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "painting leads."],
      sub: "50 to 300 exclusive painting leads a month, delivered straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Paintbrush, title: "Interior Painting", body: "Whole home and room repaints from homeowners ready to book." },
      { icon: Home, title: "Exterior Painting", body: "Full exterior repaints, your highest ticket painting jobs." },
      { icon: Layers, title: "Cabinet Refinishing", body: "Kitchen cabinet painting and refinishing projects." },
      { icon: Fence, title: "Deck & Fence Staining", body: "Deck, fence, and outdoor staining from homeowners." },
      { icon: Building2, title: "Commercial Painting", body: "Light commercial repaints for crews that want them." },
      { icon: Wrench, title: "Drywall & Repair", body: "Prep, drywall, and repair work that pairs with painting." },
    ],
  },
  {
    slug: "concrete", name: "Concrete", noun: "concrete", plural: "concrete contractors", proLabel: "concrete pro",
    icon: Layers, model: "lead", live: true, leadsPerMonth: "40–200",
    lede: "Exclusive concrete leads for driveways, patios, and flatwork from local homeowners.",
    metaTitle: "Exclusive Concrete Leads | Pay Per Lead Concrete Contractor Marketing",
    metaDescription: "Exclusive concrete leads for driveways, patios, and flatwork, delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, cancel anytime.",
    keywords: ["concrete leads", "exclusive concrete leads", "driveway leads", "concrete contractor marketing", "pay per lead concrete", "flatwork leads"],
    hero: {
      eyebrow: "DRIVEWAYS · PATIOS · SLABS · FOUNDATIONS",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "concrete leads."],
      sub: "40 to 200 exclusive concrete leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Home, title: "Driveways", body: "New and replacement driveways, your bread and butter jobs." },
      { icon: Layers, title: "Patios & Walkways", body: "Patios, walkways, and flatwork from homeowners upgrading outside." },
      { icon: Blocks, title: "Concrete Slabs", body: "Slabs for sheds, garages, and additions." },
      { icon: Sparkles, title: "Stamped & Decorative", body: "Stamped and decorative concrete, higher margin work." },
      { icon: Building2, title: "Foundations & Footings", body: "Foundation and footing work for builds and additions." },
      { icon: Wrench, title: "Repair & Resurfacing", body: "Crack repair and resurfacing from homeowners." },
    ],
  },
  {
    slug: "landscaping", name: "Landscaping", noun: "landscaping", plural: "landscaping companies", proLabel: "landscaper",
    icon: Sprout, model: "lead", live: true, leadsPerMonth: "50–300",
    lede: "Exclusive landscaping and lawn leads from homeowners in your service area.",
    metaTitle: "Exclusive Landscaping Leads | Pay Per Lead Landscaping Marketing",
    metaDescription: "Exclusive landscaping and lawn leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["landscaping leads", "exclusive landscaping leads", "lawn care leads", "landscape design leads", "landscaping marketing", "pay per lead landscaping"],
    hero: {
      eyebrow: "DESIGN · SOD · IRRIGATION · PLANTING",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "landscaping leads."],
      sub: "50 to 300 exclusive landscaping leads a month, delivered straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Sprout, title: "Lawn Installation", body: "New lawn installs from homeowners starting fresh." },
      { icon: Leaf, title: "Landscape Design", body: "Full design and build projects, your highest ticket work." },
      { icon: Sprout, title: "Sod & Seeding", body: "Sod, seeding, and lawn renovation jobs." },
      { icon: Droplets, title: "Irrigation Systems", body: "Sprinkler and irrigation installs and repairs." },
      { icon: Layers, title: "Mulching & Beds", body: "Mulch, beds, and seasonal refresh work." },
      { icon: TreePine, title: "Trees & Shrubs", body: "Planting projects for trees, shrubs, and gardens." },
    ],
  },
  {
    slug: "gutters", name: "Gutters", noun: "gutter", plural: "gutter companies", proLabel: "gutter pro",
    icon: Droplets, model: "lead", live: true, leadsPerMonth: "40–200",
    lede: "Exclusive gutter installation and guard leads from homeowners ready for a quote.",
    metaTitle: "Exclusive Gutter Leads | Pay Per Lead Gutter Installation Marketing",
    metaDescription: "Exclusive gutter installation and guard leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["gutter leads", "exclusive gutter leads", "gutter installation leads", "gutter guard leads", "gutter company marketing", "pay per lead gutters"],
    hero: {
      eyebrow: "INSTALLATION · GUARDS · SEAMLESS · REPAIR",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "gutter leads."],
      sub: "40 to 200 exclusive gutter leads a month, sent straight to your team. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Droplets, title: "Gutter Installation", body: "New gutter systems from homeowners ready to install." },
      { icon: ShieldCheck, title: "Gutter Guards", body: "Guard and leaf protection add-ons, strong margins." },
      { icon: Wrench, title: "Gutter Repair", body: "Repairs and re-hangs from homeowners with issues." },
      { icon: Home, title: "Seamless Gutters", body: "Seamless gutter jobs for full home coverage." },
      { icon: Droplet, title: "Downspouts", body: "Downspout and drainage work that pairs with installs." },
      { icon: SprayCan, title: "Cleaning & Maintenance", body: "Cleaning and maintenance from repeat homeowners." },
    ],
  },
  {
    slug: "pressure-washing", name: "Pressure Washing", noun: "pressure washing", plural: "pressure washing companies", proLabel: "washing pro",
    icon: SprayCan, model: "lead", live: true, leadsPerMonth: "60–300",
    lede: "Exclusive pressure washing leads for driveways, homes, and decks from local homeowners.",
    metaTitle: "Exclusive Pressure Washing Leads | Pay Per Lead Marketing",
    metaDescription: "Exclusive pressure washing leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["pressure washing leads", "exclusive pressure washing leads", "power washing leads", "soft wash leads", "pressure washing marketing", "pay per lead pressure washing"],
    hero: {
      eyebrow: "HOUSE WASH · DRIVEWAYS · DECKS · ROOF WASH",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "ready" }], "pressure washing leads."],
      sub: "60 to 300 exclusive pressure washing leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Home, title: "House Washing", body: "Full exterior house washing from homeowners refreshing their home." },
      { icon: Layers, title: "Driveway & Concrete", body: "Driveways, sidewalks, and concrete cleaning jobs." },
      { icon: Fence, title: "Deck & Patio", body: "Deck, patio, and outdoor surface washing." },
      { icon: Droplets, title: "Roof Soft Wash", body: "Soft wash roof cleaning, higher ticket work." },
      { icon: Building2, title: "Commercial Washing", body: "Storefront and commercial washing for crews that want it." },
      { icon: SprayCan, title: "Fence Cleaning", body: "Fence and gate cleaning that pairs with bigger jobs." },
    ],
  },
  {
    slug: "pest-control", name: "Pest Control", noun: "pest control", plural: "pest control companies", proLabel: "pest pro",
    icon: Bug, model: "lead", live: true, leadsPerMonth: "60–350",
    lede: "Exclusive pest control leads from homeowners looking to book service now.",
    metaTitle: "Exclusive Pest Control Leads | Pay Per Lead Pest Control Marketing",
    metaDescription: "Exclusive pest control leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["pest control leads", "exclusive pest control leads", "termite leads", "rodent control leads", "pest control marketing", "pay per lead pest control"],
    hero: {
      eyebrow: "GENERAL · TERMITE · RODENT · MOSQUITO",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "ready" }], "pest control leads."],
      sub: "60 to 350 exclusive pest control leads a month, sent straight to your team. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Bug, title: "General Pest Control", body: "Recurring and one-time pest treatment from homeowners." },
      { icon: Home, title: "Termite Treatment", body: "Termite inspections and treatment, high value jobs." },
      { icon: Shield, title: "Rodent Control", body: "Rodent and exclusion work from homeowners with issues." },
      { icon: Droplet, title: "Mosquito & Tick", body: "Seasonal mosquito and tick programs." },
      { icon: ShieldCheck, title: "Bed Bug Treatment", body: "Bed bug treatment from homeowners who need it now." },
      { icon: TreePine, title: "Wildlife Removal", body: "Nuisance wildlife removal and prevention." },
    ],
  },
  {
    slug: "fencing", name: "Fencing", noun: "fencing", plural: "fencing companies", proLabel: "fence pro",
    icon: Fence, model: "lead", live: true, leadsPerMonth: "40–200",
    lede: "Exclusive fence installation and repair leads from homeowners in your area.",
    metaTitle: "Exclusive Fencing Leads | Pay Per Lead Fence Installation Marketing",
    metaDescription: "Exclusive fence installation and repair leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["fencing leads", "exclusive fencing leads", "fence installation leads", "fence company marketing", "pay per lead fencing", "fence repair leads"],
    hero: {
      eyebrow: "WOOD · VINYL · CHAIN LINK · ALUMINUM",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "fencing leads."],
      sub: "40 to 200 exclusive fencing leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Fence, title: "Wood Fencing", body: "Wood privacy fence installs from homeowners ready to build." },
      { icon: Layers, title: "Vinyl Fencing", body: "Vinyl and PVC fence installs, strong margins." },
      { icon: Blocks, title: "Chain Link", body: "Chain link fencing for yards and properties." },
      { icon: Building2, title: "Aluminum & Ornamental", body: "Aluminum and ornamental fence work, higher ticket." },
      { icon: Wrench, title: "Fence Repair", body: "Repairs and replacements from homeowners with damage." },
      { icon: DoorOpen, title: "Gates & Access", body: "Gates and access add-ons that pair with installs." },
    ],
  },
  {
    slug: "deck", name: "Deck Building", noun: "deck building", plural: "deck builders", proLabel: "deck builder",
    icon: SquareStack, model: "lead", live: true, leadsPerMonth: "30–180",
    lede: "Exclusive deck building and repair leads from homeowners ready for an estimate.",
    metaTitle: "Exclusive Deck Building Leads | Pay Per Lead Deck Contractor Marketing",
    metaDescription: "Exclusive deck building and repair leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["deck leads", "exclusive deck leads", "deck building leads", "composite deck leads", "deck contractor marketing", "pay per lead decks"],
    hero: {
      eyebrow: "NEW BUILDS · COMPOSITE · REPAIR · PERGOLAS",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "deck building leads."],
      sub: "30 to 180 exclusive deck leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Hammer, title: "New Deck Builds", body: "New deck construction, your highest ticket projects." },
      { icon: Layers, title: "Composite Decking", body: "Composite and low maintenance deck installs." },
      { icon: Wrench, title: "Deck Repair", body: "Repairs, resurfacing, and board replacement." },
      { icon: Paintbrush, title: "Deck Staining", body: "Staining and sealing from homeowners maintaining decks." },
      { icon: Home, title: "Pergolas & Covers", body: "Pergolas, covers, and outdoor structures." },
      { icon: Blocks, title: "Railings & Stairs", body: "Railing and stair add-ons that pair with builds." },
    ],
  },
  {
    slug: "hardscaping", name: "Hardscaping", noun: "hardscaping", plural: "hardscaping companies", proLabel: "hardscaper",
    icon: Blocks, model: "lead", live: true, leadsPerMonth: "30–180",
    lede: "Exclusive hardscaping and paver leads from homeowners planning outdoor projects.",
    metaTitle: "Exclusive Hardscaping Leads | Pay Per Lead Hardscape Marketing",
    metaDescription: "Exclusive hardscaping and paver leads delivered within 24 hours. We cover the ad spend, you pay per lead. Never shared, control your volume, cancel anytime.",
    keywords: ["hardscaping leads", "exclusive hardscaping leads", "paver patio leads", "retaining wall leads", "hardscape marketing", "pay per lead hardscaping"],
    hero: {
      eyebrow: "PAVERS · RETAINING WALLS · PATIOS · FIRE PITS",
      title: ["We fill your pipeline", ["with exclusive, ", { brass: "qualified" }], "hardscaping leads."],
      sub: "30 to 180 exclusive hardscaping leads a month, sent straight to your crews. No shared leads, no ad spend, no contract.",
    },
    jobTypes: [
      { icon: Blocks, title: "Paver Patios", body: "Paver patios and courtyards, your core high ticket work." },
      { icon: Layers, title: "Retaining Walls", body: "Retaining and seating walls for sloped yards." },
      { icon: MapPin, title: "Walkways", body: "Walkways and paths that connect outdoor spaces." },
      { icon: Utensils, title: "Outdoor Kitchens", body: "Outdoor kitchens and living areas, premium projects." },
      { icon: Flame, title: "Fire Pits", body: "Fire pits and features homeowners add to patios." },
      { icon: Home, title: "Driveways & Borders", body: "Paver driveways and borders for full curb appeal." },
    ],
  },
  {
    slug: "remodeling", name: "Remodeling", noun: "remodeling", plural: "remodeling contractors", proLabel: "remodeler",
    icon: Hammer, model: "appointment", live: true,
    lede: "Qualified, shown remodeling consultations booked onto your calendar. You pay only when they show.",
    metaTitle: "Pay Per Shown Appointment Remodeling Marketing | Remodeling Leads",
    metaDescription: "Qualified, shown remodeling consultations on your calendar. We cover ad spend, lead gen, qualification, and confirmation. Pay only when a homeowner shows, $350–450 per appointment.",
    keywords: ["remodeling leads", "remodeling appointments", "kitchen remodel leads", "bathroom remodel leads", "pay per appointment remodeling", "remodeling contractor marketing"],
    hero: {
      eyebrow: "KITCHEN · BATH · WHOLE HOME REMODELS",
      title: ["We fill your calendar", ["with qualified, ", { brass: "shown" }], "remodeling appointments."],
      sub: "Or you don't pay. Built for remodeling contractors who want booked consultations, not shared leads or a monthly ad bill.",
    },
  },
  {
    slug: "hvac", name: "HVAC", noun: "HVAC", plural: "HVAC companies", proLabel: "HVAC company",
    icon: Wind, model: "appointment", live: true,
    lede: "Qualified, shown HVAC appointments booked onto your calendar. You pay only when they show.",
    metaTitle: "Pay Per Shown Appointment HVAC Marketing | HVAC Leads & Appointments",
    metaDescription: "Qualified, shown HVAC appointments on your calendar. We cover ad spend, lead gen, qualification, and confirmation. Pay only when the homeowner shows, $350–450 per appointment.",
    keywords: ["hvac leads", "hvac appointments", "ac replacement leads", "furnace replacement leads", "pay per appointment hvac", "hvac contractor marketing"],
    hero: {
      eyebrow: "AC · FURNACE · INSTALL · REPLACEMENT",
      title: ["We fill your calendar", ["with qualified, ", { brass: "shown" }], "HVAC appointments."],
      sub: "Or you don't pay. Built for HVAC companies that want booked replacement and install visits, not shared leads or a monthly ad bill.",
    },
  },
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

/* ---- The model commitments ---- */
export const PILLARS = [
  { icon: Wallet, title: "We Cover the Ad Spend", lead: "Not just “we run the ads.”", body: "Most agencies say they handle the ads, then hand you the daily ad bill whether a homeowner shows or not. We cover the ad spend and the creative, so the risk sits with us, not you." },
  { icon: ShieldCheck, title: "Exclusive, Never Shared", lead: "Nothing generic to share.", body: "Shared lead platforms sell the same homeowner to several contractors racing to answer first. Every lead and appointment we deliver is 100% exclusive to your company." },
  { icon: MapPin, title: "You Control the Volume", lead: "Scale up, pause, resume.", body: "Want more leads this week or a breather while you catch up? You set the volume and can pause or resume anytime. No long-term contracts holding you hostage." },
];

/* ---- The model commitments (appointment framing) ---- */
export const APPT_PILLARS = [
  { icon: Wallet, title: "We Cover the Ad Spend", lead: "Not just “we run the ads.”", body: "Most agencies say they handle the ads, then hand you the daily ad bill whether a homeowner shows or not. We cover the ad spend and the creative. If campaigns do not produce appointments, we lose money, not you." },
  { icon: ShieldCheck, title: "Pay Per Shown Appointment", lead: "Easy to claim. Harder to honor.", body: "We define exactly what counts as a qualified, shown consultation before we start. You pay only when a homeowner actually shows. Never for no shows, reschedules, or leads that go nowhere." },
  { icon: MapPin, title: "Exclusive Territory", lead: "Nothing generic to share.", body: "Shared lead platforms sell the same lead to several contractors racing to answer first. We run a custom campaign under your brand in your market, and we will not run a competing account next door." },
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

/* ---- Per-niche FAQ, tailored by name + model ---- */
export function nicheFaq(niche) {
  const n = niche.name;
  const noun = niche.noun;
  if (niche.model === "appointment") {
    return [
      { q: `Do you guarantee ${noun} appointments?`, a: `We guarantee something stronger: you pay only when a qualified homeowner shows up for a booked ${noun} consultation. Lead counts are noise. Shown appointments put jobs on the board, and the risk sits with us, not you.` },
      { q: "Do I pay for the ad spend?", a: `No. We cover the ad spend and the creative. You pay only when a qualified homeowner actually shows for the ${noun} visit. Most agencies still hand you the ad bill. We do not.` },
      { q: "What does it cost?", a: "You pay a flat fee of $350 to 450 per shown appointment, depending on your area and service. No per lead games, no spend markup. We size the exact number together on the call." },
      { q: "Are the appointments exclusive to me?", a: `Yes. We run a custom campaign under your brand in your market and will not run a competing ${n} account next door. Every appointment is exclusively yours.` },
      { q: "How quickly can we launch?", a: "After you decide to move forward, we book onboarding within a few business days, and most clients are live shortly after. Because we run from our own ad account, there is no waiting on access handoffs." },
    ];
  }
  return [
    { q: `Are the ${noun} leads shared with other contractors?`, a: `Never. Every ${noun} lead is 100% exclusive to your company. We do not resell the same homeowner and we do not run a competing account in your market. You are the only one in the conversation.` },
    { q: "Do I pay for the ad spend?", a: `No. We cover the ad spend and all lead generation. You pay only per exclusive ${noun} lead delivered to your team.` },
    { q: "How does the trial work?", a: "Start with a $200 3-day trial that delivers 10 to 20 exclusive homeowner estimates so you can test the quality yourself, with full CRM access. No auto-renewal surprises, we ask before continuing." },
    { q: "Can I control how many leads I get?", a: "Yes. You set the volume and can pause or resume anytime. Scale up when your crews open up, ease off when you are catching up. No long-term contracts." },
    { q: `Who is ${n} lead generation not for?`, a: "This is not for one man shows. We send real daily volume and you need someone dedicated to following up fast or leads go cold. We work with established companies that have a team and a process." },
    { q: "How fast should I call a new lead?", a: "Within 5 minutes while the lead is warm. Companies that follow that process consistently book 40 to 50% of their leads into estimates. Speed is the single biggest factor in your close rate." },
  ];
}

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
