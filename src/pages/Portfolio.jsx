import { useState, useMemo, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import Fuse from 'fuse.js'
import { portfolio } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = ['All', 'Sage Projects', 'GIS Projects', 'Custom Software', 'Infrastructure', 'Cloud', 'Cybersecurity']

export default function Portfolio() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  useScrollReveal()

  useEffect(() => {
    document.title = 'Portfolio | Olimem Enterprise Solutions'
  }, [])

  const fuse = useMemo(() => new Fuse(portfolio, {
    keys: ['title', 'client', 'industry', 'challenge', 'solution', 'results'],
    threshold: 0.35,
    minMatchCharLength: 2,
  }), [])

  const results = useMemo(() => {
    let list = query.length >= 2
      ? fuse.search(query).map((r) => r.item)
      : portfolio
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }
    return list
  }, [query, activeCategory, fuse])

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24">
        <div className="container-custom text-center">
          <div className="tag-badge mx-auto mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>Our Work</div>
          <h1 className="section-heading text-white mb-6">Project Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            From government GIS platforms to Sage ERP rollouts and custom enterprise applications — our portfolio spans sectors and scales.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by client, industry, or technology..."
              className="w-full pl-11 pr-10 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-primary/50 text-sm"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center">
                <X size={12} />
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-green-primary text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((project, i) => (
                <div key={project.id} className="reveal card-base p-6 hover:-translate-y-1 flex flex-col" style={{ transitionDelay: `${i * 50}ms` }}>
                  {/* Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="tag-badge">{project.category}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-lg">{project.industry}</span>
                  </div>

                  <h3 className="font-bold font-poppins text-gray-900 dark:text-white mb-1 leading-snug">{project.title}</h3>
                  <p className="text-xs text-green-primary font-medium mb-4">{project.client}</p>

                  <div className="space-y-3 flex-1">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Challenge</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">Solution</div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="bg-green-primary/5 dark:bg-green-primary/10 rounded-xl p-3">
                      <div className="text-xs font-semibold text-green-primary uppercase tracking-wide mb-1">Results</div>
                      <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">{project.results}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-primary to-blue-accent py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">Start Your Success Story</h2>
          <p className="text-white/80 mb-8">Let's discuss how we can deliver similar results for your organisation.</p>
          <Link to="/contact" className="bg-white text-green-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
