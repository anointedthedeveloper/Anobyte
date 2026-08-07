import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiChartBar, HiAcademicCap, HiCodeBracket,
  HiChatBubbleLeftRight, HiDocument, HiDocumentText, HiShare,
  HiBuildingLibrary, HiTv, HiClipboardDocumentList,
} from 'react-icons/hi2'
import { C, S, F } from '../../styles/tokens'
import { Section } from '../ui/Wrap'

/* ─────────────────────────────────────────────────
   SVG mock visuals — one per project type
───────────────────────────────────────────────── */
function Visual({ type, accent, bg }) {
  const a = accent, w = 320, h = 170

  const visuals = {

    stock: (
      <>
        <rect x="0" y="0" width="56" height={h} fill={a} opacity="0.10"/>
        {[18,40,62,84,106].map((y,i)=><rect key={i} x="10" y={y} width="36" height="8" rx="4" fill={a} opacity={i===1?.65:.22}/>)}
        <rect x="68" y="14" width="100" height="10" rx="5" fill={a} opacity="0.42"/>
        {[68,150,232].map((x,i)=>(
          <g key={i}>
            <rect x={x} y="40" width="68" height="38" rx="8" fill="#fff" opacity="0.88"/>
            <rect x={x+8} y="48" width="26" height="4" rx="2" fill={a} opacity="0.28"/>
            <rect x={x+8} y="57" width="40" height="9" rx="4" fill={a} opacity={.5+i*.1}/>
          </g>
        ))}
        <rect x="68" y="92" width="240" height="68" rx="8" fill="#fff" opacity="0.7"/>
        {[0,1,2,3,4,5,6,7].map(i=>{const hh=[18,28,20,36,24,40,22,32][i]; return <rect key={i} x={78+i*28} y={152-hh} width="18" height={hh} rx="3" fill={a} opacity={.28+i*.06}/>})}
      </>
    ),

    prep: (
      <>
        <rect x="0" y="0" width={w} height="24" fill={a} opacity="0.1"/>
        <rect x="12" y="7" width="64" height="10" rx="5" fill={a} opacity="0.4"/>
        {['Math','Eng','Bio','Phy'].map((s,i)=>(
          <g key={s}>
            <rect x={12+i*72} y="32" width="64" height="20" rx="10" fill={i===0?a:'#fff'} opacity={i===0?.88:.72}/>
            <rect x={20+i*72} y="39" width={[28,22,18,22][i]} height="6" rx="3" fill={i===0?'#fff':a} opacity={i===0?1:.28}/>
          </g>
        ))}
        {[0,1,2].map(i=>(
          <g key={i}>
            <rect x="12" y={66+i*22} width="180" height="8" rx="4" fill={a} opacity="0.14"/>
            <rect x="12" y={66+i*22} width={[120,85,140][i]} height="8" rx="4" fill={a} opacity={[.65,.42,.55][i]}/>
          </g>
        ))}
        <circle cx="264" cy="115" r="40" fill={a} opacity="0.07"/>
        <circle cx="264" cy="115" r="28" fill={a} opacity="0.12"/>
        <rect x="244" y="109" width="40" height="12" rx="6" fill={a} opacity="0.55"/>
      </>
    ),

    reporoom: (
      <>
        <rect x="0" y="0" width="60" height={h} fill={a} opacity="0.1"/>
        {[16,38,60,82].map((y,i)=><rect key={i} x="10" y={y} width="40" height="8" rx="4" fill={a} opacity={i===0?.6:.22}/>)}
        <rect x="68" y="12" width="240" height="28" rx="7" fill="#fff" opacity="0.75"/>
        <rect x="76" y="20" width="60" height="6" rx="3" fill={a} opacity="0.45"/>
        <rect x="148" y="20" width="40" height="6" rx="3" fill={a} opacity="0.22"/>
        <rect x="68" y="50" width="115" height="110" rx="7" fill="#fff" opacity="0.7"/>
        <rect x="76" y="60" width="80" height="5" rx="2.5" fill={a} opacity="0.35"/>
        {[0,1,2,3,4].map(i=><rect key={i} x="76" y={72+i*14} width={[100,70,90,60,80][i]} height="4" rx="2" fill={a} opacity={.18+i*.03}/>)}
        <rect x="193" y="50" width="115" height="110" rx="7" fill="#fff" opacity="0.7"/>
        <rect x="201" y="60" width="60" height="5" rx="2.5" fill={a} opacity="0.35"/>
        {[0,1,2].map(i=><rect key={i} x="201" y={72+i*14} width={[80,55,70][i]} height="4" rx="2" fill={a} opacity={.18+i*.04}/>)}
        <rect x="201" y="120" width="99" height="28" rx="6" fill={a} opacity="0.15"/>
        <rect x="209" y="128" width="50" height="7" rx="3.5" fill={a} opacity="0.5"/>
      </>
    ),

    chatflow: (
      <>
        <rect x="0" y="0" width="60" height={h} fill={a} opacity="0.1"/>
        {[14,36,58,80].map((y,i)=><circle key={i} cx="30" cy={y} r="10" fill={a} opacity={i===0?.55:.2}/>)}
        <rect x="68" y="8" width="240" height="154" rx="10" fill="#fff" opacity="0.75"/>
        {[
          {x:76,y:18,w:120,mine:false},{x:76,y:38,w:90,mine:false},
          {x:180,y:62,w:110,mine:true},{x:180,y:82,w:80,mine:true},
          {x:76,y:106,w:130,mine:false},
          {x:180,y:130,w:100,mine:true},
        ].map((b,i)=>(
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height="14" rx="7" fill={b.mine?a:'#E5E7EB'} opacity={b.mine?.75:.6}/>
          </g>
        ))}
      </>
    ),

    docverse: (
      <>
        <rect x="0" y="0" width="64" height={h} fill={a} opacity="0.1"/>
        {[14,36,58,80,102].map((y,i)=>(
          <g key={i}>
            <rect x="8" y={y} width="26" height="20" rx="4" fill={a} opacity={i===1?.55:.2}/>
            <rect x="10" y={y+7} width="22" height="2" rx="1" fill="#fff" opacity="0.5"/>
          </g>
        ))}
        <rect x="72" y="8" width="236" height={h-16} rx="8" fill="#fff" opacity="0.78"/>
        <rect x="80" y="18" width="160" height="9" rx="4" fill={a} opacity="0.4"/>
        <rect x="80" y="32" width="110" height="6" rx="3" fill={a} opacity="0.2"/>
        {[0,1,2,3,4,5,6,7].map(i=><rect key={i} x="80" y={46+i*12} width={[200,180,210,170,195,160,185,140][i]} height="5" rx="2.5" fill={a} opacity="0.15"/>)}
        <rect x="72" y={h-32} width="236" height="24" fill={a} opacity="0.08" rx="0 0 8 8"/>
        <rect x="100" y={h-24} width="80" height="7" rx="3.5" fill={a} opacity="0.4"/>
        <rect x="220" y={h-24} width="60" height="7" rx="3.5" fill={a} opacity="0.25"/>
      </>
    ),

    fileshare: (
      <>
        <rect x="0" y="0" width={w} height={h} fill={bg}/>
        <circle cx="160" cy="72" r="38" fill={a} opacity="0.12"/>
        <circle cx="160" cy="72" r="24" fill={a} opacity="0.18"/>
        <rect x="142" y="64" width="36" height="16" rx="8" fill={a} opacity="0.6"/>
        {[[60,130],[260,130],[160,20]].map(([cx,cy],i)=>(
          <g key={i}>
            <circle cx={cx} cy={cy} r="20" fill="#fff" opacity="0.8"/>
            <circle cx={cx} cy={cy} r="12" fill={a} opacity="0.3"/>
            <line x1="160" y1="72" x2={cx} y2={cy} stroke={a} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.35"/>
          </g>
        ))}
        <rect x="104" y="142" width="112" height="20" rx="10" fill={a} opacity="0.15"/>
        <rect x="116" y="148" width="88" height="8" rx="4" fill={a} opacity="0.4"/>
      </>
    ),

    portal: (
      <>
        <rect x="0" y="0" width={w} height="32" fill={a} opacity="0.13"/>
        <rect x="12" y="11" width="88" height="10" rx="5" fill={a} opacity="0.45"/>
        <circle cx="300" cy="16" r="11" fill={a} opacity="0.22"/>
        {[0,1,2,3,4].map(i=>(
          <g key={i}>
            <rect x="12" y={44+i*24} width="296" height="18" rx="6" fill="#fff" opacity="0.78"/>
            <circle cx="24" cy={53+i*24} r="7" fill={a} opacity="0.28"/>
            <rect x="38" y={49+i*24} width={[80,100,70,90,60][i]} height="5" rx="2.5" fill={a} opacity="0.3"/>
            <rect x={210} y={49+i*24} width="36" height="8" rx="4" fill={a} opacity={[.65,.35,.5,.45,.55][i]}/>
          </g>
        ))}
      </>
    ),

    tvremote: (
      <>
        <rect x="60" y="8" width="200" height="150" rx="16" fill="#1a1a2e" opacity="0.9"/>
        <rect x="72" y="20" width="176" height="90" rx="8" fill={a} opacity="0.15"/>
        <rect x="72" y="20" width="176" height="90" rx="8" fill="none" stroke={a} strokeWidth="1.5" opacity="0.3"/>
        <rect x="90" y="36" width="140" height="8" rx="4" fill={a} opacity="0.3"/>
        <rect x="90" y="50" width="100" height="6" rx="3" fill={a} opacity="0.18"/>
        <circle cx="160" cy="138" r="22" fill={a} opacity="0.18"/>
        <circle cx="160" cy="138" r="12" fill={a} opacity="0.35"/>
        <rect x="148" y="134" width="24" height="8" rx="4" fill="#fff" opacity="0.7"/>
        {[[120,138],[200,138],[160,118],[160,158]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="7" fill={a} opacity="0.22"/>
        ))}
      </>
    ),

    exam: (
      <>
        <rect x="0" y="0" width={w} height="28" fill={a} opacity="0.13"/>
        <rect x="12" y="9" width="90" height="10" rx="5" fill={a} opacity="0.45"/>
        <rect x="248" y="9" width="60" height="10" rx="5" fill={a} opacity="0.3"/>
        <rect x="12" y="40" width="220" height="9" rx="4" fill={a} opacity="0.35"/>
        <rect x="12" y="55" width="170" height="6" rx="3" fill={a} opacity="0.18"/>
        {[0,1,2,3].map(i=>(
          <g key={i}>
            <rect x="12" y={74+i*22} width="260" height="16" rx="7" fill={i===1?a:'#fff'} opacity={i===1?.88:.72}/>
            <rect x="20" y={78+i*22} width="8" height="8" rx="4" fill={i===1?'#fff':a} opacity={i===1?1:.28}/>
            <rect x="36" y={80+i*22} width={[90,110,70,80][i]} height="4" rx="2" fill={i===1?'#fff':a} opacity={i===1?.9:.22}/>
          </g>
        ))}
        <rect x="268" y="40" width="40" height="24" rx="9" fill={a} opacity="0.14"/>
        <rect x="274" y="48" width="28" height="8" rx="4" fill={a} opacity="0.45"/>
      </>
    ),

    receipt: (
      <>
        <rect x="90" y="6" width="140" height="158" rx="8" fill="#fff" opacity="0.94"/>
        <rect x="90" y="6" width="140" height="5" fill={a} opacity="0.65"/>
        <rect x="126" y="20" width="68" height="10" rx="5" fill={a} opacity="0.38"/>
        <rect x="136" y="34" width="48" height="5" rx="2.5" fill={a} opacity="0.18"/>
        {[0,1,2,3,4].map(i=>(
          <g key={i}>
            <rect x="100" y={54+i*18} width={[80,60,96,70,55][i]} height="5" rx="2.5" fill={a} opacity="0.22"/>
            <rect x="210" y={54+i*18} width="16" height="5" rx="2.5" fill={a} opacity="0.4"/>
          </g>
        ))}
        <rect x="100" y="150" width="120" height="1" fill={a} opacity="0.2"/>
        <rect x="166" y="157" width="58" height="6" rx="3" fill={a} opacity="0.55"/>
        <path d="M90 6 L90 164" stroke={a} strokeWidth="1" strokeDasharray="4 3" opacity="0.18"/>
        <path d="M230 6 L230 164" stroke={a} strokeWidth="1" strokeDasharray="4 3" opacity="0.18"/>
      </>
    ),
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} fill="none" style={{ width:'100%', height:'100%', display:'block' }}>
      <rect width={w} height={h} fill={bg}/>
      {visuals[type]}
    </svg>
  )
}

/* ── 10 projects ─────────────────────── */
const ALL = [
  {
    title: 'StockWise',
    cat: 'Business',
    type: 'stock',
    Icon: HiChartBar,
    desc: 'Stock and inventory management for small and medium businesses. Tracks products, manages suppliers, monitors levels, and generates reports.',
    tags: ['Inventory', 'Dashboard', 'Business'],
    accent: '#009955', accentBg: '#EDFFF7',
  },
  {
    title: 'Receipt Generator',
    cat: 'Business',
    type: 'receipt',
    Icon: HiDocumentText,
    desc: 'A fast receipt creation tool for businesses. Create, customise, and export professional receipts without complex accounting software.',
    tags: ['Business Tool', 'Receipts'],
    accent: '#D97706', accentBg: '#FFFBEB',
  },
  {
    title: 'Receipt Generator',
    cat: 'Business',
    type: 'receipt',
    Icon: HiDocumentText,
    desc: 'A fast receipt creation tool for businesses. Create, customise, and export professional receipts without complex accounting software.',
    tags: ['Business Tool', 'Receipts'],
    accent: '#D97706', accentBg: '#FFFBEB',
  },
  {
    title: 'RepoRoom',
    cat: 'Development',
    type: 'reporoom',
    Icon: HiCodeBracket,
    desc: 'A developer collaboration workspace with GitHub integration. Create organisations, manage repositories, and run live video calls with screen sharing.',
    tags: ['GitHub', 'Collaboration', 'Dev'],
    accent: C.violet500, accentBg: C.violetLight,
  },
  {
    title: 'ChatFlow',
    cat: 'Communication & Tools',
    type: 'chatflow',
    Icon: HiChatBubbleLeftRight,
    desc: 'Chat with just a username — no registration required. Supports text messaging and video calls for quick temporary collaborations.',
    tags: ['Chat', 'Video Call'],
    accent: C.blue500, accentBg: C.blue50,
  },
  {
    title: 'DocVerse',
    cat: 'Communication & Tools',
    type: 'docverse',
    Icon: HiDocument,
    desc: 'A clean document viewer with no ads. Read PDFs, manuals, hymn books, and documents without distractions.',
    tags: ['Documents', 'No Ads'],
    accent: '#B45309', accentBg: '#FFFBEB',
  },
  {
    title: 'File Share',
    cat: 'Communication & Tools',
    type: 'fileshare',
    Icon: HiShare,
    desc: 'Share files via hosted links with QR codes, temporary URLs, and live peer-to-peer transfer.',
    tags: ['QR Code', 'File Transfer'],
    accent: '#0284C7', accentBg: '#EFF9FF',
  },
  {
    title: 'Smart TV Remote',
    cat: 'Development',
    type: 'tvremote',
    Icon: HiTv,
    desc: 'A web application that turns your phone into a smart TV remote. Works over your local network — no pairing codes or extra hardware needed.',
    tags: ['Remote', 'Local Network'],
    accent: '#7C3AED', accentBg: '#F5F0FF',
  },
  {
    title: 'Prep4JAMB',
    cat: 'Education',
    type: 'prep',
    Icon: HiAcademicCap,
    desc: 'A UTME practice platform built for schools. Students sit timed practice exams by subject, track scores, and review answers after each session.',
    tags: ['Education', 'UTME', 'Schools'],
    accent: '#059669', accentBg: '#ECFDF5',
  },
  {
    title: 'School Results Portal',
    cat: 'Education',
    type: 'portal',
    Icon: HiBuildingLibrary,
    desc: 'A school management portal for e-results, student records, report cards, and academic administration — accessible to staff and parents.',
    tags: ['Portal', 'Education'],
    accent: '#DC2626', accentBg: '#FEF2F2',
  },
  {
    title: 'School Exam System',
    cat: 'Education',
    type: 'exam',
    Icon: HiClipboardDocumentList,
    desc: 'A terminal examination platform for schools. Run end-of-term and promotional exams digitally with automatic marking across multiple subjects.',
    tags: ['Exam System', 'Education'],
    accent: '#0284C7', accentBg: '#EFF9FF',
  },
]

const CATS = ['All', 'Business', 'Education', 'Development', 'Communication & Tools']

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: '#fff', borderRadius: 18,
        border: `1px solid ${C.border}`,
        boxShadow: S.card, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transition: 'box-shadow 0.22s, transform 0.22s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 32px ${p.accent}25, 0 2px 8px rgba(0,0,0,0.05)`; e.currentTarget.style.transform = 'translateY(-4px)' }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = S.card; e.currentTarget.style.transform = 'none' }}
    >
      {/* Visual */}
      <div style={{ height: 160, overflow: 'hidden', background: p.accentBg, flexShrink: 0, position: 'relative' }}>
        <Visual type={p.type} accent={p.accent} bg={p.accentBg} />
        <span style={{
          position: 'absolute', top: 12, left: 12,
          padding: '4px 11px', borderRadius: 6,
          fontSize: 11, fontWeight: 600, fontFamily: F.head,
          color: '#fff', background: p.accent,
        }}>
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
    </motion.article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ALL : ALL.filter(p => p.cat === active)

  // Pad to nearest multiple of 3 so grid is always complete
  const padded = [...filtered]
  while (padded.length % 3 !== 0) padded.push(null)

  return (
    <Section bg="#fff">
      {/* Filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
        {CATS.map(c => (
          <button key={c} onClick={() => setActive(c)} style={{
            padding: '7px 16px', borderRadius: 10,
            fontSize: 13, fontWeight: 600, fontFamily: F.head,
            cursor: 'pointer', transition: 'all 0.18s', border: 'none',
            background: active === c ? C.blue500 : C.bg,
            color: active === c ? '#fff' : C.body,
            outline: active === c ? 'none' : `1px solid ${C.border}`,
            boxShadow: active === c ? S.btn : 'none',
          }}>
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="proj-full-grid"
        >
          {padded.map((p, i) =>
            p ? <Card key={p.title} p={p} i={i} /> : <div key={`pad-${i}`} style={{ borderRadius: 18, border: `1px dashed ${C.border}`, opacity: 0.3 }} />
          )}
        </motion.div>
      </AnimatePresence>

      <style>{`
        .proj-full-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.2vw, 22px);
        }
        @media (max-width: 900px) {
          .proj-full-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 540px) {
          .proj-full-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </Section>
  )
}
