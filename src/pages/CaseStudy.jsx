import { useParams, NavLink } from "react-router";
import { useEffect } from "react";
import { projects } from "../data/projects";

// ─── Helpers ────────────────────────────────────────────────
const Divider = () => (
  <div className="border-t border-gray-100 w-full" />
);

// ─── Section wrapper — label left, content right ─────────────
const Section = ({ number, label, children }) => (
  <div className="py-16 border-t border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
      <div className="pt-1">
        <span className="text-[10px] font-inter font-semibold tracking-[0.2em] uppercase text-gray-300">
          {number}
        </span>
        <p className="text-[10px] font-inter font-semibold tracking-[0.18em] uppercase text-gray-400 mt-1">
          {label}
        </p>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

// ─── Image with placeholder fallback ─────────────────────────
const CaseImage = ({ src, alt, className = "", aspect = "aspect-video" }) => (
  <div className={`${aspect} bg-gray-100 rounded-md overflow-hidden ${className}`}>
    {src ? (
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    ) : (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2">
        <span className="text-[10px] font-inter tracking-widest uppercase text-gray-300">
          Image placeholder
        </span>
      </div>
    )}
  </div>
);

// ─── Main component ───────────────────────────────────────────
const CaseStudy = () => {
  const { slug } = useParams();
//   const navigate = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-40 text-center">
        <p className="font-inter text-gray-400 text-sm mb-6">
          Project not found.
        </p>
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

  // Adjacent projects for next/prev navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1] ?? null;
  const nextProject = projects[currentIndex + 1] ?? null;

  return (
    <main className="max-w-5xl mx-auto px-6 py-24">

      {/* ── Back link ── */}
      <NavLink
        to="/projects"
        className="inline-flex items-center gap-2 text-[11px] font-inter font-semibold tracking-widest uppercase text-gray-400 hover:text-primary transition-colors mb-14 group"
      >
        <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
        All Projects
      </NavLink>

      {/* ── HERO ── */}
      <div className="mb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-inter font-semibold tracking-[0.25em] uppercase text-gray-300">
            Case Study
          </span>
          <div className="h-px w-10 bg-gray-200" />
        </div>

        {/* Headline */}
        <h1 className="font-inter font-bold text-[clamp(2.4rem,6vw,4rem)] leading-tight tracking-tight text-[#0d0d0d] mb-8 max-w-3xl">
          {cs.headline}{" "}
          <span className="text-primary italic">{cs.headlineAccent}</span>
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 mb-14">
          {cs.meta.map((m) => (
            <div key={m.label}>
              <p className="text-[10px] font-inter font-semibold tracking-[0.18em] uppercase text-gray-300 mb-1">
                {m.label}
              </p>
              <p className="text-sm font-inter text-gray-600">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Hero image */}
        <CaseImage
          src={cs.heroImage}
          alt={`${project.title} — hero screenshot`}
          aspect="aspect-video"
          className="w-full shadow-sm"
        />
      </div>

      {/* ── SECTION 01: THE PROBLEM ── */}
      <Section number="01" label="The Problem">
        <h2 className="font-inter font-bold text-[1.45rem] leading-snug tracking-tight text-[#0d0d0d] mb-5">
          {cs.problem.heading}
        </h2>
        {cs.problem.paragraphs.map((p, i) => (
          <p key={i} className="text-sm font-inter text-gray-500 leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}
      </Section>

      {/* ── SECTION 02: THE APPROACH ── */}
      <Section number="02" label="The Approach">
        <h2 className="font-inter font-bold text-[1.45rem] leading-snug tracking-tight text-[#0d0d0d] mb-5">
          {cs.approach.heading}
        </h2>
        <p className="text-sm font-inter text-gray-500 leading-relaxed mb-8">
          {cs.approach.intro}
        </p>

        {/* Pull quote */}
        {cs.approach.pullQuote && (
          <div className="border-l-2 border-primary pl-5 py-1 mb-8 bg-gray-50 rounded-r-md pr-5">
            <p className="text-[15px] font-inter italic text-gray-600 leading-relaxed">
              {cs.approach.pullQuote}
            </p>
          </div>
        )}

        {/* Decisions list */}
        <div className="divide-y divide-gray-100 mb-10">
          {cs.approach.decisions.map((d, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-6 py-4"
            >
              <span className="text-[10px] font-inter font-semibold tracking-[0.18em] uppercase text-gray-300 pt-0.5">
                {d.tag}
              </span>
              <p className="text-sm font-inter text-gray-500 leading-relaxed italic">
                {d.text}
              </p>
            </div>
          ))}
        </div>

        {/* Detail image pair */}
        {cs.approach.detailImages?.length === 2 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cs.approach.detailImages.map((img, i) => (
              <div key={i}>
                <CaseImage
                  src={img.src}
                  alt={img.caption}
                  aspect="aspect-4/3"
                />
                <p className="text-[10px] font-inter text-gray-300 mt-2 tracking-wide">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* ── SECTION 03: FULL-WIDTH IMAGE ── */}
      {cs.fullImage && (
        <Section number="03" label={cs.fullImage.sectionLabel}>
          <h2 className="font-inter font-bold text-[1.45rem] leading-snug tracking-tight text-[#0d0d0d] mb-4">
            {cs.fullImage.heading}
          </h2>
          <p className="text-sm font-inter text-gray-500 leading-relaxed mb-8">
            {cs.fullImage.body}
          </p>
          <CaseImage
            src={cs.fullImage.src}
            alt={cs.fullImage.heading}
            aspect="aspect-[16/7]"
          />
        </Section>
      )}

      {/* ── SECTION 04: THE RESULT ── */}
      <Section number="04" label="The Result">
        <h2 className="font-inter font-bold text-[1.45rem] leading-snug tracking-tight text-[#0d0d0d] mb-5">
          {cs.result.heading}
        </h2>
        {cs.result.paragraphs.map((p, i) => (
          <p key={i} className="text-sm font-inter text-gray-500 leading-relaxed mb-4 last:mb-0">
            {p}
          </p>
        ))}

        {/* Stats */}
        {cs.result.stats?.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-10">
            {cs.result.stats.map((s, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-md p-5 text-center border border-gray-100"
              >
                <p className="font-inter font-bold text-[2rem] leading-none text-primary mb-2">
                  {s.number}
                </p>
                <p className="text-[10px] font-inter font-semibold tracking-[0.15em] uppercase text-gray-400 leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* ── CTA ── */}
      <div className="border-t border-gray-100 pt-16 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-inter font-bold text-[1.2rem] leading-snug tracking-tight text-[#0d0d0d] max-w-sm">
          {cs.cta.text}
        </p>
        <NavLink
          to={cs.cta.link}
          className="inline-block bg-primary text-white font-inter font-semibold text-sm px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {cs.cta.linkLabel}
        </NavLink>
      </div>

      {/* ── NEXT / PREV NAVIGATION ── */}
      {(prevProject || nextProject) && (
        <div className="border-t border-gray-100 mt-16 pt-10 grid grid-cols-2 gap-4">
          <div>
            {prevProject && (
              <NavLink
                to={`/projects/${prevProject.slug}`}
                className="group flex flex-col gap-1"
              >
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
              <NavLink
                to={`/projects/${nextProject.slug}`}
                className="group flex flex-col gap-1 items-end"
              >
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
      )}

    </main>
  );
};

export default CaseStudy;