import Header from '../components/Header';
import styles from './HomePage.module.css';
import { useNavigate } from "react-router-dom";


export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.hero}></div>

      <Header />

      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>Architecture.</h1>

          <p className={styles.subtitle}>
            Designing spaces that blend structure, nature and human experience.
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
    </div>
  );
}