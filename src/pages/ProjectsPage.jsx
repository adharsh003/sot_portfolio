import Header from "../components/Header";
import styles from "./ProjectsPage.module.css";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
   
   HOW TO ADD PHOTOS:
   Each project has a `photos` array. Each photo object has:
     - src: path to the image (put images in /public/projects/)
     - label: caption shown on the photo
   
   NAMING CONVENTION for your /public/projects/ folder:
     kuttanad-1.jpg, kuttanad-2.jpg, kuttanad-3.jpg
     kakkanad-1.jpg, kakkanad-2.jpg, kakkanad-3.jpg
     calicut-1.jpg, calicut-2.jpg, calicut-3.jpg
     perinthalmanna-1.jpg, perinthalmanna-2.jpg, perinthalmanna-3.jpg
     annara-1.jpg, annara-2.jpg, annara-3.jpg
     steam-mugs-1.jpg, steam-mugs-2.jpg, steam-mugs-3.jpg
     thrissur-1.jpg, thrissur-2.jpg, thrissur-3.jpg
     wayanad-1.jpg, wayanad-2.jpg, wayanad-3.jpg
   
   The `fallbackBg` is shown if the image hasn't been added yet.
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
      { src: "/projects/kuttanad/kuttanad1.png", alt: "Exterior — Front",  fallbackBg: "linear-gradient(135deg,#1a2a1a,#2d3d20,#1a2510)" },
      { src: "/projects/kuttanad/kuttanad2.png", alt: "Courtyard",         fallbackBg: "linear-gradient(160deg,#12201a,#223a28,#0e1a10)" },
      { src: "/projects/kuttanad/kuttanad3.png", alt: "Garden View",       fallbackBg: "linear-gradient(120deg,#0e1c0e,#1e3016,#0a120a)" },
      { src: "/projects/kuttanad/kuttanad4.png", alt: "Verandah",          fallbackBg: "linear-gradient(145deg,#0e1c0e,#1a2e12,#0a1408)" },
      { src: "/projects/kuttanad/kuttanad5.png", alt: "River Facing",      fallbackBg: "linear-gradient(130deg,#0c1a0c,#182a10,#081208)" },
      { src: "/projects/kuttanad/kuttanad6.png", alt: "Interior Living",   fallbackBg: "linear-gradient(155deg,#101e10,#1c3014,#0c1409)" },
    ],
    heroImage: "/projects/kuttanad/kuttanad1.png",
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
      { src: "/projects/kakkanad/kakkanad1.png", alt: "Facade — Night",      fallbackBg: "linear-gradient(135deg,#0d1520,#1a2535,#0a1018)" },
      { src: "/projects/kakkanad/kakkanad2.png", alt: "Living Spaces",        fallbackBg: "linear-gradient(150deg,#0a1220,#16222e,#080e18)" },
    ],
    heroImage: "/projects/kakkanad/kakkanad1.png",
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
      { src: "/projects/calicut/calicut1.png", alt: "Site Perspective", fallbackBg: "linear-gradient(135deg,#1a1010,#2d1a10,#1a0f08)" },
      { src: "/projects/calicut/calicut2.png", alt: "Section View",     fallbackBg: "linear-gradient(150deg,#150c0c,#251610,#100a06)" },
      { src: "/projects/calicut/calicut3.png", alt: "Entry Court",      fallbackBg: "linear-gradient(120deg,#120a08,#1e1208,#0c0806)" },
    ],
    heroImage: "/projects/calicut/calicut1.png",
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
      { src: "/projects/perinthalmanna/perinthalmanna1.png", alt: "Exterior",        fallbackBg: "linear-gradient(135deg,#1a2010,#283018,#151a0c)" },
      { src: "/projects/perinthalmanna/perinthalmanna2.png", alt: "Roof Detail",     fallbackBg: "linear-gradient(150deg,#141a0e,#202814,#0e120a)" },
      { src: "/projects/perinthalmanna/perinthalmanna3.png", alt: "Landscape",       fallbackBg: "linear-gradient(120deg,#101608,#1c2210,#0c1006)" },
      { src: "/projects/perinthalmanna/perinthalmanna4.png", alt: "Shaded Openings", fallbackBg: "linear-gradient(145deg,#121808,#1e2612,#0e1408)" },
    ],
    heroImage: "/projects/perinthalmanna/perinthalmanna1.png",
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
      { src: "/projects/annara/annara1.png", alt: "Courtyard",     fallbackBg: "linear-gradient(135deg,#101520,#181f2a,#0c1018)" },
      { src: "/projects/annara/annara2.png", alt: "Staircase",     fallbackBg: "linear-gradient(150deg,#0c1018,#141a24,#080c14)" },
      { src: "/projects/annara/annara3.png", alt: "Bedroom Wing",  fallbackBg: "linear-gradient(120deg,#080e16,#10161e,#060a10)" },
      { src: "/projects/annara/annara4.png", alt: "Sky Opening",   fallbackBg: "linear-gradient(145deg,#0a1018,#121820,#06080e)" },
    ],
    heroImage: "/projects/annara/annara1.png",
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
      { src: "/projects/steam-mugs/steam-mugs1.png", alt: "Interior",       fallbackBg: "linear-gradient(135deg,#1a1508,#2a2010,#150f05)" },
      { src: "/projects/steam-mugs/steam-mugs2.png", alt: "Shutter Wall",   fallbackBg: "linear-gradient(150deg,#161208,#22180c,#100d04)" },
      { src: "/projects/steam-mugs/steam-mugs3.png", alt: "Bar Counter",    fallbackBg: "linear-gradient(120deg,#120e06,#1c1408,#0c0a04)" },
    ],
    heroImage: "/projects/steam-mugs/steam-mugs1.png",
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
      { src: "/projects/thrissur/thrissur1.png", alt: "Street View",       fallbackBg: "linear-gradient(135deg,#080d18,#101828,#060a12)" },
      { src: "/projects/thrissur/thrissur2.png", alt: "Commercial Level",  fallbackBg: "linear-gradient(150deg,#060a14,#0e1422,#04080e)" },
    ],
    heroImage: "/projects/thrissur/thrissur1.png",
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
      { src: "/projects/wayanad/wayanad1.png",  alt: "Entrance",      fallbackBg: "linear-gradient(135deg,#0a1a10,#122518,#08120c)" },
      { src: "/projects/wayanad/wayanad2.png",  alt: "Lounge Area",   fallbackBg: "linear-gradient(150deg,#081510,#0e1e14,#060e0a)" },
      { src: "/projects/wayanad/wayanad3.png",  alt: "Dormitory",     fallbackBg: "linear-gradient(120deg,#060e0a,#0a1810,#040c08)" },
      { src: "/projects/wayanad/wayanad4.png",  alt: "Green Wall",    fallbackBg: "linear-gradient(145deg,#081812,#0e2016,#060e0c)" },
      { src: "/projects/wayanad/wayanad5.png",  alt: "Stone Detail",  fallbackBg: "linear-gradient(130deg,#0a1a10,#101e14,#080e0a)" },
      { src: "/projects/wayanad/wayanad6.png",  alt: "Timber Deck",   fallbackBg: "linear-gradient(155deg,#081610,#0c1c14,#060e0a)" },
      { src: "/projects/wayanad/wayanad7.png",  alt: "Courtyard",     fallbackBg: "linear-gradient(135deg,#0a1a10,#122518,#08120c)" },
      { src: "/projects/wayanad/wayanad8.png",  alt: "Seating",       fallbackBg: "linear-gradient(150deg,#081510,#0e1e14,#060e0a)" },
      { src: "/projects/wayanad/wayanad9.png",  alt: "Exterior",      fallbackBg: "linear-gradient(120deg,#060e0a,#0a1810,#040c08)" },
      { src: "/projects/wayanad/wayanad10.png", alt: "Reception",     fallbackBg: "linear-gradient(145deg,#081812,#0e2016,#060e0c)" },
      { src: "/projects/wayanad/wayanad11.png", alt: "Corridor",      fallbackBg: "linear-gradient(130deg,#0a1a10,#101e14,#080e0a)" },
      { src: "/projects/wayanad/wayanad12.png", alt: "Bath",          fallbackBg: "linear-gradient(155deg,#081610,#0c1c14,#060e0a)" },
      { src: "/projects/wayanad/wayanad13.png", alt: "Bedroom",       fallbackBg: "linear-gradient(135deg,#0a1a10,#122518,#08120c)" },
      { src: "/projects/wayanad/wayanad14.png", alt: "Night View",    fallbackBg: "linear-gradient(150deg,#081510,#0e1e14,#060e0a)" },
      { src: "/projects/wayanad/wayanad15.png", alt: "Dining",        fallbackBg: "linear-gradient(120deg,#060e0a,#0a1810,#040c08)" },
      { src: "/projects/wayanad/wayanad16.png", alt: "Pool Deck",     fallbackBg: "linear-gradient(145deg,#081812,#0e2016,#060e0c)" },
      { src: "/projects/wayanad/wayanad17.png", alt: "Canopy",        fallbackBg: "linear-gradient(130deg,#0a1a10,#101e14,#080e0a)" },
      { src: "/projects/wayanad/wayanad18.png", alt: "Landscape",     fallbackBg: "linear-gradient(155deg,#081610,#0c1c14,#060e0a)" },
    ],
    heroImage: "/projects/wayanad/wayanad1.png",
    heroGradient: "linear-gradient(160deg,#061008,#0c1c10,#040a06)",
    accentColor: "#50a068",
  },
];

const FILTERS = [
  { key: "all",         label: "All Projects",  count: ALL_PROJECTS.length },
  { key: "residential", label: "Residential",   count: ALL_PROJECTS.filter(p => p.type === "residential").length },
  { key: "commercial",  label: "Commercial",    count: ALL_PROJECTS.filter(p => p.type === "commercial").length },
  { key: "mixed",       label: "Mixed Use",     count: ALL_PROJECTS.filter(p => p.type === "mixed").length },
];

/* ─────────────────────────────────────────
   PHOTO — renders img if available, else gradient fallback
───────────────────────────────────────── */
function ProjectPhoto({ photo, className, style }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div
      className={className}
      style={{
        ...style,
        background: imgFailed ? photo.fallbackBg : undefined,
      }}
    >
      {!imgFailed && (
        <img
          src={photo.src}
          alt={photo.label}
          onError={() => setImgFailed(true)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   CARD HERO — renders image or gradient for the card background
───────────────────────────────────────── */
function CardHero({ project }) {
  const [imgFailed, setImgFailed] = useState(false);

  if (imgFailed || !project.heroImage) {
    return (
      <div
        className={styles.cardBg}
        style={{ background: project.heroGradient }}
      />
    );
  }

  return (
    <div className={styles.cardBg} style={{ background: project.heroGradient }}>
      <img
        src={project.heroImage}
        alt={project.name}
        onError={() => setImgFailed(true)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.6s ease",
        }}
      />
      {/* Gradient overlay so text stays readable over any photo */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />
    </div>
  );
}

/* ─────────────────────────────────────────
   DETAIL PANEL
───────────────────────────────────────── */
function DetailPanel({ project, allFiltered, onClose, onNavigate }) {
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => { setPhotoIdx(0); }, [project.id]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const currentIdx = allFiltered.findIndex(p => p.id === project.id);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < allFiltered.length - 1;
  const photos = project.photos;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Modal wrapper — centers the box */}
      <div className={styles.modalWrapper} role="dialog" aria-modal="true">
        <div className={styles.modal}>

          {/* Close */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

          {/* ── LEFT: PHOTOS ── */}
          <div className={styles.photoArea}>
            {/* Main photo */}
            <div
              className={styles.photoMain}
              style={{ background: photos[photoIdx].fallbackBg }}
            >
              <img
                key={photos[photoIdx].src}
                src={photos[photoIdx].src}
                alt={photos[photoIdx].alt}
                onError={(e) => { e.currentTarget.style.display = "none"; }}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div className={styles.photoOverlay} />

              {/* Arrows */}
              {photos.length > 1 && (
                <>
                  <button
                    className={`${styles.photoArrow} ${styles.photoArrowLeft}`}
                    onClick={() => setPhotoIdx(i => (i - 1 + photos.length) % photos.length)}
                    aria-label="Previous photo"
                  >‹</button>
                  <button
                    className={`${styles.photoArrow} ${styles.photoArrowRight}`}
                    onClick={() => setPhotoIdx(i => (i + 1) % photos.length)}
                    aria-label="Next photo"
                  >›</button>
                </>
              )}

              {/* Counter badge */}
              {photos.length > 1 && (
                <span className={styles.photoCounter}>
                  {photoIdx + 1} / {photos.length}
                </span>
              )}
            </div>

            {/* Thumbnail strip — horizontal scroll */}
            {photos.length > 1 && (
              <div className={styles.thumbStrip}>
                {photos.map((photo, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === photoIdx ? styles.thumbActive : ""}`}
                    style={{ background: photo.fallbackBg }}
                    onClick={() => setPhotoIdx(i)}
                    aria-label={photo.alt}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className={styles.thumbOverlay} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: DETAILS ── */}
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

        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────
   PROJECT CARD
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
      {/* Background — image or gradient */}
      <CardHero project={project} />

      {/* Top metadata row */}
      <div className={styles.cardTop}>
        <span className={styles.cardType}>{project.badge || project.type}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>

      {/* Hover overlay */}
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
        {/* 👇 Drop your studio/workspace photo path here */}
        <div className={styles.pageHeroBg} />
        <img src="/studio/workspace.png" alt="Our studio" className={styles.pageHeroImg} />
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