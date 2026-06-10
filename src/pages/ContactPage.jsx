import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./ContactPage.module.css";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const bgRef = useRef(null);
  const [copied, setCopied] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const onScroll = () => {
      bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2200);
    });
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg} ref={bgRef}>
          <img
            src="/about2.jpg"
            alt="Studio workspace"
            className={styles.heroBgImage}
          />
        </div>

        {/* Architectural grid lines decoration */}
        <div className={styles.heroGrid} aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <p className={styles.heroEyebrow}>
              <span className={styles.eyebrowLine} />
              Get in touch
            </p>
            <h1 className={styles.heroHeading}>
              Why Choose<br />
              <em className={styles.heroAccent}>Sketch on<br />Thoughts?</em>
            </h1>
          </div>

          <div className={styles.heroRight}>
            <p className={styles.heroSubtext}>
              Choosing SoT means working with a firm that values creativity,
              sustainability, and client satisfaction. We deliver architectural
              solutions that not only meet today's demands but are also
              adaptable for future needs.
            </p>
            <div className={styles.heroMeta}>
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaNum}>08+</span>
                <span className={styles.heroMetaLabel}>Projects completed</span>
              </div>
              <div className={styles.heroMetaDivider} />
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaNum}>3</span>
                <span className={styles.heroMetaLabel}>Typologies</span>
              </div>
              <div className={styles.heroMetaDivider} />
              <div className={styles.heroMetaItem}>
                <span className={styles.heroMetaNum}>Kerala</span>
                <span className={styles.heroMetaLabel}>Region</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollLine} />
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className={styles.contactSection}>
        <div className={styles.contactHeader}>
          <p className={styles.contactEyebrow}>Reach us through</p>
          <h2 className={styles.contactHeading}>Let's start a conversation.</h2>
        </div>

        <div className={styles.cardsGrid}>

          {/* Website */}
          <div
            className={`${styles.card} ${hoveredCard === "web" ? styles.cardHovered : ""}`}
            onClick={() => window.open("https://www.sketchonthoughts.com", "_blank")}
            onMouseEnter={() => setHoveredCard("web")}
            onMouseLeave={() => setHoveredCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardNumber}>01</div>
            <div className={styles.cardContent}>
              <div className={styles.cardIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <p className={styles.cardLabel}>Website</p>
              <p className={styles.cardValue}>www.sketchonthoughts.com</p>
            </div>
            <div className={styles.cardAction}>
              <span>↗ Visit</span>
            </div>
            <div className={styles.cardLine} />
          </div>

          {/* Email */}
          <div
            className={`${styles.card} ${hoveredCard === "email" ? styles.cardHovered : ""}`}
            onClick={() => handleCopy("architects.sot@gmail.com", "email")}
            onMouseEnter={() => setHoveredCard("email")}
            onMouseLeave={() => setHoveredCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardNumber}>02</div>
            <div className={styles.cardContent}>
              <div className={styles.cardIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
              </div>
              <p className={styles.cardLabel}>Email</p>
              <p className={styles.cardValue}>architects.sot@gmail.com</p>
            </div>
            <div className={styles.cardAction}>
              <span className={copied === "email" ? styles.copiedText : ""}>
                {copied === "email" ? "✓ Copied" : "Copy"}
              </span>
            </div>
            <div className={styles.cardLine} />
          </div>

          {/* Phone */}
          <div
            className={`${styles.card} ${hoveredCard === "phone" ? styles.cardHovered : ""}`}
            onClick={() => handleCopy("+91 77 3 666 0851", "phone")}
            onMouseEnter={() => setHoveredCard("phone")}
            onMouseLeave={() => setHoveredCard(null)}
            role="button"
            tabIndex={0}
          >
            <div className={styles.cardNumber}>03</div>
            <div className={styles.cardContent}>
              <div className={styles.cardIconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <p className={styles.cardLabel}>Phone</p>
              <p className={styles.cardValue}>+91 77 3 666 0851</p>
            </div>
            <div className={styles.cardAction}>
              <span className={copied === "phone" ? styles.copiedText : ""}>
                {copied === "phone" ? "✓ Copied" : "Copy"}
              </span>
            </div>
            <div className={styles.cardLine} />
          </div>

        </div>
      </section>

      {/* ── OFFICE INFO SECTION ── */}
      <section className={styles.officeSection}>
        <div className={styles.officeContainer}>
          <div className={styles.officeLeft}>
            <p className={styles.officeEyebrow}>Visit our studio</p>
            <h2 className={styles.officeHeading}>
              Where ideas<br />
              <em>take shape</em>
            </h2>
          </div>

          <div className={styles.officeRight}>
            <div className={styles.officeInfoGrid}>
              <div className={styles.officeInfoItem}>
                <div className={styles.officeIconWrap}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.officeInfoContent}>
                  <span className={styles.officeInfoLabel}>Office Location</span>
                  <span className={styles.officeInfoValue}>
                    Tirur, Malappuram<br />Kerala, India
                  </span>
                  <a
                    href="https://maps.app.goo.gl/8DTP4W92p67tkcpu8?g_st=ic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLink}
                  >
                    View on Map →
                  </a>
                </div>
              </div>

              <div className={styles.officeInfoItem}>
                <div className={styles.officeIconWrap}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className={styles.officeInfoContent}>
                  <span className={styles.officeInfoLabel}>Working Hours</span>
                  <span className={styles.officeInfoValue}>Monday - Saturday<br />8:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── MANIFESTO STRIP ── */}
      <section className={styles.manifestoSection}>
        <div className={styles.manifestoInner}>
          <p className={styles.manifestoQuote}>
            "Architecture that breathes,<br />
            <em>adapts, and inspires.</em>"
          </p>
          <div className={styles.manifestoDivider} />
          <p className={styles.manifestoSub}>
            Sketch on Thoughts — Tirur, Malappuram, Kerala
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}