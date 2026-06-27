import { useParams, NavLink } from "react-router";
import { useEffect } from "react";
import { projects } from "../data/projects";

// ─── Media helper — renders img or video automatically ───────
const isVideo = (src) =>
  typeof src === "string" && /\.(mp4|webm|ogg|mov)$/i.test(src);

const Media = ({ src, alt, className = "", type }) => {
  if (!src) return null;
  return type === "video" || isVideo(src) ? (
    <video
      src={src}
      className={className}
      autoPlay
      loop
      muted
      playsInline
    />
  ) : (
    <img src={src} alt={alt} className={className} />
  );
};

// ─── Section label pill ───────────────────────────────────────
const SectionLabel = ({ number, label, light = false }) => (
  <div className="flex items-center gap-3 mb-10">
    <span
      className={`text-[10px] font-inter font-semibold tracking-[0.25em] uppercase ${
        light ? "text-white/40" : "text-gray-300"
      }`}
    >
      {number}
    </span>
    <div className={`h-px w-8 ${light ? "bg-white/20" : "bg-gray-200"}`} />
    <span
      className={`text-[10px] font-inter font-semibold tracking-[0.2em] uppercase ${
        light ? "text-white/40" : "text-gray-300"
      }`}
    >
      {label}
    </span>
  </div>
);

// ─── Main component ───────────────────────────────────────────
const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-40 text-center">
        <p className="font-inter text-gray-400 text-sm mb-6">Project not found.</p>
        <NavLink
          to="/projects"
          className="text-[11px] font-inter font-semibold tracking-widest uppercase text-primary underline underline-offset-4"
        >
          ← Back to projects
        </NavLink>
      </div>
    );
  }

  const cs = project.caseStudy;
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <main className="w-full">

      {/* ── BACK LINK ─────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-0">
        <NavLink
          to="/projects"
          className="inline-flex items-center gap-2 text-[11px] font-inter font-semibold tracking-widest uppercase text-gray-400 hover:text-primary transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          All Projects
        </NavLink>
      </div>

      {/* ══════════════════════════════════════════════════════
          SECTION A — HERO  [LIGHT BACKGROUND]
          IMAGE: Device frame mockup (MacBook or browser frame)
                 showing your homepage design. Full width.
                 Export from Figma at 1400×900px minimum.
                 Goes into: cs.heroImage
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white pt-14 pb-0">
        <div className="max-w-6xl mx-auto px-6">

          {/* Eyebrow + headline */}
          <div className="mb-10">
            <p className="text-[10px] font-inter font-semibold tracking-[0.25em] uppercase text-primary mb-4">
              Case Study
            </p>
            <h1 className="font-inter font-bold text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05] tracking-tight text-[#0d0d0d] max-w-3xl mb-8">
              {cs.headline}{" "}
              <span className="text-primary italic">{cs.headlineAccent}</span>
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap gap-x-10 gap-y-4 pb-10 border-b border-gray-100">
              {cs.meta.map((m) => (
                <div key={m.label}>
                  <p className="text-[10px] font-inter font-semibold tracking-[0.18em] uppercase text-gray-300 mb-1">
                    {m.label}
                  </p>
                  <p className="text-sm font-inter text-gray-600">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HERO IMAGE — full bleed, no padding on sides */}
        {/* 📌 PUT HERE: MacBook/browser device frame mockup of your homepage */}
        <div className="w-full overflow-hidden bg-gray-50">
          <Media
            src={cs.heroImage}
            alt={`${project.title} — hero mockup`}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION B — USER RESEARCH / PROBLEM  [DARK BACKGROUND]
          IMAGE: None required here — this is a text-heavy section.
                 Optional: a small mood image or competitor screenshot
                 shown as a 2-col aside if you have one.
                 Goes into: cs.problem.image (optional, add to data if needed)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="01" label="The Problem" light />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-inter font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-snug tracking-tight text-white mb-6">
                {cs.problem.heading}
              </h2>
            </div>
            <div className="pt-1">
              {cs.problem.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm font-inter text-white/50 leading-relaxed mb-4 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION C — DESKTOP VERSION  [LIGHT BACKGROUND]
          IMAGE: Full-page desktop screenshot (no device frame).
                 Export as a tall PNG showing the full scroll length
                 of your homepage or key page.
                 Goes into: cs.desktopImage (add to data)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="02" label="Desktop Design" />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-start mb-14">
            <div>
              <h2 className="font-inter font-bold text-[clamp(1.5rem,3vw,2.2rem)] leading-snug tracking-tight text-[#0d0d0d] mb-5">
                {cs.approach.heading}
              </h2>
              <p className="text-sm font-inter text-gray-500 leading-relaxed mb-8">
                {cs.approach.intro}
              </p>

              {/* Pull quote */}
              {cs.approach.pullQuote && (
                <div className="border-l-2 border-primary pl-5 py-1">
                  <p className="text-[14px] font-inter italic text-gray-500 leading-relaxed">
                    {cs.approach.pullQuote}
                  </p>
                </div>
              )}
            </div>

            {/* 📌 PUT HERE: Full-page desktop screenshot, no frame, just the raw design */}
            {cs.desktopImage && (
              <div className="rounded-md overflow-hidden shadow-sm">
                <Media
                  src={cs.desktopImage}
                  alt="Desktop design"
                  className="w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION D — TYPOGRAPHY & COLOURS  [DARK BACKGROUND]
          IMAGE: Two detail crops side by side.
                 Left image: close crop of your type in use
                   (heading + body pairing, shows scale/contrast)
                 Right image: a UI section showing colour in context
                   (hero or card, shows palette working together)
                 Goes into: cs.approach.detailImages[0] and [1]
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="03" label="Typography & Colour" light />

          {/* Design decisions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 mb-16 border border-white/5">
            {cs.approach.decisions.map((d, i) => (
              <div key={i} className="bg-[#0d0d0d] p-8">
                <span className="text-[10px] font-inter font-semibold tracking-[0.2em] uppercase text-primary block mb-3">
                  {d.tag}
                </span>
                <p className="text-sm font-inter text-white/50 leading-relaxed">
                  {d.text}
                </p>
              </div>
            ))}
          </div>

          {/* Detail image pair */}
          {/* 📌 LEFT: Tight crop of typography in use (heading + body, shows font pairing) */}
          {/* 📌 RIGHT: A hero or card screenshot showing your colour palette in context */}
          {cs.approach.detailImages?.length >= 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cs.approach.detailImages.map((img, i) => (
                <div key={i}>
                  <div className="overflow-hidden rounded-sm bg-white/5">
                    <Media
                      src={img.src}
                      alt={img.caption}
                      type={img.type}
                      className="w-full object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-inter text-white/30 mt-3 tracking-wide">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION E — GRID SYSTEM  [LIGHT BACKGROUND]
          IMAGE: A screenshot with your grid overlay visible.
                 In Figma: turn on Layout Grid, screenshot it,
                 or export the frame with grid lines shown.
                 Goes into: cs.gridImage (add to data)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="04" label="Grid System" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* 📌 PUT HERE: Screenshot with Figma grid overlay visible */}
            {cs.gridImage ? (
              <div className="overflow-hidden rounded-sm bg-gray-50">
                <Media
                  src={cs.gridImage}
                  alt="Grid system"
                  className="w-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-50 rounded-sm flex items-center justify-center">
                <span className="text-[11px] font-inter tracking-widest uppercase text-gray-300">
                  Grid screenshot
                </span>
              </div>
            )}

            <div>
              {cs.gridSystem ? (
                <>
                  <h2 className="font-inter font-bold text-[clamp(1.4rem,2.5vw,2rem)] leading-snug tracking-tight text-[#0d0d0d] mb-5">
                    {cs.gridSystem.heading}
                  </h2>
                  <p className="text-sm font-inter text-gray-500 leading-relaxed">
                    {cs.gridSystem.body}
                  </p>
                </>
              ) : (
                <div>
                  <h2 className="font-inter font-bold text-[clamp(1.4rem,2.5vw,2rem)] leading-snug tracking-tight text-[#0d0d0d] mb-5">
                    Structure that holds everything together.
                  </h2>
                  <p className="text-sm font-inter text-gray-500 leading-relaxed">
                    Add a <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">gridSystem</code> object
                    to your project data with <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">heading</code> and{" "}
                    <code className="text-xs bg-gray-100 px-1 py-0.5 rounded">body</code> fields.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION F — MOBILE VERSION  [DARK BACKGROUND]
          IMAGE: Either your screen recording (mp4) OR
                 3 phone mockup screenshots side by side showing
                 different screens: hero, listing/product, contact.
                 Goes into: cs.fullImage.src (supports video or image)
      ══════════════════════════════════════════════════════ */}
      <section className="bg-[#0d0d0d] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="05" label={cs.fullImage?.sectionLabel ?? "Mobile"} light />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-14">
            <div>
              <h2 className="font-inter font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-snug tracking-tight text-white mb-5">
                {cs.fullImage?.heading}
              </h2>
              <p className="text-sm font-inter text-white/50 leading-relaxed">
                {cs.fullImage?.body}
              </p>
            </div>
            <div />
          </div>

          {/* Mobile media — video or image, full width */}
          {/* 📌 PUT HERE: Screen recording (mp4) OR phone mockup PNG showing mobile screens */}
          {cs.fullImage?.src && (
            <div className="w-full overflow-hidden rounded-sm">
              <Media
                src={cs.fullImage.src}
                alt={cs.fullImage.heading}
                type={cs.fullImage.type}
                className="w-full object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION G — THE RESULT  [LIGHT BACKGROUND]
          IMAGE: None required. Stats speak for themselves.
      ══════════════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel number="06" label="The Result" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-14">
            <h2 className="font-inter font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] leading-snug tracking-tight text-[#0d0d0d]">
              {cs.result.heading}
            </h2>
            <div>
              {cs.result.paragraphs.map((p, i) => (
                <p key={i} className="text-sm font-inter text-gray-500 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          {cs.result.stats?.length > 0 && (
            <div className="grid grid-cols-3 gap-px bg-gray-100">
              {cs.result.stats.map((s, i) => (
                <div key={i} className="bg-white p-10 text-center">
                  <p className="font-inter font-bold text-[clamp(2.4rem,5vw,3.5rem)] leading-none text-primary mb-3">
                    {s.number}
                  </p>
                  <p className="text-[10px] font-inter font-semibold tracking-[0.18em] uppercase text-gray-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="font-inter font-bold text-[clamp(1.2rem,2.5vw,1.8rem)] leading-snug text-white max-w-md">
            {cs.cta.text}
          </p>
          <NavLink
            to={cs.cta.link}
            className="inline-block bg-primary text-white font-inter font-semibold text-sm px-8 py-4 hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {cs.cta.linkLabel}
          </NavLink>
        </div>
      </section>

      {/* ── NEXT / PREV ───────────────────────────────────────── */}
      {(prevProject || nextProject) && (
        <div className="bg-white border-t border-gray-100 px-6 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
            <div>
              {prevProject && (
                <NavLink to={`/projects/${prevProject.slug}`} className="group flex flex-col gap-1">
                  <span className="text-[10px] font-inter font-semibold tracking-widest uppercase text-gray-300 group-hover:text-primary transition-colors">
                    ← Previous
                  </span>
                  <span className="text-sm font-inter font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </span>
                </NavLink>
              )}
            </div>
            <div className="text-right">
              {nextProject && (
                <NavLink to={`/projects/${nextProject.slug}`} className="group flex flex-col gap-1 items-end">
                  <span className="text-[10px] font-inter font-semibold tracking-widest uppercase text-gray-300 group-hover:text-primary transition-colors">
                    Next →
                  </span>
                  <span className="text-sm font-inter font-semibold text-gray-700 group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </span>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default CaseStudy;