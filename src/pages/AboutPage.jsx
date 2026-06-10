import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./AboutPage.module.css";
import { useEffect } from "react";

export default function AboutPage() {

  useEffect(() => {
  const sections = document.querySelectorAll(`.${styles.section}`);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(styles.show);
      }
    });
  });

  sections.forEach(sec => observer.observe(sec));
}, []);

  return (
    <div className={styles.page}>
      <Header />

      {/* SECTION 1 */}
      <section className={styles.section}>
        <div className={styles.leftWrapper}>
          
          <div className={styles.ball}></div>

          <div className={styles.left}>
            <h2>Our Design Philosophy</h2>
            <p>
              Our design philosophy embraces the essence of tropical living—
              celebrating light, ventilation, and connection with nature.
              We believe in crafting spaces that are raw and honest in material
              expression, minimalist in form, and sustainable in function.
              Each design harmonizes with its surroundings using local
              materials and passive strategies to create timeless architecture.
            </p>
          </div>

        </div>

        <div className={styles.right}>
          <img src="/about1.jpg" alt="Design Philosophy" />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={`${styles.section} ${styles.reverse}`}>

  <div className={styles.leftWrapper}>
    
    <div className={styles.ball}></div>

    <div className={styles.left}>
      <h2>Sustainable Architecture</h2>
      <p>
        We integrate sustainability into every stage of design,
        focusing on energy efficiency, climate-responsive planning,
        eco-friendly materials, and long-lasting solutions.
        Each project reflects our commitment to responsible architecture.
      </p>
    </div>

  </div>

  <div className={styles.right}>
    <img src="/about2.jpg" alt="Sustainable Architecture" />
  </div>

</section>

      {/* SECTION 3 */}
      <section className={styles.section}>

  <div className={styles.leftWrapper}>
    
    <div className={styles.ball}></div>

    <div className={styles.left}>
      <h2>Our Team of Experts</h2>
      <p>
        Our leadership is headed by architects from premier institutions,
        supported by experienced project managers and skilled professionals.
        Together we bring technical expertise, industry experience, and
        innovative thinking to deliver excellence across projects.
      </p>
    </div>

  </div>

  <div className={styles.right}>
    <img src="/about3.jpg" alt="Our Team" />
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


