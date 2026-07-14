import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle, Calculator, MapPin, Monitor, Cloud, Shield, Server, Settings, Zap } from 'lucide-react'
import { services } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

const iconMap = {
  Calculator,
  MapPin,
  Monitor,
  Cloud,
  Shield,
  Server,
  Settings,
  Zap,
}

export default function Services() {
  const location = useLocation()
  useScrollReveal()

  useEffect(() => {
    document.title = 'Enterprise Technology Services | Olimem Enterprise Solutions'
    const hash = location.hash?.replace('#', '')
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [location])

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-primary/10 rounded-full animate-blob" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-accent/10 rounded-full animate-blob-delay" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="tag-badge mx-auto mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
            Our Services
          </div>
          <h1 className="section-heading text-white mb-6">
            End-to-End Enterprise Technology Solutions
          </h1>
          {/* Sage Gold Partner badge */}
          <div className="inline-flex items-center gap-3 bg-black border border-green-primary rounded-xl px-5 py-2.5 mt-4">
            <span className="text-green-primary font-bold text-base" style={{ fontFamily: 'Georgia, serif' }}>Sage</span>
            <div className="w-px h-6 bg-gray-600" />
            <div className="text-left">
              <div className="text-white text-xs font-semibold leading-none">Business Partner</div>
              <div className="text-green-primary text-xs font-bold leading-none mt-0.5">Gold</div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you need Sage accounting, GIS intelligence, custom software or managed IT — we deliver the complete technology stack your business needs to compete and grow.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <div className="py-16 bg-white dark:bg-dark">
        <div className="container-custom space-y-24">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
            <section key={service.id} id={service.id} className="reveal scroll-mt-24">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-4 shadow-lg`}>
                    {Icon && <Icon size={26} className="text-white" strokeWidth={1.75} />}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold font-poppins text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  {service.id === 'sage' && (
                    <div className="flex items-center gap-4 bg-black border border-green-primary rounded-xl px-4 py-3 mb-6">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-green-primary font-bold text-lg" style={{ fontFamily: 'Georgia, serif' }}>Sage</span>
                        <div className="w-px h-8 bg-gray-600" />
                        <div>
                          <div className="text-white text-xs font-semibold leading-none">Business Partner</div>
                          <div className="text-green-primary text-xs font-bold leading-none mt-0.5">Gold</div>
                        </div>
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        Olimem is a certified Sage Gold Partner — Zimbabwe's highest tier Sage accreditation for implementation, support and training.
                      </p>
                    </div>
                  )}

                  {service.industries && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">Industries Served</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((ind) => (
                          <span key={ind} className="px-3 py-1 bg-blue-accent/10 text-blue-accent rounded-lg text-xs font-medium">
                            {ind}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link to="/contact" className="btn-primary">
                    {service.cta} <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Sub-services grid */}
                <div className={`grid sm:grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  {service.subServices.map((sub) => (
                    <div key={sub.name} className="card-base p-5">
                      <h4 className="font-bold text-gray-900 dark:text-white font-poppins text-sm mb-3">{sub.name}</h4>
                      <ul className="space-y-1.5">
                        {sub.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                            <CheckCircle size={12} className="text-green-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {index < services.length - 1 && (
                <div className="border-b border-gray-100 dark:border-gray-800 mt-24" />
              )}
            </section>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-primary to-blue-accent py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">Our consultants will assess your business needs and recommend the best technology solution — at no charge.</p>
          <Link to="/contact" className="bg-white text-green-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
