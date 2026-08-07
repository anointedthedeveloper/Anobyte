import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Services from '../components/sections/Services'
import Technologies from '../components/sections/Technologies'
import HomeCTA from '../components/sections/HomeCTA'

export default function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Services"
        title="What we"
        titleGrad="build"
        subtitle="Full-service product engineering — from the first wireframe to a live, monitored production system."
      />
      <Services />
      <Technologies />
      <HomeCTA />
    </PageWrapper>
  )
}
