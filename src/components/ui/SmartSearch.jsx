import { useState, useMemo, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import { Search, X } from 'lucide-react'
import { services, faqs, portfolio, blogPosts } from '../../data/siteData'

// Build unified search corpus
const corpus = [
  ...services.map((s) => ({ type: 'Service', title: s.title, description: s.description, path: `/services#${s.id}`, icon: s.icon })),
  ...faqs.map((f) => ({ type: 'FAQ', title: f.question, description: f.answer, path: '/#faq', icon: '❓' })),
  ...portfolio.map((p) => ({ type: 'Portfolio', title: p.title, description: p.challenge, path: `/portfolio`, icon: '🏆' })),
  ...blogPosts.map((b) => ({ type: 'Article', title: b.title, description: b.excerpt, path: `/insights/${b.id}`, icon: '📖' })),
]

export default function SmartSearch({ placeholder = 'Search services, FAQs, projects...', className = '' }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  const fuse = useMemo(() => new Fuse(corpus, {
    keys: ['title', 'description'],
    threshold: 0.3,
    minMatchCharLength: 2,
  }), [])

  const results = useMemo(() => {
    if (query.length < 2) return []
    return fuse.search(query).slice(0, 8).map((r) => r.item)
  }, [query, fuse])

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const typeColors = {
    Service: 'bg-green-primary/10 text-green-primary',
    FAQ: 'bg-blue-accent/10 text-blue-accent',
    Portfolio: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
    Article: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600',
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => { setQuery(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-primary/30 focus:border-green-primary transition-colors"
          aria-label="Smart search"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setOpen(false); inputRef.current?.focus() }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center"
            aria-label="Clear search"
          >
            <X size={12} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden z-50 max-h-96 overflow-y-auto">
          {results.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              onClick={() => { setQuery(''); setOpen(false) }}
              className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-b border-gray-50 dark:border-gray-700/50 last:border-0"
            >
              <span className="text-xl shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[item.type]}`}>{item.type}</span>
                </div>
                <div className="font-medium text-gray-900 dark:text-white text-sm truncate">{item.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.description}</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {open && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6 text-center z-50">
          <p className="text-sm text-gray-500 dark:text-gray-400">No results for "{query}". Try a different search term.</p>
        </div>
      )}
    </div>
  )
}
