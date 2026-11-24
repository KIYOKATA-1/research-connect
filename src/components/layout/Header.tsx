import Link from "next/link";
import { conferenceFont } from "@/styles/conference-font";
import MobileMenu from "./MobileMenu";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header} ${conferenceFont.variable}`}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/">
          ResearchConnect<span className={styles.logoSeparator}> / </span>
          <span className={styles.logoYear}>2026</span>
        </Link>
        <nav className={styles.navigation} aria-label="Main navigation">
          <ul className={styles.links}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#program">Program</a>
            </li>
            <li>
              <a href="#speakers">Speakers</a>
            </li>
            <li>
              <a href="#venue">Venue</a>
            </li>
          </ul>
        </nav>
        <a className={styles.register} href="#registration">
          Register <span aria-hidden="true">↗</span>
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
