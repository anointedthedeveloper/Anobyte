import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Services from '../components/sections/Services'
import Technologies from '../components/sections/Technologies'
import HomeCTA from '../components/sections/HomeCTA'

export default function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="What We Build"
        title="Services that drive real results"
        subtitle="From concept to deployment — end-to-end digital solutions engineered for scale, speed, and impact."
      />
      <Services />
      <Technologies />
      <HomeCTA />
    </PageWrapper>
  )
}
