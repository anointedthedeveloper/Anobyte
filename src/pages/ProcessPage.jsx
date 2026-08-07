import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'
import HomeCTA from '../components/sections/HomeCTA'

export default function ProcessPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="How We Work"
        title="A process built for excellence"
        subtitle="Six refined phases that take your idea from a napkin sketch to a production-grade digital product — with full transparency at every step."
      />
      <Process />
      <FAQ />
      <HomeCTA />
    </PageWrapper>
  )
}
