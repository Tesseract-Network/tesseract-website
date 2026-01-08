import { Check, Sparkle, Gauge, ShieldCheck } from "lucide-react";
import styles from "@site/src/css/landing.module.css";

const plans = [
  {
    name: "Starter",
    paymentType: "Free",
    priceCopy: "Free forever",
    description:
      "Monetize your first agents and API endpoints without friction",
    accent: "outline",
    icon: <Sparkle size={16} strokeWidth={2.4} aria-hidden="true" />,
    features: [
      "100 free single transactions per month",
      "1000 free batched transactions per month",
      "Community support",
      "No credit card required to start",
    ],
  },
  {
    name: "Professional",
    paymentType: "Pay as you go",
    priceCopy: "Pay per request",
    description: "Scale live agents and only pay for what moves.",
    accent: "highlight",
    icon: <Gauge size={16} strokeWidth={2.4} aria-hidden="true" />,
    features: [
      "Unlimited single transactions per month",
      "Unlimited batched transactions per month",
      "Cost tracking and budgeting",
      "Email support from Tesseract",
      "Community support",
    ],
  },
  {
    name: "Enterprise",
    paymentType: "Custom pricing",
    priceCopy: "Talk to us",
    description: "Tailored payment rails and governance for your AI fleet.",
    accent: "glass",
    icon: <ShieldCheck size={16} strokeWidth={2.4} aria-hidden="true" />,
    features: [
      "White-glove onboarding for your teams",
      "Institutional-grade SLAs",
      "Priority support from Tesseract",
      "Unlimited exact mode transactions per month",
      "Unlimited escrow mode transactions per month",
      "Cost tracking and budgeting",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Pricing built for micropayments</h2>
        <p className={styles.sectionSubtitle}>
          Choose your plan for the Tesseract's facilitator, the easiest way to
          get started with instant micropayments
        </p>
      </div>

      <div className={styles.pricingGrid}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.pricingCard} ${
              plan.accent === "highlight" ? styles.pricingCardHighlight : ""
            } ${plan.accent === "glass" ? styles.pricingCardGlass : ""}`}
          >
            <div className={styles.pricingCardHeader}>
              <div className={styles.planBadge}>
                {plan.icon}
                <span>{plan.paymentType}</span>
              </div>
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>
              <p className={styles.planPrice}>{plan.priceCopy}</p>
            </div>

            <ul className={styles.planFeatures}>
              {plan.features.map((feature) => (
                <li key={feature} className={styles.planFeature}>
                  <Check size={18} strokeWidth={2.6} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className={styles.planActions}>
              <a
                className={`${styles.btn} ${styles.btnPrimary} ${styles.planButton}`}
                href="/signup"
              >
                Request Beta access
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
