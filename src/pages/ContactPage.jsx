import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Get In Touch"
        title="Let's build something great together"
        subtitle="Tell us about your project and we'll respond within 24 hours with a tailored proposal."
      />
      <Contact />
    </PageWrapper>
  )
}
