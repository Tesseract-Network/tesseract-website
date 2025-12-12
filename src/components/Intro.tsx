import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import styles from "@site/src/css/landing.module.css";
import CollaboratioNetwork from "@site/src/components/CollaborationNetwork";

export default function IntroSection() {
  return (
    <section className={styles.whySection} id="why">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>What are agentic payments?</h2>
        <p className={styles.sectionSubtitle}>
          A glance into the future of payments
        </p>
        <CollaboratioNetwork />
      </div>
    </section>
  );
}
