import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Zap } from 'lucide-react'

export default function LeadModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem('lead-modal-dismissed')
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismiss = () => {
    sessionStorage.setItem('lead-modal-dismissed', 'true')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-md w-full p-8 border border-gray-100 dark:border-gray-800">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="w-14 h-14 bg-gradient-to-br from-green-primary to-green-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          <Zap size={24} className="text-white" />
        </div>

        <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
          Ready to Transform Your Business?
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
          Discover how Olimem Enterprise Solutions can help your organisation leverage Sage business solutions, GIS intelligence, custom software and enterprise technology to innovate, automate and grow.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-8">
          {[
            'Sage Business Solutions',
            'GIS & Mapping',
            'Custom Software',
            'Digital Transformation',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
              <span className="w-1.5 h-1.5 bg-green-primary rounded-full shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Link
            to="/contact"
            onClick={dismiss}
            className="btn-primary w-full justify-center py-3.5"
          >
            Book Free Consultation
          </Link>
          <button
            onClick={dismiss}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors py-2"
          >
            Maybe Later
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <div className="text-2xl font-bold text-green-primary font-poppins">21+</div>
          <div className="text-xs text-gray-500 mt-0.5">Years of Enterprise Technology Experience</div>
        </div>
      </div>
    </div>
  )
}
