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
        subtitle="A sample of products we've designed, built, and shipped for our clients."
      />
      <Projects />
      <HomeCTA />
    </PageWrapper>
  )
}
