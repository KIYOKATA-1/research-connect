import RegistrationForm from "./RegistrationForm";
import styles from "./Registration.module.scss";

export default function Registration() {
  return (
    <section className={styles.section} id="registration" aria-labelledby="registration-heading">
      <div className={styles.inner}>
        <div>
          <p className={styles.label}>05 / REGISTRATION</p>
          <h2 className={styles.title} id="registration-heading">Find your place in <span className={styles.titleLast}>the conversation.</span></h2>
          <p className={styles.introduction}>Bring your questions, your perspective, and your next big idea. Register for two days of learning and connection.</p>
          <div className={styles.invitation}>
            <h3>Open to every discipline</h3>
            <p>For students, researchers, and faculty. Choose to attend on campus or online.</p>
          </div>
          <address className={styles.contact}>Questions?<br /><a href="mailto:hello@researchconnect.org">hello@researchconnect.org</a></address>
        </div>
        <RegistrationForm />
      </div>
    </section>
  );
}
