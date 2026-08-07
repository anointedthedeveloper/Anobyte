import PageWrapper from '../components/ui/PageWrapper'
import Hero from '../components/sections/Hero'
import ServicesOverview from '../components/sections/ServicesOverview'
import ProjectsOverview from '../components/sections/ProjectsOverview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import HomeCTA from '../components/sections/HomeCTA'

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ServicesOverview />
      <ProjectsOverview />
      <WhyChooseUs />
      <HomeCTA />
    </PageWrapper>
  )
}
