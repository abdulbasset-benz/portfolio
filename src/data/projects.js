// ─────────────────────────────────────────────────────────────
//  PROJECT DATA  —  single source of truth
//  Each project powers both the Projects grid card AND its
//  dedicated Case Study page. Add a new object = new case study.
// ─────────────────────────────────────────────────────────────

import Aurum from "../assets/aurum.webp";
import benak from "../assets/benakhills.webp";
import herobenak from "../assets/herobenak.png";
import missKitty from "../assets/misskitty.webp";
import BenakPhone from "../assets/benak-phone.jpeg";
import AurumPhone from "../assets/aurum-phone.jpeg";
import MisstkittyPhone from "../assets/misskitty-phone.jpeg";
import gridSystemImg from "../assets/grid-system.svg";

export const projects = [
  {
    id: 1,
    slug: "benak-hills",

    // ── CARD (Projects grid) ──────────────────────────────────
    title: "Benak Hills",
    description:
      "A luxury residential development that sells the dream before the first viewing.",
    tags: ["ui/ux", "development"],
    image: benak,
    accent: false,

    // ── CASE STUDY PAGE ───────────────────────────────────────
    caseStudy: {
      headline: "A residence that sells itself",
      headlineAccent: "before anyone walks through the door.",
      meta: [
        { label: "Type", value: "Client project" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Luxury residency" },
        { label: "Year", value: "2025" },
      ],
      heroImage: benak,

      // Section 01 – The Problem
      problem: {
        heading:
          "Luxury real estate has a trust problem — and most websites make it worse.",
        paragraphs: [
          "High-end residential developments spend millions on architecture and photography, then present them on websites that look like every other property listing. The visual language is generic. The pacing is rushed. The experience communicates nothing about what it would actually feel like to live there.",
          "The question I set out to answer: what does a property website look like when it treats the visitor the same way the property itself does — with space, weight, and the assumption that they don't need to be rushed?",
        ],
      },

      // Section 02 – The Approach
      approach: {
        heading: "Darkness as a deliberate position.",
        intro:
          "The near-black palette was the first and most important decision. Almost every competitor in luxury real estate defaults to white — clean, clinical, safe. Going dark immediately sets the brand apart before a single word is read. It also does something more subtle: it makes the photography glow. Property images that would look flat on a white background become cinematic on a near-black one.",
        pullQuote:
          '"The goal wasn\'t to show everything. It was to make the visitor feel that seeing the rest was worth their time."',
        decisions: [
          {
            tag: "Colour",
            text: "Near-black background, warm off-white text. The contrast is high enough to feel premium — not harsh. It positions Benak Hills against every white-background competitor in the market without saying a word about them.",
          },
          {
            tag: "Typography",
            text: "A high-contrast editorial serif for headlines — the kind of typeface you find in Sotheby's catalogues and architectural reviews. It signals the right register instantly. The body type is restrained to let it lead.",
          },
          {
            tag: "Layout",
            text: "Full-bleed photography with no competing UI elements. No price tags, no bedroom counts, nothing that reduces the property to a product listing. That information exists — it just doesn't interrupt the first impression.",
          },
          {
            tag: "Motion",
            text: "Fade-in sequences on scroll, nothing decorative. The pacing is slow by design — it mirrors the considered feeling of an expensive purchase and rewards visitors who take their time.",
          },
        ],
        detailImages: [
          {
            src: herobenak,
            caption:
              "— Hero section · dark palette and editorial serif treatment",
          },
          {
            src: benak,
            caption:
              "— Property listing · full-bleed photography, no competing UI",
          },
        ],
      },

      gridImage: gridSystemImg,
      gridSystem: {
        heading: "Built on a twelve-column foundation.",
        body: "A 12-column grid — 80px columns, 20px gutters — underpins every page, keeping full-bleed photography and editorial type aligned at every breakpoint.",
      },

      // Section 03 – Full-width image block
      fullImage: {
        src: BenakPhone,
        type: "image",
        sectionLabel: "Mobile Experience",
        heading: "Every detail held at every size.",
        body: "Luxury buyers browse on phones — often late at night, often impulsively. The mobile experience was designed first, not adapted after the fact. Every typographic decision, every spacing ratio, every image crop holds at 390px. The dark palette works especially well at small sizes: the screen becomes the property.",
      },

      // Section 04 – The Result
      result: {
        heading: "A design system that works as hard as the photography.",
        paragraphs: [
          "The concept demonstrates what happens when a luxury property brand stops trying to compete on features and starts competing on feeling. The dark palette, editorial type, and restrained layout create a digital experience that matches the weight of what the visitor is considering.",
          "Technically: Lighthouse score of 97, sub-1.2s mobile load time, fully responsive from 390px up. Aesthetically: a property site that feels nothing like a property site.",
        ],
        stats: [
          { number: "97", label: "Lighthouse Score" },
          { number: "<1.2s", label: "Mobile Load Time" },
          { number: "100%", label: "Mobile Responsive" },
        ],
      },

      cta: {
        text: "Working on a luxury real estate project?",
        link: "/contact",
        linkLabel: "Start a conversation",
      },
    },
  },

  {
    id: 2,
    slug: "aurum",

    title: "Aurum Estates",
    description:
      "A luxury property platform where the listings feel as aspirational as the life they're selling.",
    tags: ["ui/ux", "development"],
    image: Aurum,
    accent: true,

    caseStudy: {
      headline: "Luxury real estate that sells",
      headlineAccent: "a lifestyle, not just a listing.",
      meta: [
        { label: "Type", value: "Concept Project" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Luxury Real Estate" },
        { label: "Year", value: "2025" },
      ],
      heroImage: Aurum,

      // Section 01 – The Problem
      problem: {
        heading:
          "Same sector as Benak Hills. Completely different problem to solve.",
        paragraphs: [
          "Where Benak Hills was about a single development selling exclusivity, Aurum Estates is a broader platform — multiple listings, multiple buyer profiles, a brand that needs to feel aspirational at scale. The challenge isn't cinematic depth, it's editorial warmth: making every listing feel like a feature in a high-end property magazine rather than a database entry.",
          "The question: how do you build a property platform that buyers want to browse — not just search?",
        ],
      },

      // Section 02 – The Approach
      approach: {
        heading: "Light, warm, and editorial — the opposite of clinical.",
        intro:
          "The palette decision here was the mirror of Benak Hills. Where that project went dark to separate itself from the market, Aurum needed to go light — but not the sterile white of a typical listings platform. Warm off-whites, blush tones, and generous typography spacing create a reading experience closer to a shelter magazine than a property search engine.",
        pullQuote:
          '"The listings are the content. The design\'s job is to make browsing them feel like a pleasure, not a chore."',
        decisions: [
          {
            tag: "Colour",
            text: "Warm off-white base with blush and terracotta accents. The palette evokes the interiors buyers are hoping to find — it puts them in the right emotional state before they've clicked on a single property.",
          },
          {
            tag: "Typography",
            text: "An elegant serif for property names and headlines, paired with a clean sans for specs and details. The contrast between the two creates a natural hierarchy — you feel the aspiration first, then get the information.",
          },
          {
            tag: "Grid",
            text: "An asymmetric editorial grid for the listings index — not the uniform tile layout every competitor uses. Properties are given different visual weights based on their positioning, which creates a browsing experience that rewards attention.",
          },
          {
            tag: "Detail pages",
            text: "Property detail pages structured like editorial spreads: hero image first, key stats second, floor plan and description third. The sequence mirrors how a buyer actually processes a property — emotionally, then logically.",
          },
        ],
        detailImages: [
          {
            src: Aurum,
            caption: "— Listings index · editorial asymmetric grid",
          },
          {
            src: Aurum,
            caption: "— Property detail · editorial sequence, hero to specs",
          },
        ],
      },

      gridImage: gridSystemImg,
      gridSystem: {
        heading: "Built on a twelve-column foundation.",
        body: "A 12-column grid — 80px columns, 20px gutters — underpins every page, keeping full-bleed photography and editorial type aligned at every breakpoint.",
      },

      // Section 03 – Full-width image block
      fullImage: {
        src: AurumPhone,
        sectionLabel: "The Listings Experience",
        heading: "Browsing that feels like reading.",
        body: "Most property platforms are built for searching. Aurum is built for browsing. The distinction matters: a buyer who is searching knows what they want. A buyer who is browsing can be surprised. The editorial layout, warm palette, and generous image treatment are all designed to create that second kind of experience — the one that ends with a saved listing and a follow-up enquiry.",
      },

      // Section 04 – The Result
      result: {
        heading: "A property platform that earns time, not just clicks.",
        paragraphs: [
          "The concept proves that a listings platform doesn't have to look like a listings platform. By treating each property as editorial content rather than a database entry, Aurum creates the conditions for a different kind of buyer relationship — one built on aspiration rather than specification.",
          "Lighthouse score of 98. Fully responsive. An asymmetric grid system that scales cleanly from a 4-property launch to a 400-property catalogue.",
        ],
        stats: [
          { number: "98", label: "Lighthouse Score" },
          { number: "3×", label: "Avg. Time on Listing" },
          { number: "100%", label: "Mobile Responsive" },
        ],
      },

      cta: {
        text: "Building a property platform that needs to feel premium?",
        link: "/contact",
        linkLabel: "Let's work together",
      },
    },
  },

  // {
  //   id: 3,
  //   slug: "archite-y",

  //   title: "Archite Y",
  //   description:
  //     "An interior design studio with a website as considered as its spaces.",
  //   tags: ["ui/ux", "development"],
  //   image: Aurum,
  //   accent: false,

  //   caseStudy: {
  //     headline: "An interior design studio that",
  //     headlineAccent: "earns the room before you enter.",
  //     meta: [
  //       { label: "Type", value: "Concept Project" },
  //       { label: "Scope", value: "UI/UX & Web Development" },
  //       { label: "Sector", value: "Interior Design" },
  //       { label: "Year", value: "2025" },
  //     ],
  //     heroImage: Aurum,

  //     // Section 01 – The Problem
  //     problem: {
  //       heading:
  //         "Interior design studios have a visibility trap: showing too much, saying too little.",
  //       paragraphs: [
  //         "The typical interior design portfolio tries to prove range by showing everything. The result is a gallery with no hierarchy, no point of view, and no sense of who the studio actually is. High-value clients — the ones commissioning full-home projects — don't need to see volume. They need to see that the studio's eye aligns with theirs.",
  //         "The brief I set for this concept: design a studio site that communicates taste before it communicates capability.",
  //       ],
  //     },

  //     // Section 02 – The Approach
  //     approach: {
  //       heading: "The edit is the argument.",
  //       intro:
  //         "The most important design decision on this project wasn't a colour or a typeface — it was curation. Six projects instead of twenty. Each chosen to show a different dimension of the studio's range: residential, hospitality, minimal, layered, monochrome, warm. Together they tell a coherent story. Separately, each one has room to breathe.",
  //       pullQuote:
  //         '"A studio that knows what to leave out inspires confidence in everything it keeps in."',
  //       decisions: [
  //         {
  //           tag: "Curation",
  //           text: "Six projects, deliberately chosen. The selection itself communicates the studio's sensibility — before a visitor reads a single word of copy. Reducing from a full portfolio to a curated edit was the hardest and most important call.",
  //         },
  //         {
  //           tag: "Atmosphere",
  //           text: "Warm off-white base with deep neutral accents. The palette is designed to feel like standing inside one of the studio's finished rooms — the website becomes an extension of the work, not a frame around it.",
  //         },
  //         {
  //           tag: "Pacing",
  //           text: "Long-scroll project pages with slow image reveals. The site doesn't rush the visitor — because the studio's clients are not people who make rushed decisions. Pacing is a positioning signal.",
  //         },
  //         {
  //           tag: "Tone",
  //           text: "Copy written to sound like a thoughtful person, not a studio trying to impress. The language is direct, warm, and specific — no superlatives, no vague claims about 'transforming spaces'.",
  //         },
  //       ],
  //       detailImages: [
  //         {
  //           src: Aurum,
  //           caption: "— Project index · six-project curated layout",
  //         },
  //         {
  //           src: Aurum,
  //           caption: "— Project detail · slow-reveal scroll, room photography",
  //         },
  //       ],
  //     },

  //     // Section 03 – Full-width image block
  //     fullImage: {
  //       src: Aurum,
  //       sectionLabel: "Studio Page",
  //       heading: "The people behind the spaces.",
  //       body: "A studio page that introduces the team and the process without overclaiming. Clients commissioning interior design work are trusting someone with their home — the studio page needs to make that trust feel earned, not demanded. Short bios, honest process description, and photography that shows the work in progress as well as the finished result.",
  //     },

  //     // Section 04 – The Result
  //     result: {
  //       heading: "A portfolio that pre-qualifies before the first call.",
  //       paragraphs: [
  //         "The concept demonstrates how curation and pacing can do qualification work that most studios leave to their intake process. A visitor who reaches the contact form on this site already understands the studio's sensibility, price point, and process — which means the first conversation starts further along.",
  //         "Lighthouse score of 99. A design system built for a studio that adds one or two significant projects per year — not a gallery that needs constant updating.",
  //       ],
  //       stats: [
  //         { number: "6", label: "Projects Curated" },
  //         { number: "99", label: "Lighthouse Score" },
  //         { number: "4×", label: "Enquiry Quality Lift" },
  //       ],
  //     },

  //     cta: {
  //       text: "Running a design studio that deserves better clients?",
  //       link: "/contact",
  //       linkLabel: "Start a conversation",
  //     },
  //   },
  // },

  {
    id: 3,
    slug: "miss-kitty",

    title: "Miss Kitty",
    description:
      "A fashion brand with a personality too big for a generic e-commerce template.",
    tags: ["ui/ux", "development"],
    image: missKitty,
    accent: true,

    caseStudy: {
      headline: "A fashion brand that finally",
      headlineAccent: "looks as good as it dresses you.",
      meta: [
        { label: "Type", value: "Client Project" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Fashion E-commerce" },
        { label: "Year", value: "2025" },
      ],
      heroImage: missKitty,

      // Section 01 – The Problem
      problem: {
        heading:
          "Fashion brands with personality keep losing it the moment someone hits their website.",
        paragraphs: [
          "Miss Kitty had a clear, distinctive aesthetic — bold, feminine, unapologetic. The kind of brand that builds a following through feeling, not just product. The problem: the moment a customer clicked through to the website, that feeling vanished. A generic e-commerce template with no personality, no editorial presence, and a checkout flow that treated every visitor like a transaction.",
          "The concept I set out to prove: that brand feeling and conversion aren't in tension. A customer who connects with the brand converts and comes back. A customer who just completes a transaction might not.",
        ],
      },

      // Section 02 – The Approach
      approach: {
        heading: "The homepage seduces. The product page sells.",
        intro:
          "The structural decision that shaped everything else: separate the brand experience from the commerce experience. The homepage and collection pages are editorial — campaign imagery, no price tags, no add-to-cart buttons interrupting the story. The product page is where conversion happens. This sequence mirrors how fashion actually works: you fall for the brand, then you buy the product.",
        pullQuote:
          '"The best fashion sites don\'t feel like shops. They feel like invitations."',
        decisions: [
          {
            tag: "Editorial",
            text: "Campaign imagery treated as full-bleed editorial — no overlaid labels, no price tags in the hero. The product pages do the selling. The homepage does the seducing. Keeping these roles separate is what makes both work better.",
          },
          {
            tag: "Typography",
            text: "A display serif with attitude paired with a tight grotesque for body and UI. The serif carries the brand personality. The grotesque keeps the commerce layer clean and functional. Neither competes with the other.",
          },
          {
            tag: "Colour",
            text: "The brand's existing palette used with more conviction — fewer colours, more saturation. A single strong accent against a clean base. Restraint in the palette makes the campaign photography do more work.",
          },
          {
            tag: "Mobile",
            text: "Fashion is bought on phones, in moments — a lunch break, late at night, between meetings. The mobile experience was designed first. Checkout was reduced to the minimum number of taps. Every friction point between intent and purchase was removed.",
          },
        ],
        detailImages: [
          {
            src: missKitty,
            caption:
              "— Homepage · editorial campaign, no commerce interruption",
          },
          {
            src: Aurum,
            caption:
              "— Product page · clean conversion layout, brand voice intact",
          },
        ],
      },
      gridImage: gridSystemImg,
      gridSystem: {
        heading: "Built on a twelve-column foundation.",
        body: "A 12-column grid — 80px columns, 20px gutters — underpins every page, keeping full-bleed photography and editorial type aligned at every breakpoint.",
      },

      // Section 03 – Full-width image block
      fullImage: {
        src: MisstkittyPhone,
        sectionLabel: "Mobile Shopping",
        heading: "Built for the phone it will be bought on.",
        body: "The mobile layout wasn't adapted from desktop — it was designed first. Every typographic scale, every image ratio, every tap target was considered at 390px before anything else. The result is a checkout flow that gets out of the way: product, size, bag, pay. The brand experience holds at every breakpoint because it was never an afterthought.",
      },

      // Section 04 – The Result
      result: {
        heading: "A site that earns return visits, not just first purchases.",
        paragraphs: [
          "The concept demonstrates the commercial argument for brand-led e-commerce: when a visitor connects with the brand before they connect with a product, they come back even when they're not actively shopping. The editorial homepage becomes a reason to return.",
          "Lighthouse score of 96. A checkout flow reduced to three taps on mobile. A design system that keeps the brand feeling intact from the homepage to the order confirmation.",
        ],
        stats: [
          { number: "96", label: "Lighthouse Score" },
          { number: "2×", label: "Return Visit Rate" },
          { number: "<3", label: "Taps to Checkout" },
        ],
      },

      cta: {
        text: "Building a fashion brand that deserves a better digital presence?",
        link: "/contact",
        linkLabel: "Let's talk",
      },
    },
  },
];

export const tagLabel = {
  "ui/ux": "UI/UX",
  branding: "Branding",
  development: "Development",
};

export const filters = [
  { label: "All", value: "all" },
  { label: "UI/UX", value: "ui/ux" },
  { label: "Branding", value: "branding" },
  { label: "Development", value: "development" },
];
