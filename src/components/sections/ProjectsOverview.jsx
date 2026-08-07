import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import {
  HiChartBar, HiCodeBracket, HiChatBubbleLeftRight,
  HiDocument, HiShare, HiTv,
} from 'react-icons/hi2'
import { C, S, F } from '../../styles/tokens'
import { Section, SectionHeader } from '../ui/Wrap'

/* ─────────────────────────────────────────────────
   SVG mock visuals
───────────────────────────────────────────────── */
function Visual({ type, accent, bg }) {
  const a = accent, w = 320, h = 160

  const visuals = {
    stock: (<>
      <rect x="0" y="0" width="52" height={h} fill={a} opacity="0.10"/>
      {[16,36,56,76,96].map((y,i)=><rect key={i} x="9" y={y} width="34" height="8" rx="4" fill={a} opacity={i===1?.62:.2}/>)}
      <rect x="60" y="12" width="96" height="9" rx="4" fill={a} opacity="0.4"/>
      {[60,138,216].map((x,i)=>(
        <g key={i}><rect x={x} y="36" width="66" height="36" rx="7" fill="#fff" opacity="0.88"/>
        <rect x={x+7} y="44" width="24" height="4" rx="2" fill={a} opacity="0.27"/>
        <rect x={x+7} y="53" width="38" height="8" rx="4" fill={a} opacity={.48+i*.1}/></g>
      ))}
      <rect x="60" y="84" width="248" height="66" rx="7" fill="#fff" opacity="0.7"/>
      {[0,1,2,3,4,5,6,7].map(i=>{const hh=[16,26,18,34,22,38,20,30][i]; return <rect key={i} x={70+i*28} y={142-hh} width="16" height={hh} rx="3" fill={a} opacity={.27+i*.06}/>})}
    </>),

    reporoom: (<>
      <rect x="0" y="0" width="56" height={h} fill={a} opacity="0.1"/>
      {[14,34,54,74].map((y,i)=><rect key={i} x="9" y={y} width="38" height="8" rx="4" fill={a} opacity={i===0?.58:.2}/>)}
      <rect x="64" y="10" width="244" height="26" rx="6" fill="#fff" opacity="0.72"/>
      <rect x="72" y="18" width="56" height="6" rx="3" fill={a} opacity="0.42"/>
      <rect x="64" y="46" width="118" height="104" rx="7" fill="#fff" opacity="0.7"/>
      <rect x="72" y="56" width="76" height="5" rx="2.5" fill={a} opacity="0.35"/>
      {[0,1,2,3,4].map(i=><rect key={i} x="72" y={68+i*13} width={[96,68,86,56,76][i]} height="4" rx="2" fill={a} opacity={.17+i*.03}/>)}
      <rect x="190" y="46" width="118" height="104" rx="7" fill="#fff" opacity="0.7"/>
      <rect x="198" y="56" width="58" height="5" rx="2.5" fill={a} opacity="0.35"/>
      {[0,1,2].map(i=><rect key={i} x="198" y={68+i*13} width={[76,52,68][i]} height="4" rx="2" fill={a} opacity={.17+i*.04}/>)}
      <rect x="198" y="114" width="102" height="24" rx="6" fill={a} opacity="0.14"/>
      <rect x="206" y="122" width="46" height="7" rx="3.5" fill={a} opacity="0.48"/>
    </>),

    chatflow: (<>
      <rect x="0" y="0" width="56" height={h} fill={a} opacity="0.1"/>
      {[12,32,52,72].map((y,i)=><circle key={i} cx="28" cy={y} r="9" fill={a} opacity={i===0?.52:.18}/>)}
      <rect x="64" y="8" width="244" height="144" rx="9" fill="#fff" opacity="0.75"/>
      {[
        {x:72,y:18,w:110,mine:false},{x:72,y:38,w:82,mine:false},
        {x:182,y:60,w:106,mine:true},{x:182,y:80,w:76,mine:true},
        {x:72,y:102,w:124,mine:false},
        {x:182,y:126,w:96,mine:true},
      ].map((b,i)=>(
        <rect key={i} x={b.x} y={b.y} width={b.w} height="13" rx="6.5" fill={b.mine?a:'#E5E7EB'} opacity={b.mine?.72:.58}/>
      ))}
    </>),

    docverse: (<>
      <rect x="0" y="0" width="60" height={h} fill={a} opacity="0.1"/>
      {[12,32,52,72,92].map((y,i)=>(
        <g key={i}><rect x="7" y={y} width="24" height="18" rx="3" fill={a} opacity={i===1?.52:.18}/>
        <rect x="9" y={y+6} width="20" height="2" rx="1" fill="#fff" opacity="0.5"/></g>
      ))}
      <rect x="68" y="8" width="240" height="144" rx="7" fill="#fff" opacity="0.78"/>
      <rect x="76" y="18" width="150" height="8" rx="4" fill={a} opacity="0.38"/>
      <rect x="76" y="30" width="100" height="5" rx="2.5" fill={a} opacity="0.18"/>
      {[0,1,2,3,4,5,6].map(i=><rect key={i} x="76" y={44+i*12} width={[190,172,198,162,188,152,176][i]} height="4" rx="2" fill={a} opacity="0.13"/>)}
      <rect x="68" y={h-28} width="240" height="20" fill={a} opacity="0.08" rx="0 0 7 7"/>
      <rect x="96" y={h-22} width="72" height="7" rx="3.5" fill={a} opacity="0.38"/>
    </>),

    fileshare: (<>
      <circle cx="160" cy="72" r="36" fill={a} opacity="0.11"/>
      <circle cx="160" cy="72" r="22" fill={a} opacity="0.18"/>
      <rect x="143" y="65" width="34" height="14" rx="7" fill={a} opacity="0.58"/>
      {[[60,126],[260,126],[160,20]].map(([cx,cy],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy} r="18" fill="#fff" opacity="0.8"/>
          <circle cx={cx} cy={cy} r="10" fill={a} opacity="0.28"/>
          <line x1="160" y1="72" x2={cx} y2={cy} stroke={a} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.32"/>
        </g>
      ))}
      <rect x="108" y="138" width="104" height="18" rx="9" fill={a} opacity="0.14"/>
      <rect x="118" y="143" width="84" height="7" rx="3.5" fill={a} opacity="0.38"/>
    </>),

    tvremote: (<>
      <rect x="72" y="8" width="176" height="144" rx="16" fill="#1a1a2e" opacity="0.88"/>
      <rect x="82" y="20" width="156" height="82" rx="7" fill={a} opacity="0.14"/>
      <rect x="82" y="20" width="156" height="82" rx="7" fill="none" stroke={a} strokeWidth="1.5" opacity="0.28"/>
      <rect x="96" y="34" width="128" height="7" rx="3.5" fill={a} opacity="0.28"/>
      <rect x="96" y="46" width="92" height="5" rx="2.5" fill={a} opacity="0.16"/>
      <circle cx="160" cy="128" r="20" fill={a} opacity="0.16"/>
      <circle cx="160" cy="128" r="11" fill={a} opacity="0.32"/>
      <rect x="149" y="124" width="22" height="8" rx="4" fill="#fff" opacity="0.68"/>
      {[[124,128],[196,128],[160,110],[160,146]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="6" fill={a} opacity="0.2"/>
      ))}
    </>),
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} fill="none" style={{ width:'100%', height:'100%', display:'block' }}>
      <rect width={w} height={h} fill={bg}/>
      {visuals[type] || null}
    </svg>
  )
}

/* ── 6 showcase projects (3×2) ────────── */
const SHOWCASE = [
  {
    title: 'StockWise', cat: 'Business System', type: 'stock',
    Icon: HiChartBar,
    desc: 'Stock and inventory management for small and medium businesses. Tracks products, suppliers, and generates reports.',
    tags: ['Inventory', 'Business'], accent: '#009955', accentBg: '#EDFFF7',
  },
  {
    title: 'RepoRoom', cat: 'Developer Tool', type: 'reporoom',
    Icon: HiCodeBracket,
    desc: 'Developer collaboration workspace with GitHub integration, organisation management, and live video calls with screen sharing.',
    tags: ['Developer', 'GitHub'], accent: C.violet500, accentBg: C.violetLight,
  },
  {
    title: 'ChatFlow', cat: 'Communication', type: 'chatflow',
    Icon: HiChatBubbleLeftRight,
    desc: 'Chat with just a username — no registration. Supports text and video calls for quick temporary collaborations.',
    tags: ['Chat', 'Video Call'], accent: C.blue500, accentBg: C.blue50,
  },
  {
    title: 'DocVerse', cat: 'Productivity', type: 'docverse',
    Icon: HiDocument,
    desc: 'A clean document viewer with no ads. Read PDFs, manuals, hymn books, and documents without distractions.',
    tags: ['Documents', 'No Ads'], accent: '#D97706', accentBg: '#FFFBEB',
  },
  {
    title: 'File Share', cat: 'Utility', type: 'fileshare',
    Icon: HiShare,
    desc: 'Share files via hosted links with QR codes, temporary URLs, and live peer-to-peer transfer.',
    tags: ['QR Code', 'File Transfer'], accent: '#0284C7', accentBg: '#EFF9FF',
  },
  {
    title: 'Smart TV Remote', cat: 'Web App', type: 'tvremote',
    Icon: HiTv,
    desc: 'Control your smart TV from your phone browser. Works over local network — no pairing or extra hardware.',
    tags: ['Remote', 'Local Network'], accent: '#7C3AED', accentBg: '#F5F0FF',
  },
]

export default function ProjectsOverview() {
  return (
    <Section bg={C.bg}>
      <SectionHeader
        eyebrow="Selected Projects"
        title="Software we've"
        titleGrad="designed and built"
        subtitle="A selection of products and systems developed by Anobyte Technologies."
      />

      <div className="proj-overview-grid">
        {SHOWCASE.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: '#fff', borderRadius: 18,
              border: `1px solid ${C.border}`, boxShadow: S.card,
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
              transition: 'box-shadow 0.22s, transform 0.22s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${p.accent}22, 0 2px 8px rgba(0,0,0,0.05)`; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
          >
            {/* Visual — aspect-ratio keeps it consistent on all screen sizes */}
            <div style={{ position: 'relative', overflow: 'hidden', background: p.accentBg, flexShrink: 0, aspectRatio: '2 / 1', minHeight: 0 }}>
              <Visual type={p.type} accent={p.accent} bg={p.accentBg} />
              <span style={{ position: 'absolute', top: 12, left: 12, padding: '4px 11px', borderRadius: 6, fontSize: 11, fontWeight: 600, fontFamily: F.head, color: '#fff', background: p.accent }}>
                {p.cat}
              </span>
            </div>

            {/* Body */}
            <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: p.accentBg, border: `1px solid ${p.accent}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <p.Icon size={16} style={{ color: p.accent }} />
                </div>
                <h3 style={{ fontFamily: F.head, fontWeight: 700, fontSize: 16, color: C.ink, lineHeight: 1.2 }}>{p.title}</h3>
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: C.body, flex: 1, marginBottom: 14 }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ padding: '3px 9px', borderRadius: 5, fontSize: 11, fontWeight: 600, fontFamily: F.head, background: p.accentBg, border: `1px solid ${p.accent}30`, color: p.accent }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <Link to="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600, fontFamily: F.head, color: C.blue500, textDecoration: 'none' }}>
          View all projects <HiArrowRight size={14} />
        </Link>
      </div>

      <style>{`
        .proj-overview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2vw, 22px);
        }
        @media (max-width: 900px) { .proj-overview-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .proj-overview-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}
