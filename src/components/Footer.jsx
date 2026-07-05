import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Animated decorative elements */}
      <div className={styles.decorCircle} aria-hidden="true" />
      <div className={styles.decorLine} aria-hidden="true" />
      
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <h3 className={styles.brandName}>Sketch on Thoughts</h3>
            <p className={styles.brandTagline}>Architecture & Design Studio</p>
            <p className={styles.brandDescription}>
              Creating spaces that blend structure, nature, and human experience.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Navigate</h4>
              <Link to="/" className={styles.footerLink}>Home</Link>
              <Link to="/about" className={styles.footerLink}>About</Link>
              <Link to="/projects" className={styles.footerLink}>Projects</Link>
              <Link to="/contact" className={styles.footerLink}>Contact</Link>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Connect</h4>
              <a href="mailto:architects.sot@gmail.com" className={styles.footerLink}>
                architects.sot@gmail.com
              </a>
              <a href="tel:+917736660851" className={styles.footerLink}>
                +91 77 3 666 0851
              </a>
              <a
                href="https://wa.me/918891910853"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                WhatsApp
              </a>
              <a
                href="https://www.sketchonthoughts.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                sketchonthoughts.com
              </a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Social</h4>
              <a
                href="https://www.facebook.com/SoTdesigns/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sot_designs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/sot-designs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                LinkedIn
              </a>
            </div>

            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Location</h4>
              <p className={styles.footerText}>
                Tirur, Kerala<br />
                India
              </p>
              <a
                href="https://maps.app.goo.gl/8DTP4W92p67tkcpu8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                style={{ marginTop: '0.5rem' }}
              >
                View on Map
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            <span className={styles.metaText}>Designed with passion</span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaText}>Built for excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Made with Bob
