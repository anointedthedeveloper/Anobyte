import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HomeCTA from '../components/sections/HomeCTA'

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Our Story"
        title="Engineered with purpose"
        subtitle="AnoByte Technologies was founded on a single belief — businesses deserve software that actually works, elegantly, reliably, and at scale."
      />
      <About />
      <WhyChooseUs />
      <HomeCTA />
    </PageWrapper>
  )
}
