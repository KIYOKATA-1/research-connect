import styles from "./Program.module.scss";

const days = [
  {
    date: "2026-10-15",
    label: "DAY 01 / SHARED QUESTIONS",
    title: "Thursday, October 15",
    sessions: [
      ["09:00", "Welcome & opening keynote", "Beyond disciplines: research for the public good", "Keynote · Main auditorium"],
      ["10:30", "Parallel research sessions", "Responsible AI · Climate resilience", "Talks · Rooms A–C"],
      ["12:00", "Lunch & poster exchange", "Meet emerging researchers and their ideas", "Networking · Atrium"],
      ["13:30", "Methods in the open", "Practical tools for reproducible research", "Workshop · Lab 2"],
      ["15:30", "Early-career research forum", "Finding collaborators across boundaries", "Panel · Main auditorium"],
    ],
  },
  {
    date: "2026-10-16",
    label: "DAY 02 / NEW POSSIBILITIES",
    title: "Friday, October 16",
    sessions: [
      ["09:00", "Morning keynote", "Who gets to shape the future of knowledge?", "Keynote · Main auditorium"],
      ["10:30", "Interdisciplinary research labs", "From a shared question to a joint proposal", "Workshop · Rooms A–C"],
      ["12:00", "Lunch & community tables", "Conversations by research interest", "Networking · Atrium"],
      ["13:30", "Open science, lasting impact", "From evidence to policy and practice", "Panel · Main auditorium"],
      ["15:30", "Closing conversation", "What will we build together next?", "Plenary · Main auditorium"],
    ],
  },
];

export default function Program() {
  return (
    <section className={styles.section} id="program" aria-labelledby="program-heading">
      <div className={styles.inner}>
        <p className={styles.label}>02 / THE PROGRAM</p>
        <h2 className={styles.title} id="program-heading">
          Two days.{" "}<span>New perspectives.</span>
        </h2>
        <p className={styles.description}>
          All times are Astana time (UTC+5). Keynotes and panels are streamed online.
        </p>
        <div className={styles.days}>
          {days.map((day) => (
            <div className={styles.day} key={day.date}>
              <div className={styles.dayHeading}>
                <p>{day.label}</p>
                <h3><time dateTime={day.date}>{day.title}</time></h3>
              </div>
              <ol className={styles.sessions}>
                {day.sessions.map(([time, title, description, format]) => (
                  <li key={time}>
                    <time className={styles.time} dateTime={`${day.date}T${time}:00+05:00`}>{time}</time>
                    <div>
                      <p className={styles.sessionTitle}>{title}</p>
                      <p className={styles.sessionDescription}>{description}</p>
                      <p className={styles.format}>{format}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className={styles.note}>
          A full program and online joining details will be emailed to registered participants.
        </p>
      </div>
    </section>
  );
}
