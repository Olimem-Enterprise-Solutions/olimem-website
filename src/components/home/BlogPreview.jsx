import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, MapPin, Code2, Cloud, Shield } from 'lucide-react'
import { blogPosts } from '../../data/siteData'

const categoryIcons = {
  'Sage Solutions': BookOpen,
  GIS: MapPin,
  'Software Development': Code2,
  Cloud: Cloud,
  Cybersecurity: Shield,
}

export default function BlogPreview() {
  const featured = blogPosts.find((p) => p.featured)
  const others = blogPosts.filter((p) => !p.featured).slice(0, 3)
  const FeaturedIcon = featured ? (categoryIcons[featured.category] || BookOpen) : BookOpen

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="tag-badge mb-4">News & Insights</div>
            <h2 className="section-heading text-gray-900 dark:text-white">
              Latest From Our Experts
            </h2>
          </div>
          <Link to="/insights" className="btn-secondary shrink-0">
            View All Articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured */}
          {featured && (
            <Link to={`/insights/${featured.id}`} className="reveal card-base p-0 overflow-hidden group row-span-2 flex flex-col">
              <div className="h-56 bg-gradient-to-br from-green-primary/15 to-blue-accent/15 dark:from-green-primary/10 dark:to-blue-accent/10 flex items-center justify-center shrink-0 group-hover:from-green-primary/25 group-hover:to-blue-accent/25 transition-all duration-300">
                <FeaturedIcon size={56} strokeWidth={1.25} className="text-green-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag-badge">{featured.category}</span>
                  <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} />{featured.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-3 group-hover:text-green-primary transition-colors leading-snug">
                  {featured.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-green-primary text-sm font-medium mt-6 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          )}

          {/* Others */}
          <div className="space-y-4">
            {others.map((post) => {
              const Icon = categoryIcons[post.category] || BookOpen
              return (
                <Link key={post.id} to={`/insights/${post.id}`} className="reveal card-base p-6 flex gap-5 items-start group hover:-translate-y-0.5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-primary/10 to-blue-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} strokeWidth={1.5} className="text-green-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-green-primary font-semibold">{post.category}</span>
                      <span className="text-xs text-gray-400">·</span>
                      <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={10} />{post.readTime}</span>
                    </div>
                    <h4 className="text-sm font-bold font-poppins text-gray-900 dark:text-white group-hover:text-green-primary transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
