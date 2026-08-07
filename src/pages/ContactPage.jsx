import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Contact"
        title="Start a"
        titleGrad="conversation"
        subtitle="Tell us what you're building. We'll respond within one business day."
      />
      <Contact />
    </PageWrapper>
  )
}
