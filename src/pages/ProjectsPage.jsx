import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Projects from '../components/sections/Projects'
import HomeCTA from '../components/sections/HomeCTA'

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <PageHero
        badge="Our Work"
        title="Projects we're proud of"
        subtitle="Real products, real clients, measurable outcomes. Every project is a partnership we take seriously."
      />
      <Projects />
      <HomeCTA />
    </PageWrapper>
  )
}
