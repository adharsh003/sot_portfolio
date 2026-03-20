import Header from "../components/Header";
import styles from "./ContactPage.module.css";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const bgRef = useRef(null);
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    const bg = bgRef.current;
    if (!bg) return;
    const onScroll = () => {
      bg.style.transform = `translateY(${window.scrollY * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className={styles.page}>
      <Header />

      {/* ── HERO ── */}
      <div className={styles.heroSection}>
        <div className={styles.heroBg} ref={bgRef} />
        <div className={styles.heroInner}>
          <p className={styles.heroEyebrow}>Get in touch</p>
          <h1 className={styles.heroHeading}>
            Why Choose<br />
            <em className={styles.heroAccent}>Sketch on Thoughts?</em>
          </h1>
          <p className={styles.heroSubtext}>
            Choosing SoT means working with a firm that values creativity,
            sustainability, and client satisfaction. We are dedicated to delivering
            architectural solutions that not only meet today's demands but are
            also adaptable for future needs. Let us build your next vision.
          </p>
        </div>
      </div>

      {/* ── CONTACT CARDS ── */}
      <div className={styles.cardsSection}>
        <p className={styles.cardsSectionLabel}>Reach us through</p>
        <div className={styles.cardsGrid}>

          <div
            className={styles.card}
            onClick={() => window.open("https://www.sketchonthoughts.com", "_blank")}
          >
            <div className={styles.cardIconWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <p className={styles.cardLabel}>Website</p>
            <p className={styles.cardValue}>www.sketchonthoughts.com</p>
            <span className={styles.cardAction}>↗ Visit</span>
          </div>

          <div
            className={styles.card}
            onClick={() => handleCopy("architects.sot@gmail.com", "email")}
          >
            <div className={styles.cardIconWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
            </div>
            <p className={styles.cardLabel}>Email</p>
            <p className={styles.cardValue}>architects.sot@gmail.com</p>
            <span className={styles.cardAction}>
              {copied === "email" ? "✓ Copied!" : "Copy"}
            </span>
          </div>

          <div
            className={styles.card}
            onClick={() => handleCopy("+91 77 3 666 0851", "phone")}
          >
            <div className={styles.cardIconWrap}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <p className={styles.cardLabel}>Phone</p>
            <p className={styles.cardValue}>+91 77 3 666 0851</p>
            <span className={styles.cardAction}>
              {copied === "phone" ? "✓ Copied!" : "Copy"}
            </span>
          </div>

        </div>
      </div>

      {/* ── CLOSING STRIP ── */}
      <div className={styles.closingStrip}>
        <div className={styles.closingLeft}>
          <span className={styles.closingBrand}>Sketch on Thoughts</span>
          <span className={styles.closingTagline}>Architecture that breathes, adapts, and inspires.</span>
        </div>
        <div className={styles.closingRight}>
          <a href="mailto:architects.sot@gmail.com" className={styles.closingLink}>
            architects.sot@gmail.com
          </a>
          <a
            href="https://www.sketchonthoughts.com"
            className={styles.closingLink}
            target="_blank"
            rel="noreferrer"
          >
            www.sketchonthoughts.com
          </a>
        </div>
      </div>
    </div>
  );
}