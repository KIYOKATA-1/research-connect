import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.wordmark}>Research<span>Connect</span></p>
        <div className={styles.details}>
          <p className={styles.tagline}>2026 / Ideas without boundaries.<br />October 15–16 · Astana + Online</p>
          <address>Get in touch<br /><a href="mailto:hello@researchconnect.org">hello@researchconnect.org</a></address>
        </div>
        <div className={styles.bottom}>
          <nav aria-label="Footer navigation">
            <ul className={styles.links}>
              <li><a href="#about">About</a></li>
              <li><a href="#program">Program</a></li>
              <li><a href="#speakers">Speakers</a></li>
            </ul>
            <ul className={styles.links}>
              <li><a href="#venue">Venue</a></li>
              <li><a href="#registration">Register</a></li>
              <li>
                <details className={styles.privacy} id="privacy-policy">
                  <summary>Privacy policy</summary>
                  <p>This demonstration form does not send or store your information on a server. Sample details remain in the current page only and are cleared when you reload.</p>
                </details>
              </li>
            </ul>
          </nav>
          <p className={styles.copyright}>© 2026 ResearchConnect.<br />A community for shared discovery.</p>
        </div>
        <p className={styles.demo}>Illustrative event and speaker profiles.</p>
      </div>
    </footer>
  );
}
