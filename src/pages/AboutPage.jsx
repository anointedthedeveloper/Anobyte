import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HomeCTA from '../components/sections/HomeCTA'

export default function AboutPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="About"
        title="Who we"
        titleGrad="are"
        subtitle="A focused engineering studio that builds software properly — clean code, clear communication, honest timelines."
      />
      <About />
      <WhyChooseUs />
      <HomeCTA />
    </PageWrapper>
  )
}
