import { Check, Sparkle, Gauge, ShieldCheck } from "lucide-react";
import styles from "@site/src/css/landing.module.css";
import Link from "@docusaurus/Link";

const plans = [
  {
    name: "Early bird",
    paymentType: "Free",
    priceCopy: "Free during beta: limited spots",
    description: "Monetize your agents and API endpoints without friction",
    accent: "outline",
    icon: <Sparkle size={16} strokeWidth={2.4} aria-hidden="true" />,
    features: [
      "No fees for any transaction",
      "Community support",
      "Tesseract support",
      "No credit card required",
    ],
  },
  // {
  //   name: "Starter",
  //   paymentType: "Free",
  //   priceCopy: "Free forever",
  //   description:
  //     "Monetize your first agents and API endpoints without friction",
  //   accent: "outline",
  //   icon: <Sparkle size={16} strokeWidth={2.4} aria-hidden="true" />,
  //   features: [
  //     "100 free single transactions per month",
  //     "1000 free batched transactions per month",
  //     "Community support",
  //     "No credit card required",
  //   ],
  // },
  // {
  //   name: "Professional",
  //   paymentType: "Pay as you go",
  //   priceCopy: "Pay per request",
  //   description: "Scale live agents and only pay for what moves.",
  //   accent: "highlight",
  //   icon: <Gauge size={16} strokeWidth={2.4} aria-hidden="true" />,
  //   features: [
  //     "Unlimited single transactions per month",
  //     "Unlimited batched transactions per month",
  //     "Cost tracking and budgeting",
  //     "Email support from Tesseract",
  //     "Community support",
  //   ],
  // },
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
      "No limits on transactions each month",
      "Control panel with cost tracking, performance and budgeting",
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
              <Link
                to="/beta"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.planButton}`}
              >
                Request Beta access
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
