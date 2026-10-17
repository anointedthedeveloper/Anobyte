import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { C, F, S } from '../../styles/tokens'
import { Section } from '../ui/Wrap'
import ProjectCard from '../ui/ProjectCard'
import { PROJECTS, PROJECT_CATS, GITHUB_PROFILE } from '../../data/projects'

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === active)
  const cats = PROJECT_CATS.filter(c => c === 'All' || PROJECTS.some(p => p.cat === c))

  return (
    <Section bg="#fff">
      <div className="proj-filters" role="tablist" aria-label="Project categories">
        {cats.map(c => (
          <button key={c} role="tab" aria-selected={active === c} onClick={() => setActive(c)}
            className={`proj-filter${active === c ? ' on' : ''}`}>
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} className="proj-full-grid"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
          {filtered.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </motion.div>
      </AnimatePresence>

      <div className="proj-more">
        <p>More of our work lives on GitHub — or tell us what you want built next.</p>
        <div>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" className="proj-more-gh">
            <FaGithub size={16} /> View all on GitHub
          </a>
          <Link to="/contact" className="proj-more-cta">Start a project</Link>
        </div>
      </div>

      <style>{`
        .proj-filters { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: clamp(24px, 3vw, 40px); }
        .proj-filter {
          padding: 8px 18px; border-radius: 999px; font: 600 13px ${F.head};
          background: ${C.bg}; color: ${C.body}; border: 1px solid ${C.border};
          transition: background .2s, color .2s, box-shadow .2s, border-color .2s;
        }
        .proj-filter:hover { border-color: ${C.blue200}; color: ${C.ink}; }
        .proj-filter.on { background: linear-gradient(135deg, #4F72F8, #8B3FF5); color: #fff; border-color: transparent; box-shadow: ${S.btn}; }
        .proj-full-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: clamp(16px, 2.2vw, 26px); }
        @media (max-width: 960px) { .proj-full-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .proj-full-grid { grid-template-columns: 1fr; } }
        .proj-more {
          margin-top: clamp(32px, 4vw, 56px); padding: clamp(24px, 3vw, 36px); text-align: center;
          border-radius: 20px; border: 1.5px dashed ${C.blue200};
          background: linear-gradient(145deg, ${C.blue50}, ${C.violetLight});
        }
        .proj-more p { font: 700 clamp(16px, 2vw, 20px) ${F.head}; color: ${C.ink}; margin-bottom: 18px; letter-spacing: -0.01em; }
        .proj-more div { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; }
        .proj-more-gh, .proj-more-cta { display: inline-flex; align-items: center; gap: 8px; padding: 11px 22px; border-radius: 10px; font: 700 14px ${F.head}; }
        .proj-more-gh { background: ${C.ink}; color: #fff; }
        .proj-more-cta { background: linear-gradient(135deg, #4F72F8, #8B3FF5); color: #fff; box-shadow: ${S.btn}; }
      `}</style>
    </Section>
  )
}
