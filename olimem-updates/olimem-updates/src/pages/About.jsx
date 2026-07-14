import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { stats, industries } from '../data/siteData'
import { useScrollReveal } from '../hooks/useScrollReveal'

const values = [
  { title: 'Innovation', icon: '💡', description: 'We constantly seek smarter ways to solve business challenges through technology.' },
  { title: 'Integrity', icon: '🤝', description: 'We build relationships on transparency, honesty and keeping our commitments.' },
  { title: 'Customer Success', icon: '🏆', description: 'Your success is our success. Every project is measured by the outcomes we create for you.' },
  { title: 'Excellence', icon: '⭐', description: 'We hold ourselves to the highest standards in everything we deliver.' },
  { title: 'Collaboration', icon: '🌍', description: 'We work as genuine partners, not just vendors — side by side with your team.' },
]

export default function About() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'About Olimem Enterprise Solutions | Zimbabwe Technology Partner'
  }, [])

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-green-primary/10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-accent/10 rounded-full" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="tag-badge mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>About Us</div>
              <h1 className="section-heading text-white mb-6">
                Africa's Trusted Enterprise Technology Partner
              </h1>
              <p className="text-gray-400 leading-relaxed">
                Olimem Enterprise Solutions (Pvt) Ltd is a leading Zimbabwean technology company delivering Sage business solutions, GIS intelligence, custom software development and comprehensive ICT services to organizations across Africa. Founded in 2006, we have over 21 years of combined expertise serving government, corporate and civil society clients.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/logo.png"
                alt="Olimem Enterprise Solutions"
                className="w-64 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal card-base p-8 border-t-4 border-green-primary">
              <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5BC236" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower African organizations with enterprise-grade technology solutions that drive efficiency, growth and competitive advantage — delivered with local expertise and global standards.
              </p>
            </div>
            <div className="reveal card-base p-8 border-t-4 border-blue-accent">
              <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2E3192" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To be the most trusted and impactful enterprise technology company in Africa, recognized for transforming organizations through innovation, excellence and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="tag-badge mx-auto mb-4">What We Stand For</div>
            <h2 className="section-heading text-gray-900 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, i) => (
              <div key={val.title} className="reveal card-base p-6 text-center hover:-translate-y-1" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-4xl mb-4">{val.icon}</div>
                <h3 className="font-bold font-poppins text-gray-900 dark:text-white mb-3">{val.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Message — moved here from homepage */}
      <section className="section-padding bg-gradient-to-br from-dark via-gray-900 to-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-accent/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo area */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-green-primary/20 to-blue-accent/20 rounded-3xl border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-primary to-green-secondary rounded-full mx-auto flex items-center justify-center text-5xl font-bold font-poppins text-white mb-4">
                      O
                    </div>
                    <div className="text-white font-bold font-poppins">Oliver Mugadza</div>
                    <div className="text-green-primary text-sm">Chief Executive Officer</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  21+ Years Leading
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="tag-badge mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
                Message from the CEO
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 leading-tight">
                Technology That Transforms.{' '}
                <span className="text-green-primary">Partnerships That Last.</span>
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>
                  At Olimem, we believe that technology is not just a tool — it is the foundation upon which the next generation of African enterprises will be built.
                </p>
                <p>
                  When I founded this company, I saw a clear gap in the market: businesses across Zimbabwe and the broader African continent needed a trusted technology partner who understood both global best practices and the realities of operating in our unique market.
                </p>
                <p>
                  Over more than two decades, we have helped government agencies modernize their operations, helped NGOs deliver greater impact in the field, and helped private sector companies compete more effectively through the power of Sage business solutions, GIS intelligence and custom software.
                </p>
                <p>
                  Our commitment has never wavered: to deliver technology that genuinely transforms the way our clients operate — not just during implementation, but for years to come.
                </p>
                <p>
                  I am proud of the team we have built and deeply grateful for the trust our clients place in us every day. That trust drives everything we do.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="font-bold text-white font-poppins">Oliver Mugadza</div>
                <div className="text-green-primary text-sm">Chief Executive Officer</div>
                <div className="text-gray-500 text-xs mt-1">Olimem Enterprise Solutions (Pvt) Ltd</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="tag-badge mx-auto mb-4">Our Reach</div>
            <h2 className="section-heading text-gray-900 dark:text-white">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((industry, i) => (
              <div key={industry.name} className="reveal card-base p-6 text-center hover:-translate-y-1" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-poppins">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-primary to-blue-accent py-16">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold font-poppins mb-4">Ready to Work With Us?</h2>
          <p className="text-white/80 mb-8">Let's explore how Olimem can help your organisation innovate and grow.</p>
          <Link to="/contact" className="bg-white text-green-primary font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  )
}
