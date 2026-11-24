import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-heading">
      <div className={styles.inner}>
        <p className={styles.label}>01 / ABOUT THE CONFERENCE</p>
        <h2 className={styles.title} id="about-heading">
          Good research <span className={styles.starts}>starts</span>{" "}
          <span className={styles.conversation}>
            with a <span className={styles.lastWord}>conversation.</span>
          </span>
        </h2>
        <div className={styles.introduction}>
          <p>
            ResearchConnect brings the university community together across
            disciplines. Share work in progress, discover a new perspective, and
            meet the people who can help move your next idea forward.
          </p>
          <p className={styles.motto}>ACROSS DISCIPLINES.<br />BEYOND BORDERS.</p>
        </div>
        <ul className={styles.themes}>
          {[
            ["Responsible AI", "Build intelligent systems that put people, ethics, and public trust first."],
            ["Sustainable futures", "Connect evidence and action for resilient communities and a changing planet."],
            ["Open knowledge", "Make research more collaborative, reproducible, and accessible to everyone."],
          ].map(([title, description], index) => (
            <li key={title}>
              <span className={styles.number} aria-hidden="true">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
