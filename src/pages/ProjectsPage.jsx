import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Projects from '../components/sections/Projects'
import HomeCTA from '../components/sections/HomeCTA'

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Work"
        title="Selected"
        titleGrad="projects"
        subtitle="Live products from our GitHub — real deployments across AI, developer tools, business systems, e-commerce and education."
      />
      <Projects />
      <HomeCTA />
    </PageWrapper>
  )
}
