import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import { C, F, G, S, gutter } from '../styles/tokens'

const LAST_UPDATED = 'August 2026'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing our website or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.',
  },
  {
    title: 'Services',
    body: 'We provide software development, web development, custom business software, and related technology services. The scope, timeline, and cost of each engagement are defined in a separate written agreement or proposal.',
  },
  {
    title: 'Intellectual Property',
    body: 'Upon full payment, you receive ownership of the custom work produced for you. We retain ownership of pre-existing tools, frameworks, and methodologies. We reserve the right to reference completed work in our portfolio unless you have requested confidentiality in writing.',
  },
  {
    title: 'Client Responsibilities',
    body: 'You are responsible for providing accurate information, responding to requests in a timely manner, and ensuring you hold the legal right to use any content or materials you provide. Delays caused by late feedback may affect timelines and could incur additional costs.',
  },
  {
    title: 'Payment Terms',
    body: 'Payment terms are defined per project. We reserve the right to pause work if invoices are not paid on time. Continued non-payment may result in termination of the engagement.',
  },
  {
    title: 'Confidentiality',
    body: 'Both parties agree to keep confidential any proprietary or sensitive information shared during an engagement. This obligation does not apply to publicly available information or disclosures required by law.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the fullest extent permitted by law, Anobyte Technologies shall not be liable for indirect or consequential damages. Our total liability for any engagement shall not exceed the total amount you paid for the service in question.',
  },
  {
    title: 'Warranties & Disclaimer',
    body: 'We will correct defects in deliverables within an agreed warranty period. After that period, services are provided as-is. We are not responsible for issues arising from third-party services or modifications made by the client after delivery.',
  },
  {
    title: 'Termination',
    body: 'Either party may terminate an engagement with written notice. You remain responsible for payment of all work completed up to the termination date. We may terminate immediately if you are in material breach of these terms.',
  },
  {
    title: 'Governing Law & Changes',
    body: 'These terms are governed by applicable law. We may update them from time to time — material changes will be reflected by an updated date above. Questions? Reach us at hello@anobyte.com.',
  },
]

export default function TermsPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        titleGrad="Service"
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
              These Terms of Service govern your use of the Anobyte Technologies website and any services we provide. By using our website or services, you agree to these terms.
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
