import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { C, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'
import ProjectCard from '../ui/ProjectCard'
import { PROJECTS } from '../../data/projects'

const SHOWCASE = PROJECTS.filter(p => p.featured)

export default function ProjectsOverview() {
  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="Selected Projects"
        title="Software we've"
        titleGrad="designed and built"
        subtitle="Live products from our GitHub — real deployments you can open and try right now."
      />

      <div className="proj-overview-grid">
        {SHOWCASE.map((p, i) => <ProjectCard key={p.title} p={p} i={i} inView />)}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: C.blue500 }}>
          View all projects <HiArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        .proj-overview-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(16px, 2.2vw, 26px); }
        @media (max-width: 960px) { .proj-overview-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .proj-overview-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}
