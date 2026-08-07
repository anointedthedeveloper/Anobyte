import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center px-5" style={{ background: '#F8FAFC' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div
            className="text-8xl font-black font-heading mb-6"
            style={{
              background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </div>
          <h1 className="text-2xl font-bold font-heading mb-3" style={{ color: '#0F172A' }}>
            Page not found
          </h1>
          <p className="mb-8 leading-relaxed" style={{ color: '#475569' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all"
            style={{
              background: 'linear-gradient(135deg, #4B6EF5, #8B3FF5)',
              boxShadow: '0 4px 14px rgba(75,110,245,0.38)',
            }}
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
