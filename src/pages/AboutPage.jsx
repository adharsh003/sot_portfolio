import Header from "../components/Header";
import styles from "./AboutPage.module.css";

export default function AboutPage() {

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

    </div>
  );
}