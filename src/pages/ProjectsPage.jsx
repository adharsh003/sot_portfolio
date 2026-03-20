import Header from "../components/Header";
import styles from "./ProjectsPage.module.css";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const ALL_PROJECTS = [
  {
    id: "kuttanad",
    name: "Kuttanad",
    client: "Mr. Sijumon Joseph",
    location: "Alappuzha",
    type: "residential",
    year: "2023",
    description:
      "Designed to blend seamlessly into the banks of the Alappuzha River, this home offers a serene retreat where multiple families can come together and connect. The architecture responds to the waterfront context with open verandahs, shaded courtyards, and a material palette rooted in the region.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Alappuzha, Kerala" },
      { label: "Client",   value: "Mr. Sijumon Joseph" },
      { label: "Style",    value: "Tropical Vernacular" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#1a2a1a,#2d3d20,#1a2510)", label: "Exterior — Front" },
      { bg: "linear-gradient(160deg,#12201a,#223a28,#0e1a10)", label: "Courtyard" },
      { bg: "linear-gradient(120deg,#0e1c0e,#1e3016,#0a120a)", label: "Garden View" },
    ],
    heroGradient: "linear-gradient(160deg,#0e1c0e,#1e3a16,#0a1a08)",
    accentColor: "#7aaa50",
  },
  {
    id: "kakkanad",
    name: "Kakkanad",
    client: "Mr. Mushir Mohammed",
    location: "Ernakulam",
    type: "residential",
    year: "2023",
    description:
      "A contemporary three-storey residence designed to balance openness and privacy within a compact urban setting. The 8,000 sq. ft. home features fluid living spaces, double-height volumes, and shaded terraces that respond to the tropical climate.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Kakkanad, Ernakulam" },
      { label: "Client",   value: "Mr. Mushir Mohammed" },
      { label: "Area",     value: "8,000 sq. ft." },
      { label: "Style",    value: "Contemporary Tropical" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#0d1520,#1a2535,#0a1018)", label: "Facade — Night" },
      { bg: "linear-gradient(150deg,#0a1220,#16222e,#080e18)", label: "Living Spaces" },
      { bg: "linear-gradient(120deg,#08101a,#121e2a,#060c14)", label: "Terraces" },
    ],
    heroGradient: "linear-gradient(160deg,#08101e,#152030,#080c18)",
    accentColor: "#5080b0",
  },
  {
    id: "calicut",
    name: "Calicut",
    client: "Mr. Zabeer Mohammed",
    location: "Vellimadukunnu",
    type: "residential",
    year: "2022",
    description:
      "Set on a naturally sloping terrain in Calicut, this three-level home is shaped by the contours rather than imposed upon them. The spatial planning follows the gradient, creating split levels and dynamic connections between floors.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Vellimadukunnu, Calicut" },
      { label: "Client",   value: "Mr. Zabeer Mohammed" },
      { label: "Levels",   value: "3 floors + split levels" },
      { label: "Style",    value: "Terrain-Responsive" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#1a1010,#2d1a10,#1a0f08)", label: "Site Perspective" },
      { bg: "linear-gradient(150deg,#150c0c,#251610,#100a06)", label: "Section View" },
      { bg: "linear-gradient(120deg,#120a08,#1e1208,#0c0806)", label: "Entry Court" },
    ],
    heroGradient: "linear-gradient(160deg,#180e08,#2a1808,#140a04)",
    accentColor: "#c07040",
  },
  {
    id: "perinthalmanna",
    name: "Perinthalmanna",
    client: "Mr. Mohammed Ali",
    location: "Malappuram",
    type: "residential",
    year: "2022",
    description:
      "Designed as a low-cost, climate-responsive home that follows the site's natural contours. The architecture integrates passive cooling strategies—optimized orientation, shaded openings, natural cross-ventilation, and locally sourced materials.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Perinthalmanna, Malappuram" },
      { label: "Client",   value: "Mr. Mohammed Ali" },
      { label: "Strategy", value: "Passive / Low-Cost" },
      { label: "Style",    value: "Climate-Responsive" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#1a2010,#283018,#151a0c)", label: "Exterior" },
      { bg: "linear-gradient(150deg,#141a0e,#202814,#0e120a)", label: "Roof Detail" },
      { bg: "linear-gradient(120deg,#101608,#1c2210,#0c1006)", label: "Landscape" },
    ],
    heroGradient: "linear-gradient(160deg,#101808,#202e10,#0c1406)",
    accentColor: "#90b050",
  },
  {
    id: "annara",
    name: "Annara",
    client: "Mr. Saifudheen",
    location: "Tirur",
    type: "residential",
    year: "2023",
    description:
      "A multi-layered residence organized around a central open-to-sky stair courtyard, inviting northern light into living spaces while placing southwest-facing bedrooms in deep shade.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Tirur, Malappuram" },
      { label: "Client",   value: "Mr. Saifudheen" },
      { label: "Feature",  value: "Central sky courtyard" },
      { label: "Style",    value: "Courtyard Tropical" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#101520,#181f2a,#0c1018)", label: "Courtyard" },
      { bg: "linear-gradient(150deg,#0c1018,#141a24,#080c14)", label: "Staircase" },
      { bg: "linear-gradient(120deg,#080e16,#10161e,#060a10)", label: "Bedroom Wing" },
    ],
    heroGradient: "linear-gradient(160deg,#0a1020,#14202e,#080c18)",
    accentColor: "#6090b0",
  },
  {
    id: "steam-mugs",
    name: "Steam n' Mugs",
    client: "Café",
    location: "Tirur, Malappuram",
    type: "commercial",
    year: "2022",
    description:
      "Designed as a Brutalist café, the space celebrates raw textures, exposed concrete, and geometric forms. Old wooden window shutters collected from demolished houses were turned into a signature design element—the café's main eyecatcher.",
    details: [
      { label: "Type",     value: "Commercial — Café" },
      { label: "Location", value: "Tirur, Malappuram" },
      { label: "Feature",  value: "Reclaimed shutter wall" },
      { label: "Style",    value: "Brutalist / Adaptive Reuse" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#1a1508,#2a2010,#150f05)", label: "Interior" },
      { bg: "linear-gradient(150deg,#161208,#22180c,#100d04)", label: "Shutter Wall" },
      { bg: "linear-gradient(120deg,#120e06,#1c1408,#0c0a04)", label: "Bar Counter" },
    ],
    heroGradient: "linear-gradient(160deg,#1a1204,#2e2008,#140e02)",
    accentColor: "#d0a040",
  },
  {
    id: "thrissur",
    name: "Thrissur",
    client: "Mr. Satheesh Kumar",
    location: "Thrissur",
    type: "mixed",
    badge: "Mixed Use",
    year: "2023",
    description:
      "A mixed-use building combining three levels of commercial spaces with three residential floors above. The project balances urban activity and domestic privacy through separate access points and vertical circulation cores.",
    details: [
      { label: "Type",       value: "Mixed Use" },
      { label: "Location",   value: "Thrissur, Kerala" },
      { label: "Client",     value: "Mr. Satheesh Kumar" },
      { label: "Programme",  value: "3 commercial + 3 residential" },
      { label: "Style",      value: "Contemporary Urban" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#080d18,#101828,#060a12)", label: "Street View" },
      { bg: "linear-gradient(150deg,#060a14,#0e1422,#04080e)", label: "Commercial Level" },
      { bg: "linear-gradient(120deg,#040810,#0c121c,#04060c)", label: "Residential Floors" },
    ],
    heroGradient: "linear-gradient(160deg,#060a18,#0e1628,#040810)",
    accentColor: "#5070c0",
  },
  {
    id: "wayanad",
    name: "Wayanad",
    client: "Travelounge",
    location: "Wayanad",
    type: "commercial",
    year: "2022",
    description:
      "A contemporary travelounge designed as a social and commercial hub. The architecture responds to Wayanad's lush landscape with layered green walls, natural stone, and timber details.",
    details: [
      { label: "Type",      value: "Commercial — Hospitality" },
      { label: "Location",  value: "Wayanad, Kerala" },
      { label: "Programme", value: "Lounge, dormitory, amenities" },
      { label: "Style",     value: "Contemporary Tropical" },
    ],
    photos: [
      { bg: "linear-gradient(135deg,#0a1a10,#122518,#08120c)", label: "Entrance" },
      { bg: "linear-gradient(150deg,#081510,#0e1e14,#060e0a)", label: "Lounge Area" },
      { bg: "linear-gradient(120deg,#06100a,#0c1a10,#040c06)", label: "Landscape" },
    ],
    heroGradient: "linear-gradient(160deg,#081408,#102010,#060e06)",
    accentColor: "#60a060",
  },
];

const FILTERS = [
  { key: "all",         label: "All",        count: ALL_PROJECTS.length },
  { key: "residential", label: "Residential", count: ALL_PROJECTS.filter(p => p.type === "residential").length },
  { key: "commercial",  label: "Commercial",  count: ALL_PROJECTS.filter(p => p.type === "commercial").length },
  { key: "mixed",       label: "Mixed Use",   count: ALL_PROJECTS.filter(p => p.type === "mixed").length },
];

/* ─────────────────────────────────────────
   DETAIL PANEL
───────────────────────────────────────── */
function DetailPanel({ project, allFiltered, onClose, onNavigate }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const panelRef = useRef(null);

  const currentIdx = allFiltered.findIndex(p => p.id === project.id);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < allFiltered.length - 1;

  useEffect(() => setPhotoIndex(0), [project.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape")      onClose();
      if (e.key === "ArrowRight" && hasNext) onNavigate(allFiltered[currentIdx + 1]);
      if (e.key === "ArrowLeft"  && hasPrev) onNavigate(allFiltered[currentIdx - 1]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate, hasPrev, hasNext, allFiltered, currentIdx]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const photo = project.photos[photoIndex];

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <aside className={styles.panel} ref={panelRef}>

        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>

        {/* Photo gallery */}
        <div className={styles.photoArea}>
          <div className={styles.photoMain} style={{ background: photo.bg }}>
            <div className={styles.photoOverlay} />
            <span className={styles.photoLabel}>{photo.label}</span>

            {project.photos.length > 1 && (
              <>
                <button className={`${styles.photoArrow} ${styles.photoArrowLeft}`}
                  onClick={() => setPhotoIndex(i => (i - 1 + project.photos.length) % project.photos.length)}
                  aria-label="Previous">‹</button>
                <button className={`${styles.photoArrow} ${styles.photoArrowRight}`}
                  onClick={() => setPhotoIndex(i => (i + 1) % project.photos.length)}
                  aria-label="Next">›</button>
              </>
            )}

            <div className={styles.photoDots}>
              {project.photos.map((_, i) => (
                <button key={i}
                  className={`${styles.photoDot} ${i === photoIndex ? styles.photoDotActive : ""}`}
                  onClick={() => setPhotoIndex(i)} aria-label={`Photo ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className={styles.thumbStrip}>
            {project.photos.map((p, i) => (
              <button key={i}
                className={`${styles.thumb} ${i === photoIndex ? styles.thumbActive : ""}`}
                style={{ background: p.bg }}
                onClick={() => setPhotoIndex(i)}>
                <div className={styles.thumbOverlay} />
                <span className={styles.thumbLabel}>{p.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Panel body */}
        <div className={styles.panelBody}>
          <div className={styles.panelHeader}>
            <div className={styles.panelMeta}>
              {project.badge
                ? <span className={styles.panelBadge}>{project.badge}</span>
                : <span className={styles.panelType}>{project.type}</span>
              }
              <span className={styles.metaDot}>·</span>
              <span>{project.location}</span>
              <span className={styles.metaDot}>·</span>
              <span>{project.year}</span>
            </div>
            <h2 className={styles.panelName} style={{ color: project.accentColor }}>
              {project.name}
            </h2>
            <p className={styles.panelClient}>{project.client}</p>
          </div>

          <p className={styles.panelDesc}>{project.description}</p>
          <div className={styles.panelDivider} style={{ background: project.accentColor }} />

          <ul className={styles.panelDetails}>
            {project.details.map((d) => (
              <li key={d.label} className={styles.panelDetailRow}>
                <span className={styles.panelDetailLabel}>{d.label}</span>
                <span className={styles.panelDetailValue}>{d.value}</span>
              </li>
            ))}
          </ul>

          <div className={styles.panelNav}>
            <button
              className={`${styles.panelNavBtn} ${!hasPrev ? styles.panelNavDisabled : ""}`}
              onClick={() => hasPrev && onNavigate(allFiltered[currentIdx - 1])}
              disabled={!hasPrev}>
              <span>←</span>
              <span className={styles.panelNavLabel}>{hasPrev ? allFiltered[currentIdx - 1].name : "—"}</span>
            </button>
            <span className={styles.panelNavCount}>{currentIdx + 1} / {allFiltered.length}</span>
            <button
              className={`${styles.panelNavBtn} ${styles.panelNavBtnRight} ${!hasNext ? styles.panelNavDisabled : ""}`}
              onClick={() => hasNext && onNavigate(allFiltered[currentIdx + 1])}
              disabled={!hasNext}>
              <span className={styles.panelNavLabel}>{hasNext ? allFiltered[currentIdx + 1].name : "—"}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ─────────────────────────────────────────
   PROJECT CARD — editorial grid card
───────────────────────────────────────── */
function ProjectCard({ project, onSelect, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add(styles.cardVisible); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={styles.card}
      ref={ref}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(project)}
    >
      {/* Background gradient */}
      <div className={styles.cardBg} style={{ background: project.heroGradient }} />

      {/* Top metadata row */}
      <div className={styles.cardTop}>
        <span className={styles.cardType}>{project.badge || project.type}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>

      {/* Hover overlay — slides up */}
      <div className={styles.cardOverlay}>
        <p className={styles.cardOverlayDesc}>{project.description}</p>
        <span className={styles.cardOverlayCta}>
          Open project <span className={styles.cardOverlayArrow}>→</span>
        </span>
      </div>

      {/* Bottom name block */}
      <div className={styles.cardBottom}>
        <p className={styles.cardLocation}>{project.location}</p>
        <h3 className={styles.cardName} style={{ color: project.accentColor }}>
          {project.name}
        </h3>
      </div>

      {/* Accent line */}
      <div className={styles.cardAccentLine} style={{ background: project.accentColor }} />
    </article>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [animating, setAnimating] = useState(false);

  const filtered = activeFilter === "all"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.type === activeFilter);

  const handleFilter = (key) => {
    if (key === activeFilter) return;
    setAnimating(true);
    setTimeout(() => { setActiveFilter(key); setAnimating(false); }, 220);
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* ── HERO ── */}
      <div className={styles.pageHero}>
        <div className={styles.pageHeroBg} />
        <div className={styles.pageHeroContent}>
          <p className={styles.heroEyebrow}>Our Work</p>
          <h1 className={styles.heroHeading}>
            A small peek into<br />
            <em>our creations</em>
          </h1>
        </div>
        <div className={styles.heroStats}>
          {FILTERS.slice(1).map((f, i, arr) => (
            <div key={f.key} className={styles.heroStatGroup}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{String(f.count).padStart(2, "0")}</span>
                <span className={styles.heroStatLabel}>{f.label}</span>
              </div>
              {i < arr.length - 1 && <div className={styles.heroStatDivider} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className={styles.filterBar}>
        <div className={styles.filterInner}>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterPill} ${activeFilter === f.key ? styles.pillActive : ""}`}
              onClick={() => handleFilter(f.key)}
            >
              {f.label}
              <span className={styles.pillCount}>{f.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── PROJECT GRID ── */}
      <div className={`${styles.projectGrid} ${animating ? styles.gridFading : ""}`}>
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} project={p} onSelect={setSelectedProject} index={i} />
        ))}
      </div>

      {/* ── FOOTER CTA ── */}
      <div className={styles.footerCta}>
        <p className={styles.footerCtaEyebrow}>Have a project in mind?</p>
        <h2 className={styles.footerCtaHeading}>Let's build your vision.</h2>
        <a href="/contact" className={styles.footerCtaBtn}>Contact Us →</a>
      </div>

      {/* ── DETAIL PANEL ── */}
      {selectedProject && (
        <DetailPanel
          project={selectedProject}
          allFiltered={filtered}
          onClose={() => setSelectedProject(null)}
          onNavigate={setSelectedProject}
        />
      )}
    </div>
  );
}