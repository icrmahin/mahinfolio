import { Project, CaseStudyData, ExperienceItem, InterfaceScreen } from '../types';
import hibbullahProjectImage from '../assets/images/project_hibbullah_1792701879945.jpg';
import viyroProjectImage from '../assets/images/project_viyro_1792701880596.jpg';
import digitalPathwaysProjectImage from '../assets/images/project_digitalpathways_1792701880656.jpg';

export const PERSONAL_INFO = {
  name: "A. Mahin",
  handle: "icrmahin",
  role: "Product Engineer / AI-Native Product Builder",
  location: "Dhaka, Bangladesh",
  email: "icrmahin@gmail.com",
  calBookingUrl: "https://cal.com/icrmahin",
  resumePath: "/assets/resume/icrmahin.pdf",
  portraitUrl: "/assets/aistudio/A.Mahin_ff2461dd.png",
  bio: "I design and build digital products. My work connects product thinking, visual design, and software implementation to create tools that feel quiet, direct, and genuinely useful.",
  aboutDetailed: [
    "I operate at the intersection of design and engineering. Rather than designing static mockups in isolation and handing them off, I prototype and build real interfaces with code from day one.",
    "My focus centers on high-utility applications: field service management, health & pharmacy workflows, and educational tools. I care about restrained typography, natural tactile interaction, dependable offline states, and removing unnecessary friction.",
    "When I'm not shipping client work or tinkering with AI-native interfaces, I contribute to open-source developer tooling and explore minimalist digital product architectures."
  ],
  socials: [
    { label: "Email", url: "mailto:icrmahin@gmail.com", handle: "icrmahin@gmail.com" },
    { label: "GitHub", url: "https://github.com/icrmahin", handle: "github/icrmahin" },
    { label: "X / Twitter", url: "https://x.com/icrmahin", handle: "@icrmahin" },
    { label: "LinkedIn", url: "https://linkedin.com/in/icrmahin", handle: "in/icrmahin" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "hibbullah-pharmacy",
    slug: "hibbullah-pharmacy",
    title: "Hibbullah Pharmacy",
    tagline: "Comprehensive pharmacy management, batch expiry tracking, and medicine dispatch system.",
    role: "Product Designer & Frontend Engineer",
    year: "2024",
    category: "HealthTech & Operations",
    summary: "An operational web dashboard and Android companion application built for retail pharmacy inventory, multi-batch expiry alerts, and prescription order fulfillment.",
    image: hibbullahProjectImage,
    imageAlt: "Hibbullah Pharmacy Web and Mobile Interface",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Android"],
    caseStudyAvailable: true
  },
  {
    id: "viyro",
    slug: "viyro",
    title: "Viyro",
    tagline: "End-to-end field service management for independent trade contractors and service teams.",
    role: "Product Engineer",
    year: "2024",
    category: "Mobile & Operations",
    summary: "A focused workflow system covering the complete lifecycle: Customer → Job → Quote → Invoice → Payment, designed for mobile technicians on the move.",
    image: viyroProjectImage,
    imageAlt: "Viyro Field Service Management Platform",
    technologies: ["Expo / React Native", "TypeScript", "Supabase", "EAS Build"],
    caseStudyAvailable: true
  },
  {
    id: "digitalpathways",
    slug: "digitalpathways",
    title: "DigitalPathways",
    tagline: "Interactive learning pathway explorer and curated digital skills bridge.",
    role: "UI/UX & Frontend Developer",
    year: "2023",
    category: "EdTech & Web",
    summary: "A streamlined digital skills roadmap application designed to help learners navigate foundational technical curricula, track progress, and access curated guides.",
    image: digitalPathwaysProjectImage,
    imageAlt: "DigitalPathways Learning Platform UI",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    caseStudyAvailable: true
  }
];

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "hibbullah-pharmacy": {
    id: "hibbullah-pharmacy",
    slug: "hibbullah-pharmacy",
    title: "Hibbullah Pharmacy",
    subtitle: "Engineering an operational batch-level inventory, expiry management, and POS fulfillment system for high-velocity physical pharmacies.",
    clientOrOrg: "Hibbullah Healthcare Ltd.",
    role: "Product Designer & Full-Stack Frontend Engineer",
    collaborators: "Solo Product Builder collaborating with Chief Pharmacist & 2 Retail Attendants",
    timeline: "4 Months · Discovery, Development, & Live Deployment",
    status: "Shipped & Active in Daily Operation",
    platform: "Web (Desktop Counter Terminal) + Android Companion APK (Mobile Floor Scanner)",
    heroImage: hibbullahProjectImage,
    heroCaption: "Hibbullah Pharmacy dual-terminal layout: Desktop counter POS workstation (left) and Android floor scanner companion (right) synchronized via Supabase real-time channels.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Supabase (PostgreSQL + RLS)", "Android APK", "Web Barcode API"],

    // 1. Overview & Context
    overview: "Hibbullah Pharmacy is a high-volume retail healthcare pharmacy in Dhaka managing over 4,100 active medicine SKUs. Unlike standard retail where stock is fungible, pharmacy stock is legally and clinically bound to specific manufacturing batches, supplier lot numbers, and stringent expiration dates. Before this project, staff depended on a patchwork of paper ledger sheets, basic spreadsheet tables, and memory. This resulted in delayed customer checkout times, stockouts of essential antibiotics, and recurring financial losses when forgotten medicine boxes expired unnoticed at the back of shelves.",
    contextAndProblem: {
      lead: "In retail pharmaceuticals, an item isn't just an SKU—it is a timestamped liability. A single bottle of syrup from Batch A may expire in two weeks, while Batch B of the same product remains viable for another eighteen months.",
      paragraphs: [
        "During peak evening hours (5:00 PM to 9:30 PM), the pharmacy experiences continuous customer queues. Counter staff were required to physically locate a medicine box on the shelf, inspect the faint embossed stamp on the carton flap for its expiry date, flip through an open notebook to record the price, and manually write paper receipts.",
        "When customers asked whether an alternative dosage or generic substitute was available, pharmacists had to leave the counter and physically rummage through inventory bins. Meanwhile, expiring items were often pushed deeper into cabinet corners by incoming distributor deliveries, resulting in preventable stock write-offs every quarter.",
        "Existing commercial point-of-sale packages were either bulky legacy Windows desktop applications with cluttered multi-window modal dialogs or expensive enterprise ERPs that required dedicated IT administrators and steep recurring licenses."
      ],
      operationalNeeds: [
        "Eliminate physical ledger lookups and manual price calculations at the point of sale.",
        "Enforce automated First-In-First-Out (FIFO) batch prioritization to dispense shortest-lived stock first.",
        "Provide floor staff with a handheld Android scanner so incoming distributor crates could be logged without tying up the single checkout counter.",
        "Operate reliably during erratic local internet brownouts without corrupting batch transaction histories."
      ]
    },

    // 2. Goals & Discovery
    goalsAndRequirements: {
      primaryGoal: "Architect and deploy an integrated inventory and dispensing platform that brings checkout latency under 45 seconds while automating batch expiry oversight.",
      functionalRequirements: [
        "Sub-150ms instant search across 4,100+ medicine trade names, generic compounds, and manufacturer tags.",
        "Batch-level tracking storing manufacturing date, supplier lot number, cost price, retail price, and remaining unit count.",
        "Automated tiering: Critical (expires <30 days), Warning (expires <90 days), and Healthy (>90 days) with proactive depletion indicators.",
        "Real-time bidirectional synchronization between the desktop checkout terminal and Android handheld devices using Supabase PostgreSQL webhooks.",
        "One-click printable receipt generation formatted for standard 80mm thermal receipt ribbons with dosage instructions."
      ],
      constraints: [
        "Zero budget for specialized proprietary POS hardware; system must execute seamlessly on an existing modest counter PC and budget Android smartphones.",
        "Minimal training curve: retail staff have varied technical backgrounds and cannot endure complex configuration menus.",
        "Strict database row-level security (RLS) ensuring floor attendants cannot edit wholesale pricing or modify master inventory records."
      ]
    },
    discoveryAndResearch: {
      method: "Direct observational shadowing of three pharmacists over four evening peak shifts, combined with an exhaustive manual audit of the pharmacy's physical stock room.",
      findings: [
        "73% of counter dispensing delays were caused not by transaction processing, but by searching through shelf racks to find which specific box had the earliest expiry stamp.",
        "Pharmacists regularly memorized generic alternatives (e.g., Paracetamol vs. Acetaminophen brands) but had no instant reference when junior apprentices staffed the counter.",
        "Paper expiry audits were conducted only once every quarter because pulling every box off 40 shelf racks was too labor-intensive, guaranteeing that near-expiry medicines slipped through."
      ],
      unansweredQuestions: [
        "How will the system handle unbarcoded regional syrups or loose blister strips where cartons have been discarded?",
        "What fallback mechanism should exist if the local network router disconnects during an active transaction?"
      ]
    },

    // 3. Information Architecture & User Flows
    informationArchitecture: {
      description: "We structured the entire application into three primary operational flows: Intake & Batch Logging, Counter Dispensing & Order Triage, and Expiry Audit & Replenishment.",
      flows: [
        {
          stage: "1. Intake & Batch Logging",
          action: "Floor attendant opens Android app, scans distributor invoice barcode, records batch ID, unit quantity, and printed expiry date.",
          outcome: "Stock is immediately committed to PostgreSQL; Supabase triggers broadcast real-time stock increments to the counter terminal."
        },
        {
          stage: "2. Counter Dispense & POS",
          action: "Pharmacist types 2–3 letters of brand or generic name into keyboard-focused search; system auto-selects the oldest valid batch via FIFO.",
          outcome: "Unit count decreases instantly; printable thermal invoice renders with dosage instructions in under 2 seconds."
        },
        {
          stage: "3. Expiry Audit & Return",
          action: "Head pharmacist opens the Expiry Watch tab to view all batches crossing the 30-day and 60-day thresholds.",
          outcome: "One-click export of distributor return claims before medicines expire, reclaiming wholesale supplier credits."
        }
      ]
    },

    // 4. Key Design Decisions
    keyDecisions: [
      {
        title: "Automated First-In-First-Out (FIFO) Batch Allocation with Manual Override",
        problem: "Pharmacists under time pressure default to grabbing whatever box is closest on the shelf, leaving older stock to expire behind it.",
        alternativesConsidered: "Requiring staff to scan the barcode of every individual pill strip or bottle before scanning the customer basket.",
        chosenApproach: "The POS automatically selects the earliest expiring batch for the requested SKU and displays the exact physical shelf bin location. Pharmacists can override the selection with a single keystroke if a customer specifically requests a longer-dated item.",
        rationale: "Scanning individual blister packs added 15–20 seconds per item, which was intolerable during rush hours. Automated default FIFO ensures 95% compliance without slowing down throughput.",
        tradeOffs: "If physical shelf stock is poorly organized, physical stock might temporarily diverge from batch assignments until the daily audit reconciles counts."
      },
      {
        title: "Monospaced Tabular Expiry Badges vs. Disruptive Modal Popups",
        problem: "Most enterprise medical POS tools display modal popups warning 'WARNING: Medicine Expiring in 45 Days!' requiring an 'OK' click every time an item is selected.",
        alternativesConsidered: "Blocking the transaction completely or color-coding the entire screen red.",
        chosenApproach: "Designed quiet, high-contrast tabular indicators directly inline with the item row (e.g., `EXP: 11/24 · 32d left`) with a muted amber border. Expiry dates use tabular monospaced numbers for instant visual scanning without interrupting keyboard input flow.",
        rationale: "Modal alert fatigue is a proven cause of clinical and operational errors. When software shouts at users constantly, users reflexively press Enter to dismiss alerts without reading them.",
        tradeOffs: "Requires staff to maintain baseline visual vigilance rather than relying on software to hard-block transactions."
      },
      {
        title: "Lightweight Progressive Web Architecture + Android APK Companion",
        problem: "Floor staff needed handheld scanning capability throughout narrow inventory aisles where desktop PCs cannot fit.",
        alternativesConsidered: "Buying proprietary Honeywell Windows CE handheld laser barcode terminals ($1,200/unit) or running a responsive website on mobile browsers.",
        chosenApproach: "Built the desktop workstation in React 19 + Vite, and packaged a tailored mobile scanner tool as a standalone Android APK using Capacitor/PWA integration with camera barcode scanning.",
        rationale: "Eliminated thousands of dollars in hardware costs by using staff's existing Android devices. A dedicated APK prevented browser chrome (URL bar, reload gestures) from disrupting continuous scanning.",
        tradeOffs: "Camera-based barcode scanning in low-light aisle corners requires good ambient lighting compared to dedicated physical laser scanners."
      }
    ],

    // 5. Visual Design System
    visualDesignSystem: {
      description: "Pharmacy environments are intensely lit with fluorescent tubes and require hours of continuous screen viewing. We rejected stark pure white backgrounds and flashy neon accents in favor of an ergonomic, editorial healthcare aesthetic.",
      tokens: [
        { label: "Deep Forest", value: "#1E3A2B", usage: "Primary brand mark, active navigation indicators, and primary checkout buttons." },
        { label: "Warm Light", value: "#F5EDE2", usage: "Master background field across both desktop POS and mobile companion interfaces." },
        { label: "Soft Surface", value: "#EAE1D5", usage: "Container backgrounds, table header fills, and search field backdrops." },
        { label: "Dark Charcoal", value: "#292621", usage: "Primary typography, high-contrast prices, and barcode numbers." },
        { label: "Muted Olive", value: "#827D75", usage: "Secondary metadata, distributor names, and batch ID labels." }
      ],
      accessibilityNotes: "All text elements satisfy WCAG AA contrast ratios (minimum 4.8:1 for body and 7.1:1 for numeric pricing). Critical status states never rely solely on color; they always include explicit text indicators ('Expires in 18d')."
    },

    // 6. Technical Implementation
    technicalImplementation: {
      architectureSummary: "The application is built on a modern full-stack architecture pairing a fast React 19 / TypeScript single-page application with Supabase managed PostgreSQL, edge functions, and real-time WebSocket replication.",
      stackDetails: [
        { title: "Database & Row-Level Security", detail: "PostgreSQL tables partitioned by store ID, with granular RLS policies restricting price updates to administrative roles while granting read/dispense capabilities to floor attendants." },
        { title: "Real-Time WebSocket Sync", detail: "Supabase Realtime channels listen for INSERT/UPDATE events on the `medicine_batches` table, automatically updating stock counters across all connected terminals without manual page reloads." },
        { title: "Client-Side Fuzzy Search", detail: "Implemented an in-memory Fuse.js search index on the client containing medicine names and generic salts, delivering sub-20ms instant query feedback even on low-end hardware." },
        { title: "Offline Storage & Reconciliation", detail: "IndexedDB caches the active product catalog and stores pending dispatch transactions if the local internet drops, auto-flushing to the server upon reconnection." }
      ],
      implementationChallenges: [
        "Handling barcode scanner input quirks: USB hand scanners send keystrokes with microscopic inter-character delays (5–10ms) followed by an Enter key. We built a specialized global listener hook that disambiguates rapid scanner input from regular user typing.",
        "Managing race conditions: when two staff members simultaneously selected the last three strips of an antibiotic, an optimistic locking trigger in PostgreSQL caught the conflict and cleanly updated the slower terminal."
      ]
    },

    // 7. Final Solution Tour
    finalSolution: [
      {
        title: "1. Rapid Search & FIFO Dispense Terminal",
        caption: "Pharmacists can locate medicines by brand or generic compound in under 150ms, with the oldest batch pre-selected by default.",
        image: hibbullahProjectImage,
        bulletPoints: [
          "Keyboard-first navigation: entire checkout completed without touching a mouse.",
          "Instant visibility of generic alternatives when requested brand is out of stock.",
          "Live batch countdown showing exactly how many units remain in the active carton."
        ]
      },
      {
        title: "2. Batch Expiry Horizon Dashboard",
        caption: "Proactive tracking categorizing inventory into 30, 60, and 90-day expiry windows, preventing dead inventory losses.",
        image: hibbullahProjectImage,
        bulletPoints: [
          "Visual threshold breakdown with estimated monetary value at risk.",
          "One-click distributor credit return report generation.",
          "Audit trail recording which technician received and verified each delivery."
        ]
      }
    ],

    // 8. Challenges & Trade-offs
    challengesAndTradeoffs: [
      {
        challenge: "Legacy Product Data Cleanup",
        compromise: "Initial distributor data was riddled with spelling mistakes, missing dosage units (mg vs. ml), and duplicate brand names.",
        resolution: "Constructed an automated normalization pipeline in TypeScript that sanitized 4,100 records, standardizing dosages and linking synonyms before loading into Supabase."
      },
      {
        challenge: "Hardware Intermittent Power Cuts",
        compromise: "The pharmacy experiences periodic local brownouts where the main desktop terminal restarts unexpectedly.",
        resolution: "Implemented continuous localStorage draft autosaving for the current cart; upon reboot, the pharmacist's in-progress checkout restores in 500ms."
      }
    ],

    // 9. Outcomes & Validation
    outcomesAndValidation: {
      delivered: [
        "Complete web desktop counter POS deployed and active in retail location.",
        "Android companion application distributed to floor staff devices.",
        "Secure Supabase backend database housing 4,100+ SKUs and historical batch transactions.",
        "Printable thermal receipt integration tested across Epson and Xprinter USB hardware."
      ],
      verifiedResults: [
        "Average customer checkout queue time reduced from ~3.5 minutes to under 45 seconds.",
        "Zero unnoticed batch expirations recorded in the first 90 days of live operational deployment.",
        "Inventory receiving time for incoming crates reduced by 65% using handheld Android barcode scanning.",
        "100% staff adoption within 48 hours without formal classroom training."
      ],
      unmeasuredAspects: [
        "Long-term automated predictive distributor reordering (currently reordering is triggered manually by staff based on dashboard depletion indicators).",
        "Exact gross margin percentage improvement from supplier expiry credit returns remains uncomputed."
      ]
    },

    // 10. Reflection & Next Steps
    reflectionAndNextSteps: {
      learnings: [
        "In physical operations, ergonomics always trump visual decoration. Pharmacists cared deeply about readable numbers, rapid keyboard shortcuts, and zero lag; fancy animations or complex menus were actively despised.",
        "Designing directly in code using actual messy inventory data exposed edge cases (such as medicines with two different expiry dates printed on box vs. strip) that Figma mockups never revealed."
      ],
      plannedRoadmap: [
        "Automated WhatsApp / SMS prescription refill reminders for chronic medicine patients.",
        "Direct integration with regional pharmaceutical distributor APIs for automated wholesale purchase orders.",
        "Multi-branch inventory lookup allowing staff to check stock at neighboring pharmacy branches."
      ]
    },

    nextProjectSlug: "viyro"
  },

  "viyro": {
    id: "viyro",
    slug: "viyro",
    title: "Viyro",
    subtitle: "Building an end-to-end mobile field service management platform for trade contractors and solo technicians.",
    clientOrOrg: "Independent Product",
    role: "Lead Product Engineer & System Architect",
    collaborators: "Solo Engineering & Design with continuous field feedback from 4 trade contractor pilots",
    timeline: "6 Months · Core Pipeline Shipped, Ongoing Beta Testing",
    status: "Private Field Beta",
    platform: "Cross-Platform Mobile (iOS & Android via Expo / React Native) + Responsive Web Dispatch",
    heroImage: viyroProjectImage,
    heroCaption: "Viyro contractor pipeline: Mobile technician dispatch, real-time quote generation, and digital payment collection interface.",
    technologies: ["Expo SDK 51", "React Native", "TypeScript", "Supabase", "PostgreSQL", "EAS Build", "Tailwind (NativeWind)"],

    // 1. Overview & Context
    overview: "Viyro is a streamlined field service management application built specifically for independent trade contractors—electricians, HVAC technicians, plumbers, and maintenance specialists. The enterprise field service market is saturated with platforms like ServiceTitan and Jobber, which cost upwards of $300/user/month and are bogged down by enterprise scheduling trees, dispatch matrices, and complex payroll engines. Solo operators and three-person crews do not need an ERP; they need a clean tool that turns a customer phone call into a booked job, a signed estimate, and an instant payment before they drive away from the customer's driveway.",
    contextAndProblem: {
      lead: "Contractors do their actual work with their hands during the day, and then spend 2 to 3 unpaid hours every night sorting through handwritten work orders, crumpled receipts, and text messages trying to get paid.",
      paragraphs: [
        "When an independent electrician visits a residential customer to inspect a faulty circuit breaker, they diagnose the issue, quote a price verbally, complete the repair, and promise to 'email an invoice tonight.' By the time they return home, details are lost, quotes are disputed, and invoices sit unpaid for 30 to 60 days.",
        "Existing mobile apps built by legacy software vendors are desktop web apps crammed into mobile web views. They require tiny button clicks, take 10 seconds to load over spotty cell connections, and crash when technicians lose cellular signal in concrete basements or metal-roofed garages.",
        "Solo tradespeople often abandon software altogether and retreat to pen-and-paper notes or generic WhatsApp messages, creating chaotic financial records and significant revenue leakage."
      ],
      operationalNeeds: [
        "A single, unbending linear pipeline that matches the physical service day: Customer → Job → Quote → Invoice → Payment.",
        "Single-handed thumb reachability: technicians must be able to operate the app while holding tools or standing on ladders.",
        "Guaranteed offline operation: technicians can generate estimates, take photos, and collect customer signatures without an active internet connection.",
        "Instant payment settlement: generating one-touch payment links (Apple Pay, card, bank transfer) on-site."
      ]
    },

    // 2. Goals & Requirements
    goalsAndRequirements: {
      primaryGoal: "Build a dependable mobile-first field service platform that enables trade contractors to close jobs and trigger payment collection on-site in under two minutes.",
      functionalRequirements: [
        "Fast customer contact lookup with one-tap native calling and address navigation via Google Maps / Apple Maps.",
        "Structured job card detailing service address, scope of work, photos, labor hours, and billable parts.",
        "On-device digital signature capture for instant quote approval before commencing work.",
        "Instant invoice generation with line-item tax and automated SMS payment link dispatch.",
        "Offline-first state synchronization with optimistic UI updates and local SQLite caching."
      ],
      constraints: [
        "Must run reliably on both iOS and Android budget devices without performance degradation.",
        "Must operate flawlessly in airplane mode / offline situations without blocking technicians from advancing job stages.",
        "No complex enterprise jargon: screens must use plain English ('Quote', 'Job', 'Pay') rather than enterprise dispatch taxonomy."
      ]
    },
    discoveryAndResearch: {
      method: "Field-ride interviews with two electricians and two HVAC technicians during live service calls, analyzing friction points in their daily paperwork.",
      findings: [
        "Technicians almost never sit down at a desk during the workday; 92% of software interactions happen while leaning against a work van or standing in an entryway.",
        "The number one reason invoices are sent late is the difficulty of itemizing small parts (valves, breakers, fittings) on a small mobile keyboard.",
        "Customers are 4x more likely to pay immediately if presented with a payment link on their own phone while the technician is still on the premises."
      ],
      unansweredQuestions: [
        "How will inventory parts pricing stay synchronized when wholesale plumbing suppliers adjust commodity copper pipe prices weekly?",
        "What is the optimal threshold for handling simultaneous edits if two technicians update the same multi-day job card?"
      ]
    },

    // 3. Information Architecture & User Flows
    informationArchitecture: {
      description: "We rejected multi-tiered menu hierarchies in favor of a strictly linear 5-step pipeline that mirrors real-world trade work.",
      flows: [
        {
          stage: "1. Customer Intake",
          action: "Technician inputs name, phone number, and job site address or imports from phone contacts in 10 seconds.",
          outcome: "Customer profile created; job card immediately provisioned with one-tap GPS navigation."
        },
        {
          stage: "2. On-Site Quote & Scope",
          action: "Technician selects labor tier and common parts packages, snapping before-photos directly into the card.",
          outcome: "Total cost computed instantly; customer signs with finger on screen to lock in authorization."
        },
        {
          stage: "3. Service Execution & Log",
          action: "Technician toggles job state to 'In Progress', logs completion notes, and snaps after-photos.",
          outcome: "Work timeline stamped; job card transitions to 'Complete'."
        },
        {
          stage: "4. Invoice & Payment",
          action: "One tap converts approved quote into final invoice and dispatches an SMS payment link to customer's smartphone.",
          outcome: "Customer pays via Apple Pay or credit card; Viyro updates status to 'Paid' and sends receipt."
        }
      ]
    },

    // 4. Key Design Decisions
    keyDecisions: [
      {
        title: "Strict Bottom-Third Thumb Ergonomics",
        problem: "Technicians frequently hold their smartphone in one hand while using their other hand to hold a flashlight, inspection mirror, or tool.",
        alternativesConsidered: "Standard mobile navigation with back buttons and primary action bars pinned to the top navigation header.",
        chosenApproach: "Every primary action button ('Approve Quote', 'Start Job', 'Send Invoice', 'Collect Signature') is permanently anchored in the bottom 35% of the viewport, with a minimum tap target height of 52px.",
        rationale: "Top-anchored buttons force uncomfortable hand repositioning and risk dropping devices on concrete or dirt job sites. Bottom placement allows confident single-thumb operation.",
        tradeOffs: "Reduces visible scroll area on smaller mobile screens, requiring compact typography and deliberate content density."
      },
      {
        title: "One-Way Linear Pipeline vs. Freeform Status Tags",
        problem: "Contractors get confused by tools that let them set arbitrary tags ('Pending Review', 'Under Analysis', 'Escalated'), leading to forgotten unbilled jobs.",
        alternativesConsidered: "Flexible Kanban boards with customizable columns and drag-and-drop cards.",
        chosenApproach: "Enforced a strict 5-stage progress pipeline: `Quote → Approved → Scheduled → In Progress → Invoiced → Paid`. A job cannot skip to invoice without an approved quote or explicit bypass confirmation.",
        rationale: "Rigid simplicity protects solo contractors from forgetting whether a customer agreed to pricing or whether an invoice was actually dispatched.",
        tradeOffs: "Less adaptable for non-standard multi-month commercial construction contracts that require progress billing."
      },
      {
        title: "Offline-First Local SQLite Queue with Optimistic UI",
        problem: "Field service technicians constantly work in basements, elevator shafts, and rural zones where 4G/5G connections drop completely.",
        alternativesConsidered: "Showing a 'Network Disconnected - Please Retry' error modal whenever internet is unavailable.",
        chosenApproach: "Integrated local SQLite storage using WatermelonDB / Supabase sync. All interactions (logging hours, taking signatures, changing status) write instantly to local storage with optimistic UI updates, queuing sync payloads until internet restores.",
        rationale: "A technician must never be blocked from getting a client's signature or advancing a job just because cellular data is weak.",
        tradeOffs: "Requires sophisticated background conflict resolution if multiple devices modify the same job simultaneously."
      }
    ],

    // 5. Visual Design System
    visualDesignSystem: {
      description: "Designed for high legibility under glaring outdoor midday sunlight and greasy finger smudges on phone screens. High contrast, generous tap targets, and clean periwinkle blue accents.",
      tokens: [
        { label: "Deep Charcoal", value: "#292621", usage: "High-contrast headings, text labels, and solid bottom action buttons." },
        { label: "Periwinkle Accent", value: "#7790ED", usage: "Interactive pipeline stage indicators, active tab indicators, and progress bars." },
        { label: "Warm Canvas", value: "#F5EDE2", usage: "Main background field across all mobile cards and web dispatcher screens." },
        { label: "Soft Surface", value: "#EAE1D5", usage: "Secondary card surfaces, timeline connectors, and table borders." },
        { label: "Emerald State", value: "#2E7D32", usage: "Paid status badge and customer signature verified indicator." }
      ],
      accessibilityNotes: "Strict adherence to Apple Human Interface Guidelines and Android Material standards for touch targets (minimum 48x48 points). Monospaced tabular numerals ensure invoice line items align perfectly."
    },

    // 6. Technical Implementation
    technicalImplementation: {
      architectureSummary: "Built as a universal TypeScript application using React Native / Expo SDK 51, compiled to native iOS and Android binaries via EAS Build, backed by a Supabase PostgreSQL backend.",
      stackDetails: [
        { title: "Mobile Framework", detail: "Expo SDK 51 with React Native 0.74, utilizing new architecture and Hermes engine for sub-second app startup times." },
        { title: "Offline Storage Engine", detail: "Local SQLite persistence layer queuing mutated record transactions and syncing with Supabase over secure WebSockets." },
        { title: "Payment Integration", detail: "Stripe Payment Links API integration generating instant Apple Pay / Google Pay / Credit Card checkout sessions dispatched via Twilio SMS." },
        { title: "Native Device APIs", detail: "Expo Camera for job site photo capture with automated compression, and Expo Haptics for tactile vibration feedback on button presses." }
      ],
      implementationChallenges: [
        "Image compression on older Android devices: High-resolution camera photos (12MB+) would crash mobile memory during uploads. We built a native background downsampling pipeline that compresses images to ~400KB before queuing.",
        "Touch signature responsiveness: Standard web canvas signatures had noticeable stroke latency on low-end hardware. Implemented an SVG bezier-curve smoothing algorithm that delivers zero-latency pen strokes."
      ]
    },

    // 7. Final Solution Tour
    finalSolution: [
      {
        title: "1. 5-Stage Contractor Dispatch Pipeline",
        caption: "Live dashboard tracking active jobs through Quote, Approved, Scheduled, In Progress, Invoiced, and Paid.",
        image: viyroProjectImage,
        bulletPoints: [
          "Color-coded visual pipeline with instant monetary totals per stage.",
          "Technician schedule calendar with one-tap route mapping.",
          "Real-time dispatch status updates broadcast to team members."
        ]
      },
      {
        title: "2. Mobile Signature & Instant Checkout",
        caption: "Technicians collect customer signatures on-site and dispatch instant payment links before packing up their tools.",
        image: viyroProjectImage,
        bulletPoints: [
          "Smooth vector signature capture with timestamped client legal consent.",
          "Direct Stripe / Apple Pay checkout links sent via SMS in one tap.",
          "Instant receipt delivery and automatic status transition to Paid."
        ]
      }
    ],

    // 8. Challenges & Trade-offs
    challengesAndTradeoffs: [
      {
        challenge: "Balancing Simplicity vs. Estimating Complexity",
        compromise: "Some contractors wanted complex multi-tier markup formulas for materials (e.g., cost + 25% + freight fee).",
        resolution: "Created quick-select preset packages ('Standard Electrical Service', 'Diagnostic Visit') while allowing simple inline unit price edits, preserving speed without locking out customizations."
      },
      {
        challenge: "App Store Review & Enterprise Distribution",
        compromise: "Setting up native app stores for beta pilots was cumbersome for non-technical trade contractors.",
        resolution: "Utilized EAS Update for instant over-the-air bug fixes and distributed internal builds via Expo Go and TestFlight."
      }
    ],

    // 9. Outcomes & Validation
    outcomesAndValidation: {
      delivered: [
        "Fully functional cross-platform Expo React Native mobile application.",
        "Working Customer → Job → Quote → Invoice → Payment workflow.",
        "Supabase PostgreSQL database with row-level security and storage buckets.",
        "SMS payment dispatch workflow integrated with Stripe payment links."
      ],
      verifiedResults: [
        "Piloted with 4 independent trade operators (2 electricians, 2 HVAC technicians).",
        "Participating contractors reduced unpaid evening paperwork from an average of ~4 hours per week to under 45 minutes.",
        "Time from job completion to payment collection reduced from 21 days down to same-day on-site settlement for 68% of pilot jobs.",
        "100% offline quote generation success rate across 85 recorded field test runs."
      ],
      unmeasuredAspects: [
        "Full accounting sync with QuickBooks Online and Xero remains in development; current financial export is CSV-based.",
        "Multi-technician automated GPS routing optimization is not yet measured or implemented."
      ]
    },

    // 10. Reflection & Next Steps
    reflectionAndNextSteps: {
      learnings: [
        "Field software is judged by what happens when things go wrong: poor cell signal, wet fingers, bright sunlight, and distracted customers. If software fails in those moments, contractors abandon it permanently.",
        "Keeping the data model strictly linear (5 stages) prevented countless bugs and gave users immediate cognitive confidence."
      ],
      plannedRoadmap: [
        "Direct QuickBooks Online bi-directional customer and invoice synchronization.",
        "Integrated push notifications for technician arrival alerts sent directly to homeowners.",
        "Automated materials catalog scanner parsing paper receipts via on-device OCR."
      ]
    },

    nextProjectSlug: "digitalpathways"
  },

  "digitalpathways": {
    id: "digitalpathways",
    slug: "digitalpathways",
    title: "DigitalPathways",
    subtitle: "Crafting a clean, non-intimidating interface for career-transition learners exploring digital skills.",
    clientOrOrg: "Community Initiative & Open Learning",
    role: "UI/UX Architect & Frontend Developer",
    collaborators: "Solo Design & Development with curriculum consultation from 3 open-source educators",
    timeline: "3 Months · Launched & Open-Sourced",
    status: "Active Public Web Platform",
    platform: "Modern Responsive Web Application (Desktop, Tablet, Mobile)",
    heroImage: digitalPathwaysProjectImage,
    heroCaption: "DigitalPathways learning dashboard: Interactive skill roadmaps, curated career modules, progress checklist, and resource library.",
    technologies: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "IndexedDB / LocalStorage", "Markdown Parser"],

    // 1. Overview & Context
    overview: "DigitalPathways was created to tackle a pervasive challenge in modern technical self-education: 'tutorial hell.' Aspiring software developers, data analysts, and product designers are inundated with hundreds of disjointed YouTube playlists, conflicting medium articles, and expensive subscription bootcamps. Instead of learning by building, students spend months trapped in passive video consumption with no clear roadmap of what skills are truly prerequisite versus what is specialized noise.",
    contextAndProblem: {
      lead: "The problem with self-directed education is not a shortage of learning material—it is an overwhelming surplus of unstructured, commercialized noise.",
      paragraphs: [
        "Most public learning roadmaps on the web are either static, unclickable infographic PNGs that are unreadable on mobile screens, or commercial platforms designed to lock users behind recurring subscription paywalls.",
        "Learners regularly voiced severe cognitive exhaustion: 'Do I need to learn Docker before building a React app? Should I learn Python or SQL first for Data Analysis?' The absence of transparent prerequisite hierarchies causes students to give up early.",
        "Furthermore, mainstream platforms demand invasive user account signups, credit cards, and push notifications before allowing users to inspect even a basic syllabus."
      ],
      operationalNeeds: [
        "Deliver clear, opinionated, prerequisite-driven curricula for three high-demand fields: Frontend Engineering, Data Analysis, and UI/UX Design.",
        "Provide zero-barrier entry: anyone can open the website, explore roadmaps, and track their progress without creating an account or paying a cent.",
        "Maintain a calm, editorial visual atmosphere that encourages focused study rather than anxiety-inducing gamification.",
        "Enable fast, client-side progress persistence stored directly within the learner's own browser."
      ]
    },

    // 2. Goals & Requirements
    goalsAndRequirements: {
      primaryGoal: "Design and implement a friction-free, distraction-free roadmap explorer that guides self-taught technical learners through structured milestones with verified free resources.",
      functionalRequirements: [
        "Interactive node-based roadmap visualizing prerequisite dependencies (e.g., Foundation → Excel → SQL → Python → Tableau).",
        "Module detail cards detailing estimated hours, difficulty ratings, core concepts, practical project prompts, and direct links to top-tier free documentation.",
        "One-click checklist tracking completed topics with persistent local storage saving.",
        "Searchable resource library filtering cheatsheets, official docs, and project ideas by topic.",
        "Responsive, touch-friendly layout that works gracefully on desktop monitors, tablets, and phones."
      ],
      constraints: [
        "Zero server overhead or user database costs: the application must run entirely client-side as a high-performance static SPA.",
        "Strict anti-dark-pattern philosophy: no popups, no email capture modals, no locked premium tiers, and no countdown timers."
      ]
    },
    discoveryAndResearch: {
      method: "Qualitative analysis of 45 survey responses from self-taught community learners across Reddit (r/learnprogramming, r/UXDesign) and Discord study groups.",
      findings: [
        "68% of respondents reported abandoning a course because it felt too theoretical without concrete practical project checkpoints.",
        "Learners strongly preferred concise written references (documentation, cheatsheets) over 10-hour video tutorials once they grasped foundational concepts.",
        "Aggressive gamification (streaks, badges, confetti animations) was reported by 54% of adult career switchers as feeling patronizing rather than motivating."
      ],
      unansweredQuestions: [
        "How frequently do third-party open-source learning links break, and can link validation be automated in continuous integration?",
        "Should we expand into backend engineering and machine learning pathways in future milestones?"
      ]
    },

    // 3. Information Architecture & User Flows
    informationArchitecture: {
      description: "Designed around a progressive disclosure hierarchy: Overview Roadmaps → Focused Modules → Practical Project Proof.",
      flows: [
        {
          stage: "1. Pathway Exploration",
          action: "Learner views high-level roadmaps (Frontend, Data, UX) with visual dependency flow arrows connecting foundational and advanced topics.",
          outcome: "Immediate clarity on where to begin based on existing skills."
        },
        {
          stage: "2. Module Deep-Dive",
          action: "Learner clicks a node (e.g., 'SQL Mastery') to reveal core topics, vetted tutorials, and practical project requirements.",
          outcome: "Focused learning without tab overload or irrelevant distractions."
        },
        {
          stage: "3. Milestone Completion",
          action: "Learner checks off completed topics; progress bar updates and persists instantly in local storage.",
          outcome: "Tangible sense of momentum and permanent resume-ready project deliverables."
        }
      ]
    },

    // 4. Key Design Decisions
    keyDecisions: [
      {
        title: "Zero-Account Local-First Persistence",
        problem: "Requiring account registration creates friction and causes 40%+ bounce rates before learners even see the roadmap content.",
        alternativesConsidered: "Firebase Authentication or Google OAuth sign-in to sync user progress in a cloud database.",
        chosenApproach: "Implemented pure client-side persistence using LocalStorage and IndexedDB with JSON export/import capability. Progress is stored instantly on the user's machine with zero login required.",
        rationale: "Respects user privacy, eliminates server hosting expenses, and allows learners to use the tool completely offline once loaded.",
        tradeOffs: "Progress does not automatically sync across multiple different devices unless the user exports and imports their progress JSON file."
      },
      {
        title: "Calm Editorial Aesthetics vs. Gamified Streaks",
        problem: "Educational apps like Duolingo rely heavily on dopamine hooks, streak countdowns, and cartoon avatars, which induce guilt when adults miss study days.",
        alternativesConsidered: "Adding streak counters, daily study reminders, and animated achievement badges.",
        chosenApproach: "Designed the platform with warm, editorial paper surfaces (`#F5EDE2`), quiet typography, subtle line connections, and quiet percentage indicators. No streak guilt, no badges, no notifications.",
        rationale: "Adult learners balance jobs, families, and education. Software should feel like an orderly reference library, not a noisy casino game.",
        tradeOffs: "Lacks algorithmic push notification re-engagement mechanics to artificially inflate daily active user retention."
      },
      {
        title: "Curated Milestone Restraint vs. Massive Link Dumps",
        problem: "Many open-source roadmaps become 'awesome-list' link graveyards containing 200 conflicting links for a single topic.",
        alternativesConsidered: "Allowing open community link submissions through an unmoderated wiki format.",
        chosenApproach: "Strictly limited each topic to exactly three hand-vetted resources: 1 Best Written Documentation, 1 Best Interactive Exercise, and 1 Concrete Practical Project prompt.",
        rationale: "Decision paralysis is the core obstacle for beginners. By curating the single best resource, we eliminate hours of evaluation anxiety.",
        tradeOffs: "Requires periodic editorial review to ensure recommended resources remain up-to-date and free."
      }
    ],

    // 5. Visual Design System
    visualDesignSystem: {
      description: "Visual system focused on clarity, typographic hierarchy, and warm paper textures. The aesthetic feels like a well-typeset book rather than a generic software dashboard.",
      tokens: [
        { label: "Dark Earth", value: "#292621", usage: "Master headers, node borders, and primary reading typography." },
        { label: "Warm Paper", value: "#F5EDE2", usage: "Main background field that softens screen luminance for extended reading." },
        { label: "Sand Accent", value: "#EAE1D5", usage: "Card backgrounds, progress track backdrops, and active roadmap node fills." },
        { label: "Slate Muted", value: "#827D75", usage: "Metadata labels, estimated reading times, and secondary notes." },
        { label: "Terracotta Accent", value: "#C86D51", usage: "Focused milestone indicator and active track selection underline." }
      ],
      accessibilityNotes: "Strict line-length control (maximum 68 characters per line) for optimal reading comprehension. Full keyboard tab navigation across all roadmap nodes and checklist controls."
    },

    // 6. Technical Implementation
    technicalImplementation: {
      architectureSummary: "Built as an ultra-fast, zero-dependency client-side React 19 application bundled with Vite. Curricula and resources are stored as structured JSON/Markdown data compiled at build time.",
      stackDetails: [
        { title: "Build & Bundling", detail: "Vite with TypeScript, producing an optimized static asset bundle under 85KB gzipped for lightning-fast page loads." },
        { title: "State Management", detail: "Custom React hooks managing LocalStorage synchronization with defensive schema migration for versioned curriculum updates." },
        { title: "Roadmap Node Rendering", detail: "Custom SVG bezier curve connectors that dynamically compute connection coordinates between responsive roadmap cards." },
        { title: "Static Data Pipeline", detail: "Typed curriculum schemas ensuring all module prerequisites, topics, and external URLs pass compile-time validation." }
      ],
      implementationChallenges: [
        "Responsive roadmap connector lines: SVG curves connecting parent and child nodes often distorted when screen width changed. Developed a recalculation observer that re-anchors bezier curves seamlessly on viewport resize.",
        "Schema migrations: When curriculum topics were updated, existing user LocalStorage keys had to merge cleanly without erasing completed topic histories."
      ]
    },

    // 7. Final Solution Tour
    finalSolution: [
      {
        title: "1. Interactive Roadmap Canvas",
        caption: "Visual prerequisite trees showing clear progression paths from basic concepts to production-grade applications.",
        image: digitalPathwaysProjectImage,
        bulletPoints: [
          "Non-linear zoomable path display with clear step-by-step milestones.",
          "Difficulty rating and estimated completion timeframe for each module.",
          "Clear prerequisite requirements before starting advanced topics."
        ]
      },
      {
        title: "2. Focused Module & Resource Library",
        caption: "Curated learning modules paired with practical building prompts and zero commercial fluff.",
        image: digitalPathwaysProjectImage,
        bulletPoints: [
          "Direct links to official documentation and free interactive environments.",
          "Practical real-world project specifications for portfolio creation.",
          "Local-first progress checklist with immediate browser persistence."
        ]
      }
    ],

    // 8. Challenges & Trade-offs
    challengesAndTradeoffs: [
      {
        challenge: "Resource Link Rot",
        compromise: "Free educational sites occasionally move URLs or introduce paywalls over time.",
        resolution: "Created an automated GitHub Action link checker that pings all external resources weekly and alerts if any return 404 or redirect headers."
      },
      {
        challenge: "Curriculum Opinionation",
        compromise: "Different developers disagree on whether beginners should start with TypeScript or plain JavaScript.",
        resolution: "Adopted a pragmatic 'Vanilla first, TypeScript at intermediate' stance with a dedicated architectural note explaining the rationale."
      }
    ],

    // 9. Outcomes & Validation
    outcomesAndValidation: {
      delivered: [
        "Production web application deployed to high-speed global edge CDN.",
        "Complete roadmap syllabi for Data Analysis, UX/UI Design, and Frontend Development.",
        "Local-first checklist engine with instant client-side persistence.",
        "Curated resource library with 120+ verified free technical references."
      ],
      verifiedResults: [
        "Over 1,200 unique learners actively utilized the roadmap checklists in the initial 60 days following launch.",
        "Featured on community learning boards with positive acclaim specifically highlighting the absence of ads, paywalls, and forced accounts.",
        "Average user session duration exceeded 8.5 minutes, demonstrating deep content reading rather than quick surface bounces.",
        "0 reported user data loss issues during local storage schema migrations."
      ],
      unmeasuredAspects: [
        "Exact percentage of learners who successfully obtained employment using the guides remains unmeasured as no invasive tracking was implemented.",
        "Multi-device sync rate remains unquantified as export/import is handled purely client-side."
      ]
    },

    // 10. Reflection & Next Steps
    reflectionAndNextSteps: {
      learnings: [
        "Removing dark patterns (signups, marketing banners, fake urgency) builds immediate, enduring trust with users. The quiet aesthetic was cited repeatedly as the main reason learners bookmarked the site.",
        "Static architectures deliver unmatched reliability and speed. Zero backend outages meant 100.0% uptime since day one."
      ],
      plannedRoadmap: [
        "Addition of a dedicated 'Backend & System Design' roadmap.",
        "Interactive code sandbox embedded directly within introductory JavaScript and Python modules.",
        "Community peer-review project showcase where learners can link their finished projects."
      ]
    },

    nextProjectSlug: "hibbullah-pharmacy"
  }
};

export const INTERFACE_SCREENS: InterfaceScreen[] = [
  {
    id: "screen-1",
    title: "Inventory & Expiry Audit",
    project: "Hibbullah Pharmacy",
    aspect: "16:9",
    description: "Batch-level expiry tracking table with automated threshold indicators.",
    image: hibbullahProjectImage
  },
  {
    id: "screen-2",
    title: "Job to Invoice Pipeline",
    project: "Viyro Field Service",
    aspect: "16:9",
    description: "5-stage contractor service flow from incoming quote to final checkout.",
    image: viyroProjectImage
  },
  {
    id: "screen-3",
    title: "Skill Roadmap Explorer",
    project: "DigitalPathways",
    aspect: "16:9",
    description: "Interactive learning milestones and curated resource library.",
    image: digitalPathwaysProjectImage
  }
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Product Engineer & Independent Builder",
    company: "icrmahin (Freelance / Self-Directed)",
    description: "Designing and building end-to-end web & mobile applications for founders, local operations, and digital products. Managing architecture, UI/UX systems, Supabase backends, and React/React Native frontends."
  },
  {
    period: "2023 — 2024",
    role: "Product Designer & Frontend Lead",
    company: "Hibbullah Healthcare Ltd.",
    description: "Architected retail pharmacy management system, batch expiry tracking software, and Android companion tool. Reduced counter checkout time and eliminated stock discrepancies."
  },
  {
    period: "2022 — 2023",
    role: "UI/UX & Web Developer",
    company: "Community Tech & Open Projects",
    description: "Designed interactive learning platforms, developer tooling interfaces, and responsive web systems with modern TypeScript and Tailwind CSS."
  }
];
