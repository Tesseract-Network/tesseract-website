import React, { useState } from "react";
import Layout from "@theme/Layout";
import styles from "@site/src/css/landing.module.css";
import { Compass, Sparkle, Clock3 } from "lucide-react";

export default function SignupPage() {
  const FORM_ENDPOINT = "https://formspree.io/f/mwvpgqqb";
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        setErrorMessage(
          data?.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error. Please retry.");
      setStatus("error");
    }
  };

  return (
    <Layout title="Request Beta access">
      <div className={styles.siteContainer}>
        <section className={styles.signupPage}>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>
              Request access to Tesseract's facilitator
            </h1>
            <p className={styles.sectionSubtitle}>
              Tell us about your agents and we will unlock the right runway for
              you.
            </p>
          </div>

          <div className={styles.signupGrid}>
            <div className={styles.signupCard}>
              <h2 className={styles.signupLead}>Join the beta</h2>
              <p className={styles.signupCopy}>
                During beta, you can enjoy transactions without paying fees with
                the outstanding Tesseract support. We will grant access
                gradually depending on demand, please share a few details so we
                can prioritze your request and set up evething for you.
              </p>

              <form className={styles.signupForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="fullName">
                      Full Name <span>Required</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      className={styles.inputControl}
                      placeholder="Ada Lovelace"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="email">
                      Work Email <span>Required</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className={styles.inputControl}
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="company">
                      Company / project <span>Required</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className={styles.inputControl}
                      placeholder="Acme Robotics"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="role">
                      Role or team <span>Required</span>
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      required
                      className={styles.inputControl}
                      placeholder="Founder, Agent Ops, DevRel"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="useCase">
                      What is your use case?
                    </label>
                    <textarea
                      id="useCase"
                      name="useCase"
                      rows={3}
                      className={styles.inputControl}
                      placeholder="I want to sell access to my AI model, I build paid REST API for clients, I'm building a paywall"
                    ></textarea>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="priorTools">
                      Did you use other tools before? What are the current
                      problems in the process?
                    </label>
                    <textarea
                      id="priorTools"
                      name="priorTools"
                      rows={3}
                      className={styles.inputControl}
                      placeholder="Share what you tried and where the process breaks."
                    ></textarea>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.inputLabel} htmlFor="heardFrom">
                      How did you hear about us?
                    </label>
                    <input
                      id="heardFrom"
                      name="heardFrom"
                      type="text"
                      className={styles.inputControl}
                      placeholder="LinkedIn, search engine, a friend..."
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor="notes">
                    Anything else you want share with us? Questions?
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className={styles.inputControl}
                    placeholder="Share context, constraints, links to demos or any question you might have."
                  ></textarea>
                  <p className={styles.helper}>
                    The more context you share, the faster we can grant you
                    access.
                  </p>
                </div>

                <div
                  className={`${styles.signupActions} ${styles.signupFormActions}`}
                >
                  <button
                    type="submit"
                    className={`${styles.btn} ${styles.btnPrimary} ${styles.planButton}`}
                    disabled={status === "submitting"}
                  >
                    {status === "submitting"
                      ? "Sending..."
                      : "Request Beta access"}
                  </button>
                  <p className={styles.helper}>
                    We usually respond within 1 business day.
                  </p>
                  {status === "success" && (
                    <p className={styles.formStatusSuccess}>
                      Thanks! Talk to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className={styles.formStatusError}>{errorMessage}</p>
                  )}
                </div>
              </form>
            </div>

            <div className={styles.signupAside}>
              <div className={styles.signupMeta}>
                <h4>What to expect</h4>
                <div className={styles.signupMetaItem}>
                  <span className={styles.signupMetaIcon}>
                    <Sparkle size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span>
                    Early access to the latest to Tesseract technology,
                    including instant batched transactions
                  </span>
                </div>
                <div className={styles.signupMetaItem}>
                  <span className={styles.signupMetaIcon}>
                    <Compass size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span>
                    Guidance on getting the most from Tesseract for your use
                    case, including integration best practices.
                  </span>
                </div>
                <div className={styles.signupMetaItem}>
                  <span className={styles.signupMetaIcon}>
                    <Clock3 size={18} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                  <span>Response from the team in one business day.</span>
                </div>
              </div>

              <div className={styles.signupActions}>
                <div className={styles.pillList}>
                  <span className={styles.pill}>Instant transactions</span>
                  <span className={styles.pill}>Micropayments</span>
                  <span className={styles.pill}>Agent-native</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
