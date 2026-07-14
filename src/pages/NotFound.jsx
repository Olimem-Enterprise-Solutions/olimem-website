import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-dark pt-20">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-6xl font-bold font-poppins text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold font-poppins text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
