import styles from "./Venue.module.scss";

export default function Venue() {
  return (
    <section className={styles.section} id="venue" aria-labelledby="venue-heading">
      <div className={styles.inner}>
        <p className={styles.label}>04 / THE VENUE</p>
        <h2 className={styles.title} id="venue-heading">In Astana.{" "}<span>Open to everywhere.</span></h2>
        <div className={styles.content}>
          <div>
            <h3>Nazarbayev University</h3>
            <p className={styles.address} id="venue-address">53 Kabanbay Batyr Avenue<br />Astana, Kazakhstan</p>
            <p className={styles.description}>Meet on campus or join the live online program. Step-free access, accessible restrooms, and quiet spaces are available.</p>
            <p className={styles.note}>Arrival details and online access are included in your confirmation email.</p>
            <a className={styles.link} href="#venue-address">Plan your visit <span aria-hidden="true">↗</span></a>
          </div>
          <figure className={styles.map}>
            <svg className={styles.mapDesktop} viewBox="0 0 624 410" fill="none" aria-hidden="true" focusable="false">
              <path fill="#0A1430" d="M0 0h624v410H0z" />
              <g stroke="#4D566B" strokeWidth="1">
                {[36, 136, 236, 336, 436, 536, 612].map((x) => <path key={x} d={`M${x} 0v410`} />)}
                {[36, 120, 204, 288, 372].map((y) => <path key={y} d={`M0 ${y}h624`} />)}
              </g>
              <path fill="#F7F4ED" d="M260 70h10v340h-10zM0 240h624v12H0z" />
              <path fill="#0297DE" d="M300 114h245v100H300z" />
              <path fill="#FC734D" d="M260 190h24v24h-24z" />
              <g fill="#F7F4ED" fontFamily="inherit">
                <text x="576" y="36" fontSize="14" fontWeight="700">N ↑</text>
                <text x="300" y="232" fontSize="10">KABANBAY BATYR AVENUE</text>
                <text x="24" y="294" fontSize="14" fontWeight="700">Nazarbayev University</text>
                <text x="24" y="386" fontSize="10">SCHEMATIC · NOT TO SCALE</text>
              </g>
              <text x="320" y="170" fill="#0A1430" fontSize="40" fontFamily="inherit" fontWeight="700">53</text>
            </svg>
            <svg className={styles.mapMobile} viewBox="0 0 400 410" fill="none" aria-hidden="true" focusable="false">
              <path fill="#0A1430" d="M0 0h400v410H0z" />
              <g stroke="#4D566B" strokeWidth="1">
                {[40, 156, 272, 388].map((x) => <path key={x} d={`M${x} 0v410`} />)}
                {[36, 136, 236, 296, 396].map((y) => <path key={y} d={`M0 ${y}h400`} />)}
              </g>
              <path fill="#F7F4ED" d="M116 74h10v336h-10zM0 276h400v12H0z" />
              <path fill="#0297DE" d="M142 126h220v116H142z" />
              <path fill="#FC734D" d="M116 214h28v28h-28z" />
              <g fill="#F7F4ED" fontFamily="inherit">
                <text x="344" y="38" fontSize="14" fontWeight="700">N ↑</text>
                <text x="142" y="262" fontSize="10">KABANBAY BATYR AVENUE</text>
                <text x="28" y="326" fontSize="14" fontWeight="700">Nazarbayev University</text>
                <text x="28" y="384" fontSize="10">SCHEMATIC · NOT TO SCALE</text>
              </g>
              <text x="166" y="192" fill="#0A1430" fontSize="40" fontFamily="inherit" fontWeight="700">53</text>
            </svg>
            <figcaption className={styles.mapCaption}>Schematic campus location, not to scale.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
