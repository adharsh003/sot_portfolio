import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Sketch<span>on</span>Thoughts
      </div>

      <nav className={styles.nav}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              isActive
                ? `${styles.link} ${styles.linkActive}`
                : styles.link
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}