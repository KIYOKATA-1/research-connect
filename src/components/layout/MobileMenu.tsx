"use client";

import Link from "next/link";
import { useId, useRef, useState, type MouseEvent } from "react";
import styles from "./Header.module.scss";

export default function MobileMenu() {
  const dialogId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu(event: MouseEvent<HTMLButtonElement>) {
    event.currentTarget.focus({ preventScroll: true });
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <div className={styles.mobileMenu}>
      <button
        className={styles.menuToggle}
        type="button"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        onClick={openMenu}
      >
        Menu <span aria-hidden="true">+</span>
      </button>
      <dialog
        ref={dialogRef}
        id={dialogId}
        className={styles.dialog}
        aria-label="Conference menu"
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.menuHeader}>
          <Link className={styles.logo} href="/" onClick={closeMenu}>
            ResearchConnect<br />2026
          </Link>
          <button
            className={styles.menuClose}
            type="button"
            onClick={closeMenu}
          >
            Close <span aria-hidden="true">×</span>
          </button>
        </div>
        <p className={styles.menuLabel}>EXPLORE THE CONFERENCE</p>
        <nav aria-label="Mobile navigation">
          <ul className={styles.menuLinks}>
            {[
              ["about", "About"],
              ["program", "Program"],
              ["speakers", "Speakers"],
              ["venue", "Venue"],
            ].map(([id, label], index) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu}>
                  <span className={styles.menuNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.menuLinkText}>{label}</span>
                  <span className={styles.menuArrow} aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          className={styles.menuRegister}
          href="#registration"
          onClick={closeMenu}
        >
          Register now <span aria-hidden="true">↗</span>
        </a>
        <p className={styles.menuDetails}>October 15–16 / Astana + Online</p>
      </dialog>
    </div>
  );
}
