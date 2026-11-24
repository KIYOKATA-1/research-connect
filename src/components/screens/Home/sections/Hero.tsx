import { conferenceFont } from "@/styles/conference-font";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} ${conferenceFont.variable}`}
      id="home"
      aria-labelledby="home-heading"
    >
      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <p>A MEETING OF MINDS</p>
          <p>51.090° N / 71.398° E</p>
        </div>
        <h1 className={styles.title} id="home-heading">
          Ideas without <span>boundaries</span>
        </h1>
        <ul className={styles.eventDetails}>
          <li className={styles.date}>
            <time dateTime="2026-10-15">October 15</time>
            –<time dateTime="2026-10-16">16, 2026</time>
          </li>
          <li>
            Astana<span className={styles.country}>, Kazakhstan</span> + Online
          </li>
        </ul>
        <div className={styles.content}>
          <div className={styles.introduction}>
            <p className={styles.description}>
              A shared space for students, researchers, and faculty to turn bold
              questions into meaningful connections.
            </p>
            <ul className={styles.actions}>
              <li>
                <a className={styles.register} href="#registration">
                  Register now <span aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a className={styles.program} href="#program">
                  View program <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
            <p className={styles.tagline}>Across disciplines. Beyond borders.</p>
          </div>
          <div className={styles.yearGraphic} aria-hidden="true">
            <span className={styles.year}>2026</span>
            <div className={styles.graphicCaption}>
              <span>RESEARCH / CONNECT</span>
              <span>15 — 16 / OCT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
