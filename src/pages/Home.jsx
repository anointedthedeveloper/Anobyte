import PageWrapper from '../components/ui/PageWrapper'
import Hero from '../components/sections/Hero'
import TrustedBy from '../components/sections/TrustedBy'
import ServicesOverview from '../components/sections/ServicesOverview'
import ProjectsOverview from '../components/sections/ProjectsOverview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Technologies from '../components/sections/Technologies'
import FAQ from '../components/sections/FAQ'
import HomeCTA from '../components/sections/HomeCTA'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustedBy />
      <ServicesOverview />
      <ProjectsOverview />
      <WhyChooseUs />
      <Technologies />
      <FAQ />
      <HomeCTA />
    </PageWrapper>
  )
}
