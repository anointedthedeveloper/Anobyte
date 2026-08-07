import PageWrapper from '../components/ui/PageWrapper'
import PageHero from '../components/ui/PageHero'
import Process from '../components/sections/Process'
import FAQ from '../components/sections/FAQ'
import HomeCTA from '../components/sections/HomeCTA'

export default function ProcessPage() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="How We Work"
        title="Our"
        titleGrad="process"
        subtitle="Six clear phases from brief to deployment. No guesswork, no surprises."
      />
      <Process />
      <FAQ />
      <HomeCTA />
    </PageWrapper>
  )
}
