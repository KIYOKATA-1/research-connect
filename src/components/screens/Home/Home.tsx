import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Program from "./sections/Program";
import Registration from "./sections/Registration";
import Speakers from "./sections/Speakers";
import Venue from "./sections/Venue";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className={styles.main} tabIndex={-1}>
        <Hero />
        <About />
        <Program />
        <Speakers />
        <Venue />
        <Registration />
      </main>
      <Footer />
    </>
  );
}
