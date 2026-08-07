import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiChartBar, HiAcademicCap, HiCodeBracket,
  HiChatBubbleLeftRight, HiDocument, HiDocumentText, HiShare,
  HiBuildingLibrary, HiTv, HiClipboardDocumentList,
} from 'react-icons/hi2'
import { C, G, S, F } from '../../styles/tokens'
import { Section } from '../ui/Wrap'

/* ── SVG mock visuals ───────────────────────────────────────── */
function Visual({ type, accent: a, bg }) {
  const w = 320, h = 170

  const map = {
    stock: (<>
      <rect x="0" y="0" width="52" height={h} fill={a} opacity="0.10"/>
      {[16,36,56,76,96].map((y,i)=><rect key={i} x="9" y={y} width="34" height="8" rx="4" fill={a} opacity={i===1?.62:.2}/>)}
      <rect x="60" y="12" width="96" height="9" rx="4" fill={a} opacity="0.4"/>
      {[60,138,216].map((x,i)=>(
        <g key={i}><rect x={x} y="36" width="66" height="36" rx="7" fill="#fff" opacity="0.88"/>
        <rect x={x+7} y="44" width="24" height="4" rx="2" fill={a} opacity="0.27"/>
        <rect x={x+7} y="53" width="38" height="8" rx="4" fill={a} opacity={.48+i*.1}/></g>
      ))}
      <rect x="60" y="84" width="248" height="76" rx="7" fill="#fff" opacity="0.7"/>
      {[0,1,2,3,4,5,6,7].map(i=>{const hh=[16,26,18,34,22,38,20,30][i]; return <rect key={i} x={70+i*28} y={152-hh} width="16" height={hh} rx="3" fill={a} opacity={.27+i*.06}/>})}
    </>),

    receipt: (<>
      <rect x="88" y="6" width="144" height="158" rx="8" fill="#fff" opacity="0.94"/>
      <rect x="88" y="6" width="144" height="5" fill={a} opacity="0.65"/>
      <rect x="122" y="20" width="72" height="10" rx="5" fill={a} opacity="0.38"/>
      <rect x="134" y="34" width="52" height="5" rx="2.5" fill={a} opacity="0.18"/>
      {[0,1,2,3,4].map(i=>(
        <g key={i}>
          <rect x="98" y={54+i*18} width={[78,58,94,68,54][i]} height="5" rx="2.5" fill={a} opacity="0.22"/>
          <rect x="206" y={54+i*18} width="18" height="5" rx="2.5" fill={a} opacity="0.4"/>
        </g>
      ))}
      <rect x="98" y="150" width="124" height="1" fill={a} opacity="0.2"/>
      <rect x="164" y="157" width="62" height="6" rx="3" fill={a} opacity="0.55"/>
      <path d="M88 6 L88 164" stroke={a} strokeWidth="1" strokeDasharray="4 3" opacity="0.18"/>
      <path d="M232 6 L232 164" stroke={a} strokeWidth="1" strokeDasharray="4 3" opacity="0.18"/>
    </>),

    reporoom: (<>
      <rect x="0" y="0" width="56" height={h} fill={a} opacity="0.1"/>
      {[14,34,54,74].map((y,i)=><rect key={i} x="9" y={y} width="38" height="8" rx="4" fill={a} opacity={i===0?.58:.2}/>)}
      <rect x="64" y="10" width="244" height="26" rx="6" fill="#fff" opacity="0.72"/>
      <rect x="72" y="18" width="56" height="6" rx="3" fill={a} opacity="0.42"/>
      <rect x="64" y="46" width="118" height="114" rx="7" fill="#fff" opacity="0.7"/>
      <rect x="72" y="56" width="76" height="5" rx="2.5" fill={a} opacity="0.35"/>
      {[0,1,2,3,4].map(i=><rect key={i} x="72" y={68+i*13} width={[96,68,86,56,76][i]} height="4" rx="2" fill={a} opacity={.17+i*.03}/>)}
      <rect x="190" y="46" width="118" height="114" rx="7" fill="#fff" opacity="0.7"/>
      <rect x="198" y="56" width="58" height="5" rx="2.5" fill={a} opacity="0.35"/>
      {[0,1,2].map(i=><rect key={i} x="198" y={68+i*13} width={[76,52,68][i]} height="4" rx="2" fill={a} opacity={.17+i*.04}/>)}
      <rect x="198" y="114" width="102" height="28" rx="6" fill={a} opacity="0.14"/>
      <rect x="206" y="122" width="46" height="7" rx="3.5" fill={a} opacity="0.48"/>
    </>),

    chatflow: (<>
      <rect x="0" y="0" width="56" height={h} fill={a} opacity="0.1"/>
      {[12,32,52,72].map((y,i)=><circle key={i} cx="28" cy={y} r="9" fill={a} opacity={i===0?.52:.18}/>)}
      <rect x="64" y="8" width="244" height="154" rx="9" fill="#fff" opacity="0.75"/>
      {[
        {x:72,y:18,w:110,m:false},{x:72,y:38,w:82,m:false},
        {x:182,y:60,w:106,m:true},{x:182,y:80,w:76,m:true},
        {x:72,y:102,w:124,m:false},{x:182,y:126,w:96,m:true},
      ].map((b,i)=><rect key={i} x={b.x} y={b.y} width={b.w} height="13" rx="6.5" fill={b.m?a:'#E5E7EB'} opacity={b.m?.72:.58}/>)}
    </>),

    docverse: (<>
      <rect x="0" y="0" width="60" height={h} fill={a} opacity="0.1"/>
      {[12,32,52,72,92].map((y,i)=>(
        <g key={i}><rect x="7" y={y} width="24" height="18" rx="3" fill={a} opacity={i===1?.52:.18}/>
        <rect x="9" y={y+6} width="20" height="2" rx="1" fill="#fff" opacity="0.5"/></g>
      ))}
      <rect x="68" y="8" width="240" height="154" rx="7" fill="#fff" opacity="0.78"/>
      <rect x="76" y="18" width="150" height="8" rx="4" fill={a} opacity="0.38"/>
      <rect x="76" y="30" width="100" height="5" rx="2.5" fill={a} opacity="0.18"/>
      {[0,1,2,3,4,5,6].map(i=><rect key={i} x="76" y={44+i*12} width={[190,172,198,162,188,152,176][i]} height="4" rx="2" fill={a} opacity="0.13"/>)}
    </>),

    fileshare: (<>
      <circle cx="160" cy="76" r="36" fill={a} opacity="0.11"/>
      <circle cx="160" cy="76" r="22" fill={a} opacity="0.18"/>
      <rect x="143" y="69" width="34" height="14" rx="7" fill={a} opacity="0.58"/>
      {[[60,132],[260,132],[160,22]].map(([cx,cy],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy} r="18" fill="#fff" opacity="0.8"/>
          <circle cx={cx} cy={cy} r="10" fill={a} opacity="0.28"/>
          <line x1="160" y1="76" x2={cx} y2={cy} stroke={a} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.32"/>
        </g>
      ))}
      <rect x="108" y="140" width="104" height="18" rx="9" fill={a} opacity="0.14"/>
      <rect x="118" y="145" width="84" height="7" rx="3.5" fill={a} opacity="0.38"/>
    </>),

    tvremote: (<>
      <rect x="72" y="8" width="176" height="150" rx="16" fill="#1a1a2e" opacity="0.88"/>
      <rect x="82" y="20" width="156" height="82" rx="7" fill={a} opacity="0.14"/>
      <rect x="82" y="20" width="156" height="82" rx="7" fill="none" stroke={a} strokeWidth="1.5" opacity="0.28"/>
      <rect x="96" y="34" width="128" height="7" rx="3.5" fill={a} opacity="0.28"/>
      <rect x="96" y="46" width="92" height="5" rx="2.5" fill={a} opacity="0.16"/>
      <circle cx="160" cy="130" r="20" fill={a} opacity="0.16"/>
      <circle cx="160" cy="130" r="11" fill={a} opacity="0.32"/>
      <rect x="149" y="126" width="22" height="8" rx="4" fill="#fff" opacity="0.68"/>
      {[[124,130],[196,130],[160,112],[160,148]].map(([cx,cy],i)=>(
        <circle key={i} cx={cx} cy={cy} r="6" fill={a} opacity="0.2"/>
      ))}
    </>),

    prep: (<>
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
    </>),

    portal: (<>
      <rect x="0" y="0" width={w} height="32" fill={a} opacity="0.13"/>
      <rect x="12" y="11" width="88" height="10" rx="5" fill={a} opacity="0.45"/>
      <circle cx="300" cy="16" r="11" fill={a} opacity="0.22"/>
      {[0,1,2,3,4].map(i=>(
        <g key={i}>
          <rect x="12" y={44+i*24} width="296" height="18" rx="6" fill="#fff" opacity="0.78"/>
          <circle cx="24" cy={53+i*24} r="7" fill={a} opacity="0.28"/>
          <rect x="38" y={49+i*24} width={[80,100,70,90,60][i]} height="5" rx="2.5" fill={a} opacity="0.3"/>
          <rect x="210" y={49+i*24} width="36" height="8" rx="4" fill={a} opacity={[.65,.35,.5,.45,.55][i]}/>
        </g>
      ))}
    </>),

    exam: (<>
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
    </>),
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} fill="none" style={{ width:'100%', height:'100%', display:'block' }}>
      <rect width={w} height={h} fill={bg}/>
      {map[type] || null}
    </svg>
  )
}

/* ── 9 real projects ── */
const ALL = [
  { title:'StockWise',           cat:'Business',              type:'stock',     Icon:HiChartBar,             desc:'Stock and inventory management for small and medium businesses. Tracks products, suppliers, and stock levels.',          tags:['Inventory','Business'],       accent:'#009955', accentBg:'#EDFFF7' },
  { title:'Receipt Generator',   cat:'Business',              type:'receipt',   Icon:HiDocumentText,         desc:'A fast receipt creation tool for businesses. Create, customise, and export professional receipts.',                      tags:['Business Tool','Receipts'],   accent:'#D97706', accentBg:'#FFFBEB' },
  { title:'RepoRoom',            cat:'Development',           type:'reporoom',  Icon:HiCodeBracket,          desc:'Developer workspace with GitHub integration, organisation management, and live video calls with screen sharing.',       tags:['GitHub','Collaboration'],     accent:C.violet500, accentBg:C.violetLight },
  { title:'ChatFlow',            cat:'Communication & Tools', type:'chatflow',  Icon:HiChatBubbleLeftRight,  desc:'Chat with just a username — no sign-up. Supports text messaging and video calls for quick temporary collaborations.',   tags:['Chat','Video Call'],          accent:C.blue500, accentBg:C.blue50 },
  { title:'DocVerse',            cat:'Communication & Tools', type:'docverse',  Icon:HiDocument,             desc:'A clean, ad-free document viewer. Read PDFs, manuals, hymn books, and other documents without distractions.',          tags:['Documents','No Ads'],         accent:'#B45309', accentBg:'#FFFBEB' },
  { title:'File Share',          cat:'Communication & Tools', type:'fileshare', Icon:HiShare,                desc:'Share files via hosted links with QR codes, temporary URLs, and live peer-to-peer transfer.',                         tags:['QR Code','File Transfer'],    accent:'#0284C7', accentBg:'#EFF9FF' },
  { title:'Prep4JAMB',           cat:'Education',             type:'prep',      Icon:HiAcademicCap,          desc:'A UTME practice platform for schools. Students sit timed exams by subject, track scores, and review answers.',         tags:['Education','UTME'],           accent:'#059669', accentBg:'#ECFDF5' },
  { title:'School Results Portal',cat:'Education',            type:'portal',    Icon:HiBuildingLibrary,      desc:'A school portal for e-results, student records, and report cards — accessible to staff and parents.',                  tags:['Portal','Education'],         accent:'#DC2626', accentBg:'#FEF2F2' },
  { title:'School Exam System',  cat:'Education',             type:'exam',      Icon:HiClipboardDocumentList,desc:'A terminal exam platform for schools. Run end-of-term exams digitally with automatic marking across subjects.',        tags:['Exam System','Schools'],      accent:'#7C3AED', accentBg:'#F5F0FF' },
]

const CATS = ['All', 'Business', 'Education', 'Development', 'Communication & Tools']

/* ── Card ── */
function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
      transition={{ duration:0.42, delay:i*0.06, ease:[0.22,1,0.36,1] }}
      style={{ background:'#fff', borderRadius:18, border:`1px solid ${C.border}`, boxShadow:S.card, overflow:'hidden', display:'flex', flexDirection:'column', transition:'box-shadow 0.22s, transform 0.22s' }}
      onMouseEnter={e=>{ e.currentTarget.style.boxShadow=`0 8px 32px ${p.accent}22, 0 2px 8px rgba(0,0,0,0.05)`; e.currentTarget.style.transform='translateY(-4px)' }}
      onMouseLeave={e=>{ e.currentTarget.style.boxShadow=S.card; e.currentTarget.style.transform='none' }}
    >
      <div style={{ height:155, overflow:'hidden', background:p.accentBg, flexShrink:0, position:'relative' }}>
        <Visual type={p.type} accent={p.accent} bg={p.accentBg}/>
        <span style={{ position:'absolute', top:12, left:12, padding:'4px 11px', borderRadius:6, fontSize:11, fontWeight:600, fontFamily:F.head, color:'#fff', background:p.accent }}>
          {p.cat}
        </span>
      </div>
      <div style={{ padding:'18px 20px 22px', flex:1, display:'flex', flexDirection:'column' }}>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
          <div style={{ width:34, height:34, borderRadius:9, background:p.accentBg, border:`1px solid ${p.accent}28`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
            <p.Icon size={16} style={{ color:p.accent }}/>
          </div>
          <h3 style={{ fontFamily:F.head, fontWeight:700, fontSize:16, color:C.ink, lineHeight:1.2 }}>{p.title}</h3>
        </div>
        <p style={{ fontSize:13, lineHeight:1.75, color:C.body, flex:1, marginBottom:14 }}>{p.desc}</p>
        <div style={{ display:'flex', flexWrap:'wrap', gap:5 }}>
          {p.tags.map(t=>(
            <span key={t} style={{ padding:'3px 9px', borderRadius:5, fontSize:11, fontWeight:600, fontFamily:F.head, background:p.accentBg, border:`1px solid ${p.accent}30`, color:p.accent }}>{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ── "And many more" card ── */
function MoreCard({ i, wide = false }) {
  return (
    <motion.div
      initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }}
      transition={{ duration:0.42, delay:i*0.06, ease:[0.22,1,0.36,1] }}
      style={{
        borderRadius:18, border:`1.5px dashed ${C.blue200}`,
        background:`linear-gradient(145deg, ${C.blue50} 0%, ${C.violetLight} 100%)`,
        display:'flex',
        flexDirection: wide ? 'row' : 'column',
        alignItems:'center',
        justifyContent: wide ? 'space-between' : 'center',
        padding: wide ? '36px 56px' : '36px 28px',
        textAlign: wide ? 'left' : 'center',
        minHeight: wide ? 120 : 280,
        gap: wide ? 32 : 0,
      }}
    >
      {/* Dots */}
      <div style={{ display:'flex', gap:8, marginBottom: wide ? 0 : 20, flexShrink:0 }}>
        {[C.blue500, C.violet500, '#009955'].map((c,j)=>(
          <div key={j} className="anim-pulse" style={{ width:10, height:10, borderRadius:'50%', background:c, animationDelay:`${j*0.4}s` }}/>
        ))}
      </div>

      {/* Text */}
      <div style={{ flex: wide ? 1 : 'unset' }}>
        <p style={{ fontFamily:F.head, fontWeight:800, fontSize: wide ? 22 : 20, color:C.ink, marginBottom: wide ? 6 : 10, letterSpacing:'-0.02em' }}>
          And many more.
        </p>
        <p style={{ fontSize:13, lineHeight:1.7, color:C.body, maxWidth: wide ? 420 : 200, marginBottom: wide ? 0 : 24 }}>
          These are just some of the products we've built. Have something in mind?
        </p>
      </div>

      {/* CTA */}
      <Link
        to="/contact"
        style={{
          display:'inline-flex', alignItems:'center', gap:6, flexShrink:0,
          padding:'10px 22px', borderRadius:10,
          fontSize:13, fontWeight:700, fontFamily:F.head,
          color:'#fff', background:G.brand,
          boxShadow:S.btn, textDecoration:'none',
          marginTop: wide ? 0 : 0,
        }}
      >
        Let's Build Something
      </Link>
    </motion.div>
  )
}

/* ── Main component ── */
export default function Projects() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? ALL : ALL.filter(p => p.cat === active)

  // Always pad to a multiple of 3, last slot = MoreCard
  const rem = filtered.length % 3
  // rem === 0: MoreCard starts a new row alone → wide banner spanning full width
  // rem === 1: 1 result → MoreCard in col 2, same row → normal card, no centring
  // rem === 2: 2 results → MoreCard in col 3, same row → normal card
  const centred = rem === 0 && filtered.length > 0
  const spacers = 0 // no invisible spacers needed with new layout logic

  return (
    <Section bg="#fff">
      {/* Filters */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:36 }}>
        {CATS.map(c=>(
          <button key={c} onClick={()=>setActive(c)} style={{
            padding:'7px 16px', borderRadius:10, fontSize:13, fontWeight:600,
            fontFamily:F.head, cursor:'pointer', transition:'all 0.18s', border:'none',
            background: active===c ? C.blue500 : C.bg,
            color: active===c ? '#fff' : C.body,
            outline: active===c ? 'none' : `1px solid ${C.border}`,
            boxShadow: active===c ? S.btn : 'none',
          }}>
            {c}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.18 }}
          className="proj-full-grid"
          style={{
            // 1 result: 2 cards on same row, auto-sized, left-aligned
            // 2 results: 3 cards on same row, auto-sized, left-aligned
            // 3+ results: normal 3-col grid
            gridTemplateColumns: (filtered.length + 1) <= 3
              ? `repeat(${filtered.length + 1}, minmax(0, 340px))`
              : undefined,
            justifyContent: (filtered.length + 1) <= 3 ? 'start' : undefined,
          }}
        >
          {filtered.map((p,i)=><Card key={p.title} p={p} i={i}/>)}
          {centred
            ? <div style={{ gridColumn:'1 / -1' }}><MoreCard i={filtered.length} wide /></div>
            : <MoreCard i={filtered.length} />
          }
        </motion.div>
      </AnimatePresence>

      <style>{`
        .proj-full-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(14px, 2.2vw, 22px);
        }
        @media (max-width: 900px) { .proj-full-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 540px) { .proj-full-grid { grid-template-columns: 1fr; } }
      `}</style>
    </Section>
  )
}
