// ─────────────────────────────────────────────────────────────
//  PROJECT DATA  —  single source of truth
//  Each project powers both the Projects grid card AND its
//  dedicated Case Study page. Add a new object = new case study.
// ─────────────────────────────────────────────────────────────

import archi from "../assets/archis.jpg"; // replace per-project when you have real screenshots

export const projects = [
  {
    id: 1,
    slug: "benak-hills",

    // ── CARD (Projects grid) ──────────────────────────────────
    title: "Benak Hills",
    description: "A luxury residential development that sells the dream before the first viewing.",
    tags: ["ui/ux", "development"],
    image: archi,
    accent: false,

    // ── CASE STUDY PAGE ───────────────────────────────────────
    caseStudy: {
      headline: "A residence that sells itself",
      headlineAccent: "before anyone walks through the door.",
      meta: [
        { label: "Client", value: "Benak Hills" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Luxury Real Estate" },
        { label: "Year", value: "2025" },
      ],
      heroImage: archi, // replace with real hero screenshot

      // Section 01 – The Problem
      problem: {
        heading: "The property was exceptional. The digital presence was not.",
        paragraphs: [
          "Benak Hills was launching a high-end residential development with no web presence to match its price point. The properties photographed beautifully — but there was nowhere for interested buyers to land and feel the weight of what they were considering purchasing.",
          "The brief was clear: build something that communicates exclusivity, creates desire, and prompts a conversation — before the first viewing is ever booked.",
        ],
      },

      // Section 02 – The Approach
      approach: {
        heading: "Restraint as a luxury signal.",
        intro:
          "The instinct with luxury is often to add — more imagery, more features, more content. The decision here was the opposite. Generous white space, a strict typographic hierarchy, and photography that was allowed to breathe.",
        pullQuote:
          "\"The goal wasn't to show everything. It was to make the visitor feel that seeing the rest was worth their time.\"",
        decisions: [
          {
            tag: "Typography",
            text: "A high-contrast serif for headings — the kind you see in Vogue editorials and Sotheby's catalogues. It immediately signals the right register before a single word is read.",
          },
          {
            tag: "Colour",
            text: "A near-black background with warm off-white text. Most property sites are white — this reversal immediately separates the brand from every competitor in the market.",
          },
          {
            tag: "Layout",
            text: "Full-bleed photography sections with no competing elements. Each property gets its own moment — the design doesn't rush the visitor toward a contact form.",
          },
          {
            tag: "Motion",
            text: "Subtle fade-in sequences on scroll. Nothing decorative — only transitions that reward attention and slow the pace to match the feeling of a considered purchase.",
          },
        ],
        detailImages: [
          { src: archi, caption: "— Hero section · typography and full-bleed treatment" },
          { src: archi, caption: "— Property listing · layout and photography composition" },
        ],
      },

      // Section 03 – Full-width image block
      fullImage: {
        src: archi,
        sectionLabel: "Mobile Experience",
        heading: "Every detail held at every size.",
        body: "Luxury buyers browse on phones. The design was built mobile-first — not adapted to it. Every typographic decision, every spacing choice, holds at 390px.",
      },

      // Section 04 – The Result
      result: {
        heading: "A site ready to work on day one.",
        paragraphs: [
          "Delivered a fully functional, production-ready site: high-impact first impression, clean conversion path, and a design that communicates premium positioning at a glance.",
          "Lighthouse performance score of 97. Sub-1.2s load time on mobile. Fully optimised for the search terms buyers actually use.",
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
    slug: "architex",

    title: "Architex",
    description: "A digital presence as considered as the buildings the studio designs.",
    tags: ["ui/ux", "development"],
    image: archi,
    accent: true,

    caseStudy: {
      headline: "An architecture firm finally",
      headlineAccent: "online at the level of its work.",
      meta: [
        { label: "Client", value: "Architex" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Architecture" },
        { label: "Year", value: "2025" },
      ],
      heroImage: archi,

      problem: {
        heading: "A portfolio of landmark buildings. A website that looked like a PDF.",
        paragraphs: [
          "Architex had spent fifteen years building a reputation for considered, technically precise design. Their digital presence hadn't kept pace — a static site with no hierarchy, no story, and photography that didn't do the work justice.",
          "Potential clients were arriving at something that actively undercut the studio's standing. The brief: a site as rigorous as the practice itself.",
        ],
      },

      approach: {
        heading: "The grid as the concept.",
        intro:
          "Architecture firms live and die by the grid. The site system was built on the same principles the studio applies to buildings — proportion, alignment, and the deliberate use of space.",
        pullQuote:
          "\"A firm this precise about structure deserves a website that applies the same discipline to every pixel.\"",
        decisions: [
          {
            tag: "Grid",
            text: "A strict 12-column system with explicit margins. Every element snaps. Nothing floats. The rigour of the layout reflects the rigour of the practice.",
          },
          {
            tag: "Photography",
            text: "Full-bleed project photography with no UI competing for attention. The buildings lead. The studio's name follows.",
          },
          {
            tag: "Navigation",
            text: "A minimal top bar that collapses on scroll. The site gives the work space to exist without constant wayfinding noise.",
          },
        ],
        detailImages: [
          { src: archi, caption: "— Project index · grid layout system" },
          { src: archi, caption: "— Project detail · full-bleed photography treatment" },
        ],
      },

      fullImage: {
        src: archi,
        sectionLabel: "Project Pages",
        heading: "Each project gets the space it deserves.",
        body: "Individual project pages built as editorial layouts — process photography, drawings, and completed work presented in a sequence that tells the story of how the building came to exist.",
      },

      result: {
        heading: "A site the studio is proud to send to clients.",
        paragraphs: [
          "Complete redesign and rebuild: new project CMS, photography-first layouts, and a contact flow that filters enquiries by project type before they reach the studio.",
          "The studio reported immediate improvement in the quality of inbound enquiries — clients arriving already aligned with the practice's positioning.",
        ],
        stats: [
          { number: "98", label: "Lighthouse Score" },
          { number: "3×", label: "Enquiry Quality Lift" },
          { number: "100%", label: "Mobile Responsive" },
        ],
      },

      cta: {
        text: "Running an architecture or design practice?",
        link: "/contact",
        linkLabel: "Let's work together",
      },
    },
  },

  {
    id: 3,
    slug: "archite-y",

    title: "Archite Y",
    description: "An interior design studio with a website as considered as its spaces.",
    tags: ["ui/ux", "development"],
    image: archi,
    accent: false,

    caseStudy: {
      headline: "An interior design studio that",
      headlineAccent: "earns the room before you enter.",
      meta: [
        { label: "Client", value: "Archite Y" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Interior Design" },
        { label: "Year", value: "2025" },
      ],
      heroImage: archi,

      problem: {
        heading: "The interiors were world-class. The website looked like a mood board left unfinished.",
        paragraphs: [
          "Archite Y designs spaces for clients who do not compromise. The studio's portfolio — residential, hospitality, commercial — was extraordinary. The website was a disorganised gallery with no hierarchy and no narrative.",
          "High-value clients were arriving somewhere that communicated the wrong things: rushed, unedited, unintentional. The opposite of what the studio actually delivers.",
        ],
      },

      approach: {
        heading: "Curation over volume.",
        intro:
          "Interior design clients don't need to see everything. They need to see enough — chosen carefully, presented so well that they trust the studio's eye before the first call.",
        pullQuote:
          "\"The edit is the message. A studio that knows what to leave out inspires confidence in everything it keeps in.\"",
        decisions: [
          {
            tag: "Curation",
            text: "Six projects shown instead of twenty-two. Each chosen to demonstrate range without diluting the sense of a singular point of view.",
          },
          {
            tag: "Atmosphere",
            text: "Warm off-white base with deep warm neutrals. The palette feels like standing inside one of the studio's finished rooms.",
          },
          {
            tag: "Pacing",
            text: "Long-scroll project pages with slow image reveals. The site doesn't rush — because the studio's clients aren't rushed people.",
          },
        ],
        detailImages: [
          { src: archi, caption: "— Project index · curated six-project layout" },
          { src: archi, caption: "— Room detail · slow-reveal scroll treatment" },
        ],
      },

      fullImage: {
        src: archi,
        sectionLabel: "Studio Page",
        heading: "The practice, not just the portfolio.",
        body: "A studio page that introduces the team, the process, and the values — so clients understand what working with Archite Y actually means before they make contact.",
      },

      result: {
        heading: "A website that pre-qualifies every client who reaches the contact form.",
        paragraphs: [
          "Complete redesign: curated project selection, editorial layouts, studio narrative, and a contact flow that sets expectations before the first conversation.",
          "Enquiry volume dropped. Enquiry quality improved significantly — the site now does the qualification work the studio previously had to do on calls.",
        ],
        stats: [
          { number: "6", label: "Projects Curated" },
          { number: "99", label: "Lighthouse Score" },
          { number: "4×", label: "Enquiry Quality Lift" },
        ],
      },

      cta: {
        text: "Running an interior design studio that deserves better clients?",
        link: "/contact",
        linkLabel: "Start a conversation",
      },
    },
  },

  {
    id: 4,
    slug: "miss-kitty",

    title: "Miss Kitty",
    description: "A fashion brand with a personality too big for a generic e-commerce template.",
    tags: ["ui/ux", "development"],
    image: archi,
    accent: true,

    caseStudy: {
      headline: "A fashion brand that finally",
      headlineAccent: "looks as good as it dresses you.",
      meta: [
        { label: "Client", value: "Miss Kitty" },
        { label: "Scope", value: "UI/UX & Web Development" },
        { label: "Sector", value: "Fashion" },
        { label: "Year", value: "2025" },
      ],
      heroImage: archi,

      problem: {
        heading: "A brand with a strong point of view trapped in a template with none.",
        paragraphs: [
          "Miss Kitty had built a loyal following on the strength of its aesthetic — bold, feminine, unapologetic. The website was a stock Shopify theme. The disconnect between the brand's personality and its digital presence was costing it customers at the moment of highest intent.",
          "The brief: a site that feels like the brand, not just sells like one.",
        ],
      },

      approach: {
        heading: "Personality first, conversion second.",
        intro:
          "Most fashion e-commerce is optimised for conversion at the cost of character. The decision here was to lead with the brand — because a customer who connects with the brand converts and comes back.",
        pullQuote:
          "\"The best fashion sites don't feel like shops. They feel like invitations.\"",
        decisions: [
          {
            tag: "Editorial",
            text: "Campaign imagery treated as editorial — full-bleed, no product labels overlaid, no price tags interrupting the story. The product pages do the selling; the homepage does the seducing.",
          },
          {
            tag: "Typography",
            text: "A display serif with attitude paired with a tight, modern grotesque. The combination reads fashionable without referencing any specific reference too closely.",
          },
          {
            tag: "Colour",
            text: "The brand's existing palette — used with more conviction. Saturated accent against a clean base. The colours work harder when there are fewer of them.",
          },
        ],
        detailImages: [
          { src: archi, caption: "— Homepage · editorial campaign treatment" },
          { src: archi, caption: "— Product page · clean conversion layout" },
        ],
      },

      fullImage: {
        src: archi,
        sectionLabel: "Mobile Shopping",
        heading: "Built for the phone it will be bought on.",
        body: "Fashion is bought on phones, in moments — on a lunch break, late at night, between meetings. The mobile experience was designed first, with checkout reduced to the minimum number of taps.",
      },

      result: {
        heading: "A site that converts because it first connects.",
        paragraphs: [
          "Complete redesign and Shopify rebuild: editorial homepage, product listing system, size guide, and a one-page checkout flow.",
          "The brand's returning customer rate improved in the first month — the site now gives people a reason to come back even when they're not buying.",
        ],
        stats: [
          { number: "96", label: "Lighthouse Score" },
          { number: "2×", label: "Return Visit Rate" },
          { number: "<3", label: "Taps to Checkout" },
        ],
      },

      cta: {
        text: "Running a fashion brand that deserves a better digital presence?",
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