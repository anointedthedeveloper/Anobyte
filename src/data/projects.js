// Curated from github.com/anointedthedeveloper — live deployments only.
// `featured` projects appear on the home page.
export const PROJECT_CATS = ['All', 'AI & Tools', 'Developer', 'Business', 'E-commerce', 'Education', 'Media']

export const PROJECTS = [
  {
    title: 'RepoRoom', cat: 'Developer', featured: true,
    desc: 'A modern real-time chat application powered by WebSockets, built for developer teams to collaborate.',
    stack: ['TypeScript', 'WebSockets', 'Real-time'],
    live: 'https://www.reporoom.site', repo: 'RepoRoom',
    accent: '#7530E0', accentBg: '#F2EEFF',
  },
  {
    title: 'ClientFlow', cat: 'Business', featured: true,
    desc: 'A complete customer relationship management system for tracking clients, deals and follow-ups in one place.',
    stack: ['TypeScript', 'CRM', 'Dashboard'],
    live: 'https://client-flow-dun.vercel.app', repo: 'ClientFlow',
    accent: '#3A5CE0', accentBg: '#EBF0FF',
  },
  {
    title: 'DocuMind AI', cat: 'AI & Tools', featured: true,
    desc: 'A document scanner that uses OCR (Optical Character Recognition) to scan documents and extract their text.',
    stack: ['TypeScript', 'OCR', 'AI'],
    live: 'https://docu-mind-ai-chi.vercel.app', repo: 'DocuMind-AI',
    accent: '#0284C7', accentBg: '#EFF9FF',
  },
  {
    title: 'mpng', cat: 'AI & Tools', featured: true,
    desc: 'An AI-powered, browser-based media editor for images and videos with real-time previews and intelligent processing.',
    stack: ['TypeScript', 'AI', 'Media Editing'],
    live: 'https://mpng.vercel.app', repo: 'mpng',
    accent: '#DB2777', accentBg: '#FDF2F8',
  },
  {
    title: 'ThreadVault', cat: 'E-commerce', featured: true,
    desc: 'A full-stack clothing brand platform combining e-commerce, brand identity and personalisation into one digital experience.',
    stack: ['TypeScript', 'E-commerce', 'Full-stack'],
    live: 'https://thread-vault.vercel.app', repo: 'ThreadVault',
    accent: '#B45309', accentBg: '#FFFBEB',
  },
  {
    title: 'WebLab IDE', cat: 'Developer', featured: true,
    desc: 'A browser-based code editor and development environment, backed by its own execution API.',
    stack: ['JavaScript', 'Python API', 'IDE'],
    live: 'https://weblabide.vercel.app', repo: 'WebLab-IDE',
    accent: '#059669', accentBg: '#ECFDF5',
  },
  {
    title: 'BloomCart', cat: 'E-commerce',
    desc: 'An online flower shop where customers browse, customise and order, and owners manage products, orders and deliveries.',
    stack: ['TypeScript', 'E-commerce', 'Admin tools'],
    live: 'https://bloom-cart-flower-shop.vercel.app', repo: 'BloomCart-Flower-Shop',
    accent: '#E11D48', accentBg: '#FFF1F2',
  },
  {
    title: 'ANAI', cat: 'AI & Tools',
    desc: 'A web-based AI agent IDE for working with AI agents directly in the browser.',
    stack: ['JavaScript', 'AI Agents', 'IDE'],
    live: 'https://anai-nu.vercel.app', repo: 'ANAI',
    accent: '#7C3AED', accentBg: '#F5F0FF',
  },
  {
    title: 'Streamarino', cat: 'Media',
    desc: 'A streaming web app for discovering and watching movies and shows, powered by its own companion API.',
    stack: ['JavaScript', 'Streaming', 'REST API'],
    live: 'https://streamarino.vercel.app', repo: 'Streamarino',
    accent: '#DC2626', accentBg: '#FEF2F2',
  },
  {
    title: 'PHIS Transcript Portal', cat: 'Education',
    desc: 'A school portal for managing and issuing student transcripts and academic records for Peter Harvard International Schools.',
    stack: ['JavaScript', 'Portal', 'Records'],
    live: 'https://phis-transcript-portal.vercel.app', repo: 'PHIS-Transcript-Portal',
    accent: '#1D4ED8', accentBg: '#EFF6FF',
  },
  {
    title: 'FinanceWise', cat: 'Business',
    desc: 'A personal and small-business finance app for tracking money in and out and understanding where it goes.',
    stack: ['TypeScript', 'Finance', 'Dashboard'],
    live: 'https://finance-wise-nine.vercel.app', repo: 'FinanceWise',
    accent: '#009955', accentBg: '#EDFFF7',
  },
  {
    title: 'LinkForge', cat: 'Developer',
    desc: 'A lightweight URL shortener built with FastAPI and Next.js that turns long URLs into short, shareable links with fast redirection.',
    stack: ['Next.js', 'FastAPI', 'Vercel'],
    live: 'https://link-forge-six.vercel.app', repo: 'LinkForge',
    accent: '#0891B2', accentBg: '#ECFEFF',
  },
]

export const GITHUB_PROFILE = 'https://github.com/anointedthedeveloper'
export const repoUrl = name => `${GITHUB_PROFILE}/${name}`
export const host = url => url.replace(/^https?:\/\//, '').replace(/\/$/, '')
