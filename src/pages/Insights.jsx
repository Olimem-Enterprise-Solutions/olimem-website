import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock, ArrowRight, X, ExternalLink, BookOpen, MapPin, Code2, Cloud, Shield } from 'lucide-react'
import Fuse from 'fuse.js'
import { useScrollReveal } from '../hooks/useScrollReveal'

const categoryIcons = {
  'Sage Solutions': BookOpen,
  GIS: MapPin,
  'Software Development': Code2,
  Cloud: Cloud,
  Cybersecurity: Shield,
  'Digital Transformation': Cloud,
  'Tech in Africa': Code2,
}

// Real articles — mix of Olimem-authored and curated external
const blogPosts = [
  {
    id: 1,
    title: "What's New in Sage Intacct 2026 Release 2?",
    category: 'Sage Solutions',
    date: '2026-05-12',
    excerpt: "Sage Intacct's 2026 R2 update introduces an AI Gateway compatible with Claude and Copilot, 3-way matching in AP Automation, enhanced billing group functionality, centralised inventory attachments and new fixed assets management tools.",
    featured: true,
    readTime: '6 min',
    externalUrl: 'https://www.pkfscs.co.uk/blog/sage-intacct-2026-r2/',
    source: 'PKF Smith Cooper Systems',
  },
  {
    id: 2,
    title: 'Sage Future 2026: Advancing Trusted AI for High-Performance Finance',
    category: 'Sage Solutions',
    date: '2026-05-01',
    excerpt: "Sage's 2026 vision centres on embedding trusted AI across its finance products, helping businesses automate workflows, improve accuracy and gain real-time financial visibility — with a focus on African and global markets.",
    featured: false,
    readTime: '5 min',
    externalUrl: 'https://www.sage.com/en-us/news/press-releases/2026/05/sage-future-2026-advancing-trusted-ai-for-high-performance-finance/',
    source: 'Sage Official',
  },
  {
    id: 3,
    title: "Masiyiwa's Cassava Partners Google Cloud for African AI Transformation",
    category: 'Tech in Africa',
    date: '2024-03-07',
    excerpt: "Strive Masiyiwa's Cassava Technologies has partnered with Google Cloud and Anthropic to deliver advanced cloud and cybersecurity solutions, bringing generative AI to African businesses across 31 countries.",
    featured: false,
    readTime: '4 min',
    externalUrl: 'https://www.newsday.co.zw/local-news/article/200024021/masiyiwas-cassava-partners-google-cloud',
    source: 'NewsDay Zimbabwe',
  },
  {
    id: 4,
    title: 'Liquid Strengthens Enterprise AI Offering With Microsoft Copilot Accreditation',
    category: 'Digital Transformation',
    date: '2026-07-02',
    excerpt: "Liquid Intelligent Technologies Zimbabwe has secured Microsoft Copilot Specialisation, enabling businesses to embed generative AI into Microsoft 365 environments including Word, Excel, Teams and Outlook.",
    featured: false,
    readTime: '4 min',
    externalUrl: 'https://allafrica.com/stories/202607020321.html',
    source: 'AllAfrica / New Zimbabwe',
  },
  {
    id: 5,
    title: 'Zimbabwe and Liquid Intelligent Technologies Launch Software Development Skills Hub',
    category: 'Tech in Africa',
    date: '2026-06-01',
    excerpt: "The Government of Zimbabwe has signed an MoU with Liquid Intelligent Technologies to establish a Software Developer Skills Hub, training young professionals in AI, cloud computing, cybersecurity and digital analytics.",
    featured: false,
    readTime: '5 min',
    externalUrl: 'https://efficacynews.africa/2026/06/01/zimbabwe-and-liquid-intelligent-technologies-launch-software-development-skills-hub/',
    source: 'Efficacy News Africa',
  },
  // Olimem-authored articles
  {
    id: 6,
    title: "Why Zimbabwe's Government Entities Must Migrate to the New Chart of Accounts",
    category: 'Sage Solutions',
    date: '2025-03-10',
    excerpt: "The New Chart of Accounts is now a requirement for all government entities in Zimbabwe. Olimem, as the pioneer implementor, breaks down what it means, why it matters and how to prepare for a smooth transition.",
    featured: false,
    readTime: '6 min',
    externalUrl: null,
    source: 'Olimem Enterprise Solutions',
  },
  {
    id: 7,
    title: 'oBilling: Solving Zimbabwe\'s USD Billing Challenge in Sage Evolution',
    category: 'Sage Solutions',
    date: '2025-02-14',
    excerpt: "In Zimbabwe's dual-currency environment, billing in USD within Sage Evolution was a challenge — until oBilling. Here's how our in-house add-on is transforming financial operations for local businesses.",
    featured: false,
    readTime: '5 min',
    externalUrl: null,
    source: 'Olimem Enterprise Solutions',
  },
  {
    id: 8,
    title: 'GIS for Local Government: How Rural District Councils Are Mapping Zimbabwe\'s Future',
    category: 'GIS',
    date: '2025-01-20',
    excerpt: "From Chipinge to Zibagwe, GIS technology is transforming how Zimbabwe's local authorities plan, manage resources and deliver services. We look at what's possible and what we've already built.",
    featured: false,
    readTime: '7 min',
    externalUrl: null,
    source: 'Olimem Enterprise Solutions',
  },
]

const categories = ['All', 'Sage Solutions', 'GIS', 'Digital Transformation', 'Tech in Africa', 'Software Development', 'Cloud', 'Cybersecurity']

export default function Insights() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  useScrollReveal()

  useEffect(() => {
    document.title = 'News & Insights | Olimem Enterprise Solutions'
  }, [])

  const fuse = useMemo(() => new Fuse(blogPosts, {
    keys: ['title', 'excerpt', 'category', 'source'],
    threshold: 0.35,
  }), [])

  const results = useMemo(() => {
    let list = query.length >= 2
      ? fuse.search(query).map((r) => r.item)
      : blogPosts
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }
    return list
  }, [query, activeCategory, fuse])

  const featured = results.find((p) => p.featured)
  const others = results.filter((p) => !p.featured)

  const handleArticleClick = (post) => {
    if (post.externalUrl) {
      window.open(post.externalUrl, '_blank', 'noopener noreferrer')
    }
  }

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24">
        <div className="container-custom text-center">
          <div className="tag-badge mx-auto mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>Knowledge Hub</div>
          <h1 className="section-heading text-white mb-6">News & Insights</h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Expert perspectives on Sage, GIS, enterprise software and digital transformation across Africa — from Olimem's team and curated industry sources.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
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
          <div className="flex flex-wrap gap-2 mb-12">
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
              <div className="text-5xl mb-4">📰</div>
              <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-2">No articles found</h3>
              <p className="text-gray-500">Try a different search term or category.</p>
            </div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <div
                  onClick={() => handleArticleClick(featured)}
                  className="reveal card-base p-0 overflow-hidden group flex flex-col md:flex-row mb-8 cursor-pointer hover:-translate-y-0.5 transition-all"
                >
                  <div className="md:w-2/5 h-48 md:h-auto bg-gradient-to-br from-green-primary/15 to-blue-accent/15 dark:from-green-primary/10 dark:to-blue-accent/10 flex items-center justify-center shrink-0 group-hover:from-green-primary/25 group-hover:to-blue-accent/25 transition-all duration-300">
                    {(() => { const Icon = categoryIcons[featured.category] || BookOpen; return <Icon size={56} strokeWidth={1.25} className="text-green-primary group-hover:scale-110 transition-transform duration-300" /> })()}
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="tag-badge">{featured.category}</span>
                      <span className="px-2 py-1 bg-green-primary text-white rounded-lg text-xs font-bold">Featured</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} />{featured.readTime} read</span>
                      {featured.externalUrl && (
                        <span className="text-xs text-blue-accent flex items-center gap-1"><ExternalLink size={10} />{featured.source}</span>
                      )}
                      {!featured.externalUrl && (
                        <span className="text-xs text-green-primary font-medium">Olimem Insight</span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4 group-hover:text-green-primary transition-colors leading-snug">
                      {featured.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-1">{featured.excerpt}</p>
                    <div className="flex items-center gap-2 text-green-primary font-medium group-hover:gap-3 transition-all">
                      {featured.externalUrl ? 'Read Full Article' : 'Read More'} <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map((post, i) => {
                  const Icon = categoryIcons[post.category] || BookOpen
                  return (
                    <div
                      key={post.id}
                      onClick={() => handleArticleClick(post)}
                      className="reveal card-base p-0 overflow-hidden group hover:-translate-y-1 flex flex-col cursor-pointer transition-all duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center group-hover:from-green-primary/10 group-hover:to-blue-accent/10 transition-all duration-300">
                        <Icon size={44} strokeWidth={1.25} className="text-green-primary/60 group-hover:text-green-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3 flex-wrap">
                          <span className="tag-badge text-[10px]">{post.category}</span>
                          <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                          {post.externalUrl && (
                            <span className="text-[10px] text-blue-accent flex items-center gap-1">
                              <ExternalLink size={9} />{post.source}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold font-poppins text-gray-900 dark:text-white mb-3 group-hover:text-green-primary transition-colors leading-snug flex-1 text-sm">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-1 text-green-primary text-xs font-medium mt-4 group-hover:gap-2 transition-all">
                          {post.externalUrl ? (
                            <><ExternalLink size={10} /> Read on {post.source}</>
                          ) : (
                            <>Read More <ArrowRight size={10} /></>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
