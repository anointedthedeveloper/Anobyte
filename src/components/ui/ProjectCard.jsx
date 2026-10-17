import { motion } from 'framer-motion'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { C, F, S } from '../../styles/tokens'
import { repoUrl, host } from '../../data/projects'

export default function ProjectCard({ p, i = 0, inView = false }) {
  const motionProps = inView
    ? { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-40px' } }
    : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }

  return (
    <motion.article
      {...motionProps}
      transition={{ duration: 0.45, delay: Math.min(i, 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="pcard"
      style={{ '--accent': p.accent, '--accent-bg': p.accentBg }}
    >
      {/* Preview — faux browser window with the live domain */}
      <a href={p.live} target="_blank" rel="noopener noreferrer" className="pcard-preview" aria-label={`Open ${p.title} live`}>
        <div className="pcard-chrome">
          <span /><span /><span />
          <em>{host(p.live)}</em>
        </div>
        <div className="pcard-art">
          <span className="pcard-initial">{p.title.charAt(0)}</span>
          <span className="pcard-cat">{p.cat}</span>
        </div>
      </a>

      <div className="pcard-body">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="pcard-tags">
          {p.stack.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className="pcard-links">
          <a href={p.live} target="_blank" rel="noopener noreferrer" className="pcard-live">
            Live demo <HiArrowTopRightOnSquare size={14} />
          </a>
          <a href={repoUrl(p.repo)} target="_blank" rel="noopener noreferrer" className="pcard-gh" aria-label={`${p.title} on GitHub`}>
            <FaGithub size={15} /> Code
          </a>
        </div>
      </div>

      <style>{`
        .pcard {
          background: #fff; border-radius: 18px; overflow: hidden;
          border: 1px solid ${C.border}; box-shadow: ${S.card};
          display: flex; flex-direction: column;
          transition: box-shadow .25s, transform .25s, border-color .25s;
        }
        .pcard:hover {
          transform: translateY(-5px);
          border-color: color-mix(in srgb, var(--accent) 35%, ${C.border});
          box-shadow: 0 14px 40px color-mix(in srgb, var(--accent) 18%, transparent), 0 2px 8px rgba(0,0,0,.05);
        }
        .pcard-preview { display: block; background: var(--accent-bg); }
        .pcard-chrome {
          display: flex; align-items: center; gap: 5px; padding: 9px 12px;
          background: rgba(255,255,255,.7); border-bottom: 1px solid ${C.border};
        }
        .pcard-chrome span { width: 8px; height: 8px; border-radius: 50%; background: ${C.border}; }
        .pcard-chrome span:first-child { background: #FF6B6B; opacity: .7; }
        .pcard-chrome span:nth-child(2) { background: #FFC24B; opacity: .8; }
        .pcard-chrome span:nth-child(3) { background: #3DD68C; opacity: .8; }
        .pcard-chrome em {
          margin-left: 8px; flex: 1; min-width: 0; font-style: normal; font-size: 11px;
          color: ${C.muted}; background: #fff; border: 1px solid ${C.border}; border-radius: 6px;
          padding: 2px 9px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .pcard-art {
          position: relative; aspect-ratio: 16 / 7.5; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          background:
            radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 55%),
            radial-gradient(circle at 85% 90%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 50%),
            var(--accent-bg);
        }
        .pcard-initial {
          font-family: ${F.head}; font-weight: 800; font-size: clamp(64px, 8vw, 92px);
          line-height: 1; color: var(--accent); opacity: .85; letter-spacing: -0.04em;
          transition: transform .4s cubic-bezier(.22,1,.36,1);
        }
        .pcard:hover .pcard-initial { transform: scale(1.1) rotate(-3deg); }
        .pcard-cat {
          position: absolute; top: 12px; left: 12px; padding: 4px 11px; border-radius: 999px;
          font: 600 11px ${F.head}; color: #fff; background: var(--accent);
        }
        .pcard-body { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
        .pcard-body h3 { font: 700 17px/1.2 ${F.head}; color: ${C.ink}; margin-bottom: 8px; letter-spacing: -0.01em; }
        .pcard-body p { font-size: 13.5px; line-height: 1.7; color: ${C.body}; flex: 1; margin-bottom: 14px; }
        .pcard-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px; }
        .pcard-tags span {
          padding: 3px 9px; border-radius: 6px; font: 600 11px ${F.head};
          background: var(--accent-bg); color: var(--accent);
          border: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
        }
        .pcard-links { display: flex; align-items: center; gap: 10px; padding-top: 14px; border-top: 1px solid ${C.border}; }
        .pcard-live, .pcard-gh {
          display: inline-flex; align-items: center; gap: 6px; font: 600 13px ${F.head};
          border-radius: 9px; padding: 8px 14px; transition: background .2s, color .2s, box-shadow .2s;
        }
        .pcard-live { color: #fff; background: var(--accent); }
        .pcard-live:hover { box-shadow: 0 6px 18px color-mix(in srgb, var(--accent) 40%, transparent); }
        .pcard-gh { color: ${C.ink3}; background: ${C.bg}; border: 1px solid ${C.border}; }
        .pcard-gh:hover { background: ${C.ink}; color: #fff; border-color: ${C.ink}; }
        @media (prefers-reduced-motion: reduce) {
          .pcard, .pcard-initial { transition: none; }
          .pcard:hover { transform: none; }
        }
      `}</style>
    </motion.article>
  )
}
