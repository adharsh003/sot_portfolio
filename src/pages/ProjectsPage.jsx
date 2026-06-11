import Header from "../components/Header";
import Footer from "../components/Footer";
import CounterAnimation from "../components/CounterAnimation";
import styles from "./ProjectsPage.module.css";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA - ALL PROJECTS WITH CORRECT IMAGE PATHS
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
      { src: "/projects/kuttanad/Kuttanad1.jpeg", alt: "Exterior — Front",  fallbackBg: "linear-gradient(135deg,#1a2a1a,#2d3d20,#1a2510)" },
      { src: "/projects/kuttanad/Kuttanad2.jpeg", alt: "Courtyard",         fallbackBg: "linear-gradient(160deg,#12201a,#223a28,#0e1a10)" },
      { src: "/projects/kuttanad/Kuttanad3.jpeg", alt: "Garden View",       fallbackBg: "linear-gradient(120deg,#0e1c0e,#1e3016,#0a120a)" },
      { src: "/projects/kuttanad/Kuttanad4.jpeg", alt: "Verandah",          fallbackBg: "linear-gradient(145deg,#0e1c0e,#1a2e12,#0a1408)" },
      { src: "/projects/kuttanad/Kuttanad5.jpeg", alt: "River Facing",      fallbackBg: "linear-gradient(130deg,#0c1a0c,#182a10,#081208)" },
      { src: "/projects/kuttanad/Kuttanad6.jpeg", alt: "Interior Living",   fallbackBg: "linear-gradient(155deg,#101e10,#1c3014,#0c1409)" },
      { src: "/projects/kuttanad/Kuttanad7.jpeg", alt: "Waterfront View",   fallbackBg: "linear-gradient(140deg,#0a1810,#162a18,#08140c)" },
    ],
    heroImage: "/projects/kuttanad/Kuttanad1.jpeg",
    heroGradient: "linear-gradient(160deg,#0e1c0e,#1e3a16,#0a1a08)",
    accentColor: "#7aaa50",
  },
  {
    id: "kakkanad-residence",
    name: "Kakkanad Residence",
    client: "Mr. Mushir Mohammed",
    location: "Kakkanad, Ernakulam",
    type: "residential",
    year: "2024",
    description:
      "A modern family home that prioritizes comfort and functionality. The design incorporates spacious interiors, natural materials, and strategic placement of windows to maximize natural light throughout the day.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Kakkanad, Ernakulam" },
      { label: "Client",   value: "Mr. Mushir Mohammed" },
      { label: "Style",    value: "Modern Tropical" },
    ],
    photos: [
      { src: "/projects/kakkanad residence/Kakkanad1.jpeg", alt: "Main Facade", fallbackBg: "linear-gradient(135deg,#0d1520,#1a2535,#0a1018)" },
      { src: "/projects/kakkanad residence/Kakkanad2.jpeg", alt: "Entrance", fallbackBg: "linear-gradient(150deg,#0a1220,#16222e,#080e18)" },
      { src: "/projects/kakkanad residence/Kakkanad3.jpeg", alt: "Living Area", fallbackBg: "linear-gradient(120deg,#080e16,#10161e,#060a10)" },
      { src: "/projects/kakkanad residence/Kakkanad4.jpeg", alt: "Interior", fallbackBg: "linear-gradient(145deg,#0a1018,#121820,#06080e)" },
      { src: "/projects/kakkanad residence/Kakkanad5.jpeg", alt: "Detail View", fallbackBg: "linear-gradient(130deg,#0c1218,#141c24,#080c12)" },
      { src: "/projects/kakkanad residence/Kakkanad6.jpeg", alt: "Exterior", fallbackBg: "linear-gradient(155deg,#081014,#0e1820,#060c10)" },
    ],
    heroImage: "/projects/kakkanad residence/Kakkanad1.jpeg",
    heroGradient: "linear-gradient(160deg,#08101e,#152030,#080c18)",
    accentColor: "#6090c0",
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
      { src: "/projects/perinthalmanna/perinthalmanna1.jpeg", alt: "Exterior",        fallbackBg: "linear-gradient(135deg,#1a2010,#283018,#151a0c)" },
      { src: "/projects/perinthalmanna/perinthalmanna2.jpeg", alt: "Roof Detail",     fallbackBg: "linear-gradient(150deg,#141a0e,#202814,#0e120a)" },
      { src: "/projects/perinthalmanna/perinthalmanna3.jpeg", alt: "Landscape",       fallbackBg: "linear-gradient(120deg,#101608,#1c2210,#0c1006)" },
      { src: "/projects/perinthalmanna/perinthalmanna4.png", alt: "Shaded Openings", fallbackBg: "linear-gradient(145deg,#121808,#1e2612,#0e1408)" },
    ],
    heroImage: "/projects/perinthalmanna/perinthalmanna1.jpeg",
    heroGradient: "linear-gradient(160deg,#101808,#202e10,#0c1406)",
    accentColor: "#90b050",
  },
  {
    id: "malappuram",
    name: "Malappuram",
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
      { src: "/projects/malappuram/malappuram1.png", alt: "Courtyard",     fallbackBg: "linear-gradient(135deg,#101520,#181f2a,#0c1018)" },
      { src: "/projects/malappuram/malappuram2.png", alt: "Staircase",     fallbackBg: "linear-gradient(150deg,#0c1018,#141a24,#080c14)" },
      { src: "/projects/malappuram/malappuram3.png", alt: "Bedroom Wing",  fallbackBg: "linear-gradient(120deg,#080e16,#10161e,#060a10)" },
      { src: "/projects/malappuram/malappuram4.png", alt: "Sky Opening",   fallbackBg: "linear-gradient(145deg,#0a1018,#121820,#06080e)" },
    ],
    heroImage: "/projects/malappuram/malappuram1.png",
    heroGradient: "linear-gradient(160deg,#0a1020,#14202e,#080c18)",
    accentColor: "#6090b0",
  },
  {
    id: "dindigul",
    name: "Dindigul",
    client: "Private Residence",
    location: "Dindigul, Tamil Nadu",
    type: "residential",
    year: "2023",
    description:
      "A contemporary residence that harmonizes modern design principles with regional architectural sensibilities. The project emphasizes spatial efficiency and natural ventilation while maintaining a strong connection to the local context.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Dindigul, Tamil Nadu" },
      { label: "Style",    value: "Contemporary" },
    ],
    photos: [
      { src: "/projects/Dindigul/dindigul1.jpeg", alt: "Exterior View", fallbackBg: "linear-gradient(135deg,#1a1510,#2d2418,#1a1208)" },
      { src: "/projects/Dindigul/dindigul2.jpeg", alt: "Front Facade", fallbackBg: "linear-gradient(150deg,#141110,#221a14,#100d08)" },
      { src: "/projects/Dindigul/dindigul3.jpeg", alt: "Side Elevation", fallbackBg: "linear-gradient(120deg,#120d0a,#1e1510,#0c0908)" },
    ],
    heroImage: "/projects/Dindigul/dindigul1.jpeg",
    heroGradient: "linear-gradient(160deg,#1a1208,#2a1e10,#140d04)",
    accentColor: "#b88050",
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
  {
    id: "chalakkudi",
    name: "Chalakkudi",
    client: "Private Residence",
    location: "Chalakkudi, Thrissur",
    type: "residential",
    year: "2023",
    description:
      "A contemporary residence designed to embrace natural light and ventilation. The architecture features clean lines, open spaces, and a harmonious blend of modern materials with traditional Kerala elements.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Chalakkudi, Thrissur" },
      { label: "Style",    value: "Contemporary" },
    ],
    photos: [
      { src: "/projects/Chalakkudi/Chalakkudi1.jpeg", alt: "Exterior View", fallbackBg: "linear-gradient(135deg,#1a1810,#2d2418,#1a1408)" },
      { src: "/projects/Chalakkudi/Chalakkudi2.jpeg", alt: "Front Facade", fallbackBg: "linear-gradient(150deg,#141210,#221a14,#100e08)" },
      { src: "/projects/Chalakkudi/Chalakkudi3.jpeg", alt: "Side View", fallbackBg: "linear-gradient(120deg,#120e0a,#1e1610,#0c0a08)" },
      { src: "/projects/Chalakkudi/Chalakkudi4.jpeg", alt: "Detail", fallbackBg: "linear-gradient(145deg,#0e0c0a,#1a1410,#0a0806)" },
    ],
    heroImage: "/projects/Chalakkudi/Chalakkudi1.jpeg",
    heroGradient: "linear-gradient(160deg,#1a1408,#2a2010,#140e04)",
    accentColor: "#b89060",
  },
  {
    id: "nadapuram",
    name: "Nadapuram",
    client: "Private Residence",
    location: "Nadapuram, Kozhikode",
    type: "residential",
    year: "2023",
    description:
      "A residence that celebrates simplicity and functionality. The design focuses on creating comfortable living spaces that respond to the local climate while maintaining a contemporary aesthetic.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Nadapuram, Kozhikode" },
      { label: "Style",    value: "Contemporary" },
    ],
    photos: [
      { src: "/projects/nadapuram/nadapuram1.jpeg", alt: "Front View", fallbackBg: "linear-gradient(135deg,#1a1810,#2d2418,#1a1408)" },
      { src: "/projects/nadapuram/nadapuram2.jpeg", alt: "Facade", fallbackBg: "linear-gradient(150deg,#141210,#221a14,#100e08)" },
      { src: "/projects/nadapuram/nadapuram3.jpeg", alt: "Side Elevation", fallbackBg: "linear-gradient(120deg,#120e0a,#1e1610,#0c0a08)" },
      { src: "/projects/nadapuram/nadapuram4.jpeg", alt: "Detail", fallbackBg: "linear-gradient(145deg,#0e0c0a,#1a1410,#0a0806)" },
    ],
    heroImage: "/projects/nadapuram/nadapuram1.jpeg",
    heroGradient: "linear-gradient(160deg,#1a1408,#2a2010,#140e04)",
    accentColor: "#a88050",
  },
  {
    id: "thekkumuri",
    name: "Thekkumuri",
    client: "Private Residence",
    location: "Thekkumuri",
    type: "residential",
    year: "2023",
    description:
      "A thoughtfully designed home that balances privacy and openness. The architecture features well-proportioned spaces, natural ventilation, and a material palette that ages gracefully with time.",
    details: [
      { label: "Type",     value: "Residential" },
      { label: "Location", value: "Thekkumuri, Kerala" },
      { label: "Style",    value: "Contemporary Vernacular" },
    ],
    photos: [
      { src: "/projects/Thekkumuri/thekkumuri1.jpeg", alt: "Exterior", fallbackBg: "linear-gradient(135deg,#101520,#181f2a,#0c1018)" },
      { src: "/projects/Thekkumuri/thekkumuri2.jpeg", alt: "Front View", fallbackBg: "linear-gradient(150deg,#0c1018,#141a24,#080c14)" },
      { src: "/projects/Thekkumuri/thekkumuri3.jpeg", alt: "Side View", fallbackBg: "linear-gradient(120deg,#080e16,#10161e,#060a10)" },
      { src: "/projects/Thekkumuri/thekkumuri4.jpeg", alt: "Detail", fallbackBg: "linear-gradient(145deg,#0a1018,#121820,#06080e)" },
    ],
    heroImage: "/projects/Thekkumuri/thekkumuri1.jpeg",
    heroGradient: "linear-gradient(160deg,#0a1020,#14202e,#080c18)",
    accentColor: "#7090b0",
  },
];

const INTERIOR_PROJECTS = [
  {
    id: "interior-project-1",
    name: "Contemporary Interior Design",
    client: "",
    location: "Kerala",
    type: "interior",
    year: "2024",
    description: "A sophisticated interior design project featuring modern aesthetics with warm tones and elegant finishes. The space combines functionality with visual appeal, creating comfortable living environments.",
    details: [
      { label: "Type", value: "Interior Design" },
      { label: "Location", value: "Kerala" },
      { label: "Style", value: "Contemporary" },
    ],
    photos: [
      { src: "/Interior/Interior1/interior1.jpeg", alt: "Living Space", fallbackBg: "linear-gradient(135deg,#1a1510,#2d2418,#1a1208)" },
      { src: "/Interior/Interior1/interior2.jpeg", alt: "Detail View", fallbackBg: "linear-gradient(150deg,#141110,#221a14,#100d08)" },
      { src: "/Interior/Interior1/interior3.jpeg", alt: "Bedroom", fallbackBg: "linear-gradient(120deg,#120d0a,#1e1510,#0c0908)" },
      { src: "/Interior/Interior1/interior4.jpeg", alt: "Kitchen Area", fallbackBg: "linear-gradient(145deg,#0e0c0a,#1a1410,#0a0806)" },
      { src: "/Interior/Interior1/interior5.jpeg", alt: "Dining Space", fallbackBg: "linear-gradient(130deg,#101010,#1c1818,#0c0c0c)" },
      { src: "/Interior/Interior1/interior6.jpeg", alt: "Bathroom", fallbackBg: "linear-gradient(155deg,#0a0e10,#141c20,#080c10)" },
    ],
    heroImage: "/Interior/Interior1/interior1.jpeg",
    heroGradient: "linear-gradient(160deg,#1a1208,#2a1e10,#140d04)",
    accentColor: "#c09060",
  },
  {
    id: "interior-project-2",
    name: "Modern Interior Spaces",
    client: "",
    location: "Kerala",
    type: "interior",
    year: "2024",
    description: "An elegant interior design showcasing clean lines, thoughtful lighting, and a harmonious blend of textures. Each space is carefully curated to enhance the living experience.",
    details: [
      { label: "Type", value: "Interior Design" },
      { label: "Location", value: "Kerala" },
      { label: "Style", value: "Modern" },
    ],
    photos: [
      { src: "/Interior/Interior2/interior7.jpeg", alt: "Main Living Area", fallbackBg: "linear-gradient(135deg,#1a1510,#2d2418,#1a1208)" },
      { src: "/Interior/Interior2/interior8.jpeg", alt: "Feature Wall", fallbackBg: "linear-gradient(150deg,#141110,#221a14,#100d08)" },
      { src: "/Interior/Interior2/interior9.jpeg", alt: "Lounge Space", fallbackBg: "linear-gradient(120deg,#120d0a,#1e1510,#0c0908)" },
      { src: "/Interior/Interior2/interior10.jpeg", alt: "Study Area", fallbackBg: "linear-gradient(145deg,#0e0c0a,#1a1410,#0a0806)" },
      { src: "/Interior/Interior2/interior11.jpeg", alt: "Master Suite", fallbackBg: "linear-gradient(130deg,#101010,#1c1818,#0c0c0c)" },
      { src: "/Interior/Interior2/interior12.jpeg", alt: "Accent Details", fallbackBg: "linear-gradient(155deg,#0a0e10,#141c20,#080c10)" },
    ],
    heroImage: "/Interior/Interior2/interior7.jpeg",
    heroGradient: "linear-gradient(160deg,#1a1208,#2a1e10,#140d04)",
    accentColor: "#b89060",
  },
];

const FILTERS = [
  { key: "all",         label: "Featured Projects",  count: ALL_PROJECTS.length },
  { key: "residential", label: "Residential",   count: ALL_PROJECTS.filter(p => p.type === "residential").length },
  { key: "commercial",  label: "Commercial",    count: ALL_PROJECTS.filter(p => p.type === "commercial").length },
  { key: "mixed",       label: "Mixed Use",     count: ALL_PROJECTS.filter(p => p.type === "mixed").length },
  { key: "interior",    label: "Interiors",     count: INTERIOR_PROJECTS.length },
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
   DETAIL PANEL - NEW FULL-SCREEN DESIGN
───────────────────────────────────────── */
function DetailPanel({ project, allFiltered, onClose, onNavigate }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    setPhotoIdx(0);
    setShowDetails(false);
    setShowHint(true);
    
    // Hide hint after 2 seconds
    const timer = setTimeout(() => {
      setShowHint(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [project.id]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, lightboxOpen]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const currentIdx = allFiltered.findIndex(p => p.id === project.id);
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < allFiltered.length - 1;
  const photos = project.photos;

  const nextPhoto = () => setPhotoIdx(i => (i + 1) % photos.length);
  const prevPhoto = () => setPhotoIdx(i => (i - 1 + photos.length) % photos.length);

  return (
    <>
      {/* Backdrop */}
      <div
        className={styles.backdrop}
        onClick={() => {
          if (showDetails) {
            setShowDetails(false);
          } else {
            onClose();
          }
        }}
      />

      {/* Full-screen modal */}
      <div className={styles.fullscreenModal} role="dialog" aria-modal="true">
        
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>

        {/* Main photo viewer with description overlay */}
        <div
          className={styles.photoViewer}
          style={{ background: photos[photoIdx].fallbackBg }}
          onClick={() => {
            if (showDetails) {
              setShowDetails(false);
            } else {
              setLightboxOpen(true);
            }
          }}
        >
          <img
            key={photos[photoIdx].src}
            src={photos[photoIdx].src}
            alt={photos[photoIdx].alt}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
            className={styles.viewerImage}
          />

          {/* Edge hover zones for photo navigation with gradient and arrow */}
          {photos.length > 1 && (
            <>
              <div
                className={`${styles.photoEdgeZone} ${styles.photoEdgeLeft}`}
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                aria-label="Previous photo"
              >
                <div className={styles.edgeGradient}>
                  <svg className={styles.edgeArrow} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </div>
              </div>
              <div
                className={`${styles.photoEdgeZone} ${styles.photoEdgeRight}`}
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                aria-label="Next photo"
              >
                <div className={styles.edgeGradient}>
                  <svg className={styles.edgeArrow} width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </>
          )}

          {/* Photo counter */}
          {photos.length > 1 && (
            <span className={styles.photoCounter}>
              {photoIdx + 1} / {photos.length}
            </span>
          )}

          {/* Click to expand hint */}
          {showHint && (
            <div className={styles.expandHint}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
              </svg>
              <span>Click to expand</span>
            </div>
          )}
        </div>

        {/* Toggle button for details panel */}
        <button
          className={`${styles.detailsToggle} ${showDetails ? styles.detailsToggleActive : ""}`}
          onClick={() => setShowDetails(!showDetails)}
          aria-label={showDetails ? "Hide details" : "Show details"}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>

        {/* Slide-in details panel */}
        <div className={`${styles.detailsPanel} ${showDetails ? styles.detailsPanelOpen : ""}`}>
          <div className={styles.detailsContent}>
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
          </div>
        </div>

        {/* Project navigation - fixed at bottom */}
        <div className={styles.projectNav}>
          <button
            className={`${styles.projectNavBtn} ${!hasPrev ? styles.projectNavDisabled : ""}`}
            onClick={() => hasPrev && onNavigate(allFiltered[currentIdx - 1])}
            disabled={!hasPrev}
            aria-label="Previous project"
          >
            <span>←</span>
            <span className={styles.projectNavLabel}>{hasPrev ? allFiltered[currentIdx - 1].name : "—"}</span>
          </button>
          <span className={styles.projectNavCount}>{currentIdx + 1} / {allFiltered.length}</span>
          <button
            className={`${styles.projectNavBtn} ${styles.projectNavBtnRight} ${!hasNext ? styles.projectNavDisabled : ""}`}
            onClick={() => hasNext && onNavigate(allFiltered[currentIdx + 1])}
            disabled={!hasNext}
            aria-label="Next project"
          >
            <span className={styles.projectNavLabel}>{hasNext ? allFiltered[currentIdx + 1].name : "—"}</span>
            <span>→</span>
          </button>
        </div>

      </div>

      {/* Full-screen lightbox for photos */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          
          {photos.length > 1 && (
            <>
              <button
                className={styles.lightboxPrev}
                onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                className={styles.lightboxNext}
                onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
                aria-label="Next photo"
              >
                ›
              </button>
            </>
          )}

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[photoIdx].src}
              alt={photos[photoIdx].alt}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxCaption}>
              {photos[photoIdx].alt} ({photoIdx + 1} / {photos.length})
            </div>
          </div>
        </div>
      )}
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
      onClick={() => onSelect(project)}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter") onSelect(project); }}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      {/* Background image or gradient */}
      <CardHero project={project} />

      {/* Top meta row */}
      <div className={styles.cardTop}>
        <span className={styles.cardType}>{project.badge || project.type}</span>
        <span className={styles.cardYear}>{project.year}</span>
      </div>

      {/* Hover overlay with description */}
      <div className={styles.cardOverlay}>
        <p className={styles.cardOverlayDesc}>{project.description}</p>
        <div className={styles.cardOverlayCta}>
          View Project <span className={styles.cardOverlayArrow}>→</span>
        </div>
      </div>

      {/* Bottom name block — always visible */}
      <div className={styles.cardBottom}>
        <div className={styles.cardLocation}>{project.location}</div>
        <h3 className={styles.cardName}>{project.name}</h3>
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
    : activeFilter === "interior"
    ? INTERIOR_PROJECTS
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
        <img src="/studio/workspace.jpeg" alt="Our studio" className={styles.pageHeroImg} />
        <div className={styles.pageHeroContent}>
          <p className={styles.heroEyebrow}>Our Work</p>
          <h1 className={styles.heroHeading}>
            A small peek into<br />
            <em>our creations</em>
          </h1>
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

      <Footer />

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

// Made with Bob
