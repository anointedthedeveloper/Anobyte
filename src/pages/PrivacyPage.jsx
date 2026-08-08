import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import { C, F, G, S, gutter } from '../styles/tokens'

const LAST_UPDATED = 'August 2026'

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you contact us, we collect the information you voluntarily provide — your name, email address, and project details. We do not use analytics tools and do not collect IP addresses or technical data about your visit.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your information only to respond to your inquiry, communicate about a project, or send updates if you subscribed to our newsletter. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: 'Cookies',
    body: 'Our website may use minimal cookies to support basic functionality. We do not use tracking or advertising cookies. You can instruct your browser to refuse cookies, though some parts of the site may not work correctly if you do.',
  },
  {
    title: 'Data Security',
    body: 'We take reasonable precautions to protect your personal information from unauthorized access or disclosure. No method of transmission over the internet is completely secure, but we apply commercially accepted practices to safeguard your data.',
  },
  {
    title: 'Data Retention',
    body: 'We retain personal information only as long as necessary to fulfil the purposes outlined here, or as required by law. When information is no longer needed, it is securely deleted or anonymized.',
  },
  {
    title: 'Your Rights',
    body: 'You may request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, contact us at anobytetechnologies@gmail.com and we will respond promptly.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Material changes will be reflected by an updated date at the top of this page. Continued use of our website after changes are posted constitutes acceptance.',
  },
  {
    title: 'Contact Us',
    body: 'Questions about this Privacy Policy? Reach us at anobytetechnologies@gmail.com and we will be happy to help.',
  },
]

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        titleGrad="Policy"
        subtitle={`Last updated: ${LAST_UPDATED}`}
      />

      <section style={{ background: '#fff', padding: `clamp(48px,6vw,72px) 0 clamp(56px,7vw,80px)` }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: `0 ${gutter}` }}>

          {/* Intro banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              background: C.blue50, border: `1px solid ${C.blue100}`,
              borderRadius: 16, padding: '20px 24px',
              marginBottom: 48,
            }}
          >
            <p style={{ fontSize: 14.5, lineHeight: 1.8, color: C.ink3 }}>
              Anobyte Technologies Ltd is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </motion.div>

          {/* Two-column grid */}
          <div className="legal-grid">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                className="legal-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: 7, flexShrink: 0,
                    background: G.brand,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: F.head, fontWeight: 800, fontSize: 10, color: '#fff' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 15, color: C.ink, letterSpacing: '-0.01em' }}>
                    {s.title}
                  </h2>
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.8, color: C.body }}>{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .legal-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .legal-card {
          background: ${C.bg};
          border: 1px solid ${C.border};
          border-radius: 16px;
          padding: 22px 22px 26px;
          box-shadow: ${S.card};
        }
        @media (max-width: 640px) {
          .legal-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageWrapper>
  )
}
