"use client";

import { useRef, useState, type FormEvent } from "react";
import styles from "./Registration.module.scss";

type Details = {
  fullName: string;
  email: string;
  institution: string;
  attendance: string;
  interests: string[];
  requests: string;
  privacy: boolean;
};

type Errors = Partial<Record<keyof Details, string>>;

const emptyDetails: Details = {
  fullName: "", email: "", institution: "", attendance: "",
  interests: [], requests: "", privacy: false,
};

const sampleDetails: Details = {
  fullName: "Alex Morgan", email: "alex.morgan@example.com",
  institution: "Independent", attendance: "in-person", interests: [],
  requests: "Step-free access, please.", privacy: true,
};

export default function RegistrationForm() {
  const [details, setDetails] = useState<Details>(emptyDetails);
  const [errors, setErrors] = useState<Errors>({});
  const [draft, setDraft] = useState<"available" | "restored" | null>("available");
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const confirmationRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  function update<K extends keyof Details>(key: K, value: Details[K]) {
    setDetails((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDraft(null);
    const nextErrors: Errors = {};
    if (!details.fullName.trim()) nextErrors.fullName = "Enter your full name.";
    const emailInput = event.currentTarget.elements.namedItem("email") as HTMLInputElement;
    if (!details.email.trim() || emailInput.validity.typeMismatch) nextErrors.email = "Enter a valid email address.";
    if (!details.institution.trim()) nextErrors.institution = "Enter your institution.";
    if (!details.attendance) nextErrors.attendance = "Choose an attendance type.";
    if (!details.privacy) nextErrors.privacy = "Agree to the privacy policy to register.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setSubmitted(true);
    requestAnimationFrame(() => confirmationRef.current?.focus());
  }

  if (submitted) {
    return (
      <div className={styles.formColumn}>
        <div className={styles.confirmation} ref={confirmationRef} tabIndex={-1} role="status">
          <p className={styles.confirmationLabel}>✓ SAMPLE REGISTRATION CONFIRMED</p>
          <h3>You’re registered!</h3>
          <p>Thank you for joining ResearchConnect 2026, {details.fullName.trim().split(/\s+/)[0]}.</p>
          <p className={styles.confirmationDate}>October 15–16, 2026 · Astana + Online</p>
          <p className={styles.helper}>This is a demonstration confirmation. No registration or email has been sent.</p>
          <a className={styles.submit} href="#home">Back to conference <span aria-hidden="true">↗</span></a>
          <button className={styles.textButton} type="button" onClick={() => setSubmitted(false)}>View registration details <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    );
  }

  const errorEntries = Object.entries(errors).filter(([, message]) => message);

  return (
    <div className={styles.formColumn}>
      {draft && (
        <div className={styles.draft}>
          <h3>{draft === "available" ? "Restore saved draft?" : "Draft restored"}</h3>
          <p>{draft === "available" ? "Preview a sample registration, or start with a blank form." : "Your sample details are ready. Review them before submitting."}</p>
          <div className={styles.draftActions}>
            <button type="button" onClick={() => {
              if (draft === "available") { setDetails(sampleDetails); setErrors({}); setDraft("restored"); }
              else nameRef.current?.focus();
            }}>{draft === "available" ? "Restore" : "Review details"} <span aria-hidden="true">↗</span></button>
            <button type="button" onClick={() => { setDraft(null); setDetails(emptyDetails); setErrors({}); requestAnimationFrame(() => nameRef.current?.focus()); }}>Discard <span aria-hidden="true">↗</span></button>
          </div>
          <p className={styles.helper}>Sample draft · No registration is sent</p>
        </div>
      )}
      <div className={styles.errorSummary} ref={summaryRef} hidden={!errorEntries.length} tabIndex={-1} role="alert">
        <h3>Please check your details</h3>
        <p>Your registration has not been submitted. Your other answers are saved on this page.</p>
        <ol>{errorEntries.map(([key, message]) => <li key={key}><a href={`#registration-${key}`}>{message}</a></li>)}</ol>
      </div>
      <form noValidate onSubmit={submit}>
        <h3 className={styles.formTitle}>Your details</h3>
        <p className={styles.requiredNote}>Fields marked * are required.</p>

        <div className={styles.field}>
          <label htmlFor="registration-fullName">Full name *</label>
          <input ref={nameRef} id="registration-fullName" name="fullName" autoComplete="name" required value={details.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="e.g. Amina Sadykova" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "name-error" : "name-help"} />
          <p id={errors.fullName ? "name-error" : "name-help"} className={errors.fullName ? styles.error : styles.helper}>{errors.fullName || "As you want it on your conference badge."}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="registration-email">Email address *</label>
          <input id="registration-email" type="email" name="email" autoComplete="email" required value={details.email} onChange={(e) => update("email", e.target.value)} placeholder="you@university.edu" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : "email-help"} />
          <p id={errors.email ? "email-error" : "email-help"} className={errors.email ? styles.error : styles.helper}>{errors.email || "We will send your confirmation and joining details here."}</p>
        </div>
        <div className={styles.field}>
          <label htmlFor="registration-institution">Institution *</label>
          <input id="registration-institution" name="institution" autoComplete="organization" required value={details.institution} onChange={(e) => update("institution", e.target.value)} placeholder="University or organization" aria-invalid={!!errors.institution} aria-describedby={errors.institution ? "institution-error" : "institution-help"} />
          <p id={errors.institution ? "institution-error" : "institution-help"} className={errors.institution ? styles.error : styles.helper}>{errors.institution || 'Independent researchers can enter “Independent”.'}</p>
        </div>
        <fieldset className={styles.choices} aria-describedby={errors.attendance ? "attendance-help attendance-error" : "attendance-help"}>
          <legend>Attendance type *</legend>
          <p className={styles.helper} id="attendance-help">Choose one option.</p>
          <label><input id="registration-attendance" type="radio" name="attendance" value="in-person" required checked={details.attendance === "in-person"} onChange={() => update("attendance", "in-person")} />In person · Astana</label>
          <label><input type="radio" name="attendance" value="online" checked={details.attendance === "online"} onChange={() => update("attendance", "online")} />Online</label>
          {errors.attendance && <p className={styles.error} id="attendance-error">{errors.attendance}</p>}
        </fieldset>
        <fieldset className={styles.choices}>
          <legend>Research interests</legend>
          <p className={styles.helper}>Optional. Choose any that apply.</p>
          {["Responsible AI", "Sustainable futures", "Open knowledge"].map((interest) => (
            <label key={interest}><input type="checkbox" name="interests" value={interest} checked={details.interests.includes(interest)} onChange={(e) => update("interests", e.target.checked ? [...details.interests, interest] : details.interests.filter((item) => item !== interest))} />{interest}</label>
          ))}
        </fieldset>
        <div className={styles.field}>
          <label htmlFor="registration-requests">Accessibility requests (optional)</label>
          <textarea id="registration-requests" name="requests" value={details.requests} onChange={(e) => update("requests", e.target.value)} placeholder="Tell us how we can support your participation." aria-describedby="requests-help" rows={4} />
          <p className={styles.helper} id="requests-help">Share only what you are comfortable sharing. Our team will contact you privately.</p>
        </div>
        <label className={styles.agreement}>
          <input id="registration-privacy" name="privacy" type="checkbox" required checked={details.privacy} onChange={(e) => update("privacy", e.target.checked)} aria-invalid={!!errors.privacy} aria-describedby={errors.privacy ? "privacy-error" : undefined} />
          <span>I agree to the <a href="#privacy-policy">privacy policy</a> and to receive essential conference updates. *</span>
        </label>
        {errors.privacy && <p className={styles.error} id="privacy-error">{errors.privacy}</p>}
        <button className={styles.submit} type="submit">Submit registration <span aria-hidden="true">↗</span></button>
        <p className={styles.helper}>Prototype: fields show focus. Restore loads sample details.<br />No registration is sent.</p>
      </form>
    </div>
  );
}
