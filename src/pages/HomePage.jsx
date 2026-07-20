import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './HomePage.module.css';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <Helmet>
        <link rel="canonical" href="https://www.sketchonthoughts.com/" />
        <title>Sketch on Thoughts (SOT Designs) | Architecture Firm — Kerala &amp; India</title>
      </Helmet>
      <div className={styles.hero}></div>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Sketch on Thoughts.</h1>
          <p className={styles.tagline}>Est. 2019</p>

          <p className={styles.subtitle}>
            ART · ARCHITECTURE · LANDSCAPE · INTERIOR DESIGN
          </p>

          <div className={styles.ctaWrapper}>
            <button
              className={styles.primaryBtn}
              onClick={() => navigate("/projects")}
            >
              View Projects
            </button>
            <button
              className={styles.secondaryBtn}
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </main>

      {/* FIRM DESCRIPTION SECTION */}
      <section className={styles.firmDescription}>
        <div className={styles.firmDescriptionContent}>
          <p className={styles.firmDescriptionText}>
            Sketch On Thoughts Architects is an Indian Architectural firm, led by CET (College of Engineering, Trivandrum) graduate Ar. Mohammed Ali, that hinges on simplicity and connection with the natural environment. The firm work has been recognized for contextual sensitivity, traditional connectivity and a minimalism reflective of the ethos of Kerala. The half-decade old practice remains personalized. The design and working process is always deeply connected to site.
          </p>
          <p className={styles.firmDescriptionText}>
            The firm has worked on a varied range of projects across Kerala, the firm with its personalized approach, imbues each project with a sense of connectedness to the context, region, climate and landscape using locally available materials and technology to provide a rich spatial experience.
          </p>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className={styles.reviewsSection}>
        <div className={styles.reviewsHeader}>
          <p className={styles.reviewsEyebrow}>What our clients say</p>
          <h2 className={styles.reviewsHeading}>Client Reviews</h2>
        </div>
        
        <div className={styles.reviewsGrid}>
          {/* Review Card - Vignesh Vinod */}
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewAuthorInfo}>
                <p className={styles.reviewAuthorName}>Vignesh Vinod</p>
                <p className={styles.reviewTime}>2 months ago</p>
              </div>
              <div className={styles.reviewStars}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
            <p className={styles.reviewText}>
              Right place if you want to make your home a heaven. Best arcs, designers available. Out of the world ideas and great coordination.
            </p>
          </div>
        </div>

        <div className={styles.reviewsActions}>
          <a
            href="https://www.google.com/search?sca_esv=d11ba7484cdf09fb&sxsrf=ANbL-n4k40RsVVXMqwj_aRGosK-qh57evQ:1781085206875&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYCLBiCsyX9slqjzkw7ag3FBCfW9oyhD6uCpbGCHtLPGpBOUwMGCJBpPTqQUhC0F_KcBIuyMzw0Mj8wZ2makHN-n4Ep6QUx2JasUx0BLUCXVEmCUWORDztsy6Lqy9KPrNJXnsRA%3D&q=SoT+Designs+%7C+Sketch+on+Thoughts+Reviews&sa=X&ved=2ahUKEwjB8se4s_yUAxUs2DgGHebyPEUQ0bkNegQINRAF&biw=1600&bih=732&dpr=1.2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAllReviewsBtn}
          >
            View All Reviews on Google →
          </a>
        </div>
      </section>

      {/* NEWS/MEDIA SECTION */}
      <section className={styles.newsSection}>
        <div className={styles.newsHeader}>
          <p className={styles.newsEyebrow}>In the media</p>
          <h2 className={styles.newsHeading}>Featured Work</h2>
        </div>

        <div className={styles.newsContent}>
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/AjRWk0Uuza4"
              title="SoT Designs Featured Project"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            />
          </div>
          <div className={styles.newsDetails}>
            <h3 className={styles.newsTitle}>Our Project Feature</h3>
            <p className={styles.newsDesc}>
              Watch our featured project showcasing innovative design solutions and sustainable architecture practices.
            </p>
            <a
              href="https://www.youtube.com/watch?v=AjRWk0Uuza4"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.newsLink}
            >
              Watch on YouTube →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}