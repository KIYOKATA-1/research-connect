import styles from "./Speakers.module.scss";

export default function Speakers() {
  return (
    <section
      className={styles.section}
      id="speakers"
      aria-labelledby="speakers-heading"
    >
      <div className={styles.inner}>
        <p className={styles.label}>03 / PEOPLE &amp; PERSPECTIVES</p>
        <h2 className={styles.title} id="speakers-heading">
          Meet the minds <span>moving us forward.</span>
        </h2>
        <p className={styles.description}>
          Four perspectives. One belief in the power of sharing knowledge.
        </p>
        <ul className={styles.speakers}>
          {[
            ["speaker-01", "Full Name", "Position", "University"],
            ["speaker-02", "Full Name", "Position", "University"],
            ["speaker-03", "Full Name", "Position", "University"],
            ["speaker-04", "Full Name", "Position", "University"],
          ].map(([id, name, role, organization], index) => (
            <li key={id}>
              <article>
                <div className={styles.portrait} aria-hidden="true" />
                <p className={styles.caption}>0{index + 1} / SPEAKER</p>
                <h3>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.organization}>{organization}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
