import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users2, Lightbulb, ShieldCheck, Star, Trophy, Target, Compass, Calculator, MapPin, Monitor, Cloud, Shield, Settings } from 'lucide-react'
import { Landmark, GraduationCap, Heart, Factory, ShoppingCart, Stethoscope, Wheat, Banknote, Radio, Truck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { vision, mission, coreValues, managingDirector } from '../data/siteData'

const valueIcons = { Users2, Lightbulb, ShieldCheck, Star, Trophy }

const serviceIcons = [
  { Icon: Calculator, label: 'Sage', color: 'from-green-primary to-green-secondary' },
  { Icon: MapPin, label: 'GIS', color: 'from-blue-accent to-blue-600' },
  { Icon: Monitor, label: 'Software', color: 'from-purple-600 to-blue-accent' },
  { Icon: Cloud, label: 'Cloud', color: 'from-cyan-500 to-blue-500' },
  { Icon: Shield, label: 'Security', color: 'from-red-500 to-red-700' },
  { Icon: Settings, label: 'Managed IT', color: 'from-teal-500 to-green-primary' },
]

const industryIcons = [
  { name: 'Government', Icon: Landmark, color: 'text-blue-accent bg-blue-accent/10 group-hover:bg-blue-accent group-hover:text-white' },
  { name: 'Education', Icon: GraduationCap, color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-600 group-hover:text-white' },
  { name: 'NGOs', Icon: Heart, color: 'text-red-500 bg-red-100 dark:bg-red-900/20 group-hover:bg-red-500 group-hover:text-white' },
  { name: 'Manufacturing', Icon: Factory, color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 group-hover:bg-orange-600 group-hover:text-white' },
  { name: 'Retail', Icon: ShoppingCart, color: 'text-pink-600 bg-pink-100 dark:bg-pink-900/20 group-hover:bg-pink-600 group-hover:text-white' },
  { name: 'Healthcare', Icon: Stethoscope, color: 'text-green-primary bg-green-primary/10 group-hover:bg-green-primary group-hover:text-white' },
  { name: 'Agriculture', Icon: Wheat, color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 group-hover:bg-yellow-600 group-hover:text-white' },
  { name: 'Financial Services', Icon: Banknote, color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/20 group-hover:bg-teal-600 group-hover:text-white' },
  { name: 'Telecommunications', Icon: Radio, color: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/20 group-hover:bg-cyan-600 group-hover:text-white' },
  { name: 'Logistics', Icon: Truck, color: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/20 group-hover:bg-indigo-600 group-hover:text-white' },
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
                Zimbabwe's Trusted Enterprise Technology Partner
              </h1>
              <p className="text-gray-400 leading-relaxed mb-6">
                Olimem Enterprise Solutions (Pvt) Ltd is a leading Sage Pastel Software Solutions provider with over 20 years of experience supporting accounting software systems across Zimbabwe and Southern Africa. As a certified Sage Gold Business Partner, we specialise in sales, support, training and implementation of Sage products.
              </p>
              {/* Sage Gold Partner badge — matches Sage branding */}
              <div className="inline-flex items-center gap-3 bg-black border-2 border-green-primary rounded-xl px-5 py-3">
                <div className="text-white font-bold text-lg tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  <span className="text-green-primary">Sage</span>
                </div>
                <div className="w-px h-8 bg-gray-600" />
                <div>
                  <div className="text-white text-xs font-semibold">Business Partner</div>
                  <div className="text-green-primary text-xs font-bold">Gold</div>
                </div>
              </div>
            </div>

            {/* Service icons grid */}
            <div className="grid grid-cols-3 gap-3">
              {serviceIcons.map(({ Icon, label, color }) => (
                <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-2 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white" strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-semibold text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="reveal card-base p-8 border-t-4 border-green-primary">
              <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Target size={24} className="text-green-primary" strokeWidth={1.75} />
              </div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">"{vision}"</p>
            </div>
            <div className="reveal card-base p-8 border-t-4 border-blue-accent">
              <div className="w-12 h-12 bg-blue-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Compass size={24} className="text-blue-accent" strokeWidth={1.75} />
              </div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">"{mission}"</p>
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
            {coreValues.map(({ title, description, icon }, i) => {
              const Icon = valueIcons[icon]
              return (
                <div key={title} className="reveal card-base p-6 text-center hover:-translate-y-1 group" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-12 h-12 bg-green-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-primary group-hover:scale-110 transition-all duration-300">
                    {Icon && <Icon size={22} className="text-green-primary group-hover:text-white transition-colors" strokeWidth={1.75} />}
                  </div>
                  <h3 className="font-bold font-poppins text-gray-900 dark:text-white mb-3 text-sm">{title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MD Message */}
      <section className="section-padding bg-gradient-to-br from-dark via-gray-900 to-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-accent/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-green-primary/20 to-blue-accent/20">
                  <img
                    src={managingDirector.photoPath}
                    alt={`${managingDirector.name}, ${managingDirector.title}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="w-full h-full flex-col items-center justify-center text-center p-8" style={{ display: 'none' }}>
                    <div className="w-24 h-24 bg-gradient-to-br from-green-primary to-green-secondary rounded-full mx-auto flex items-center justify-center text-5xl font-bold font-poppins text-white mb-4">
                      {managingDirector.name[0]}
                    </div>
                    <div className="text-white font-bold font-poppins">{managingDirector.name}</div>
                    <div className="text-green-primary text-sm">{managingDirector.title}</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                  20+ Years Experience
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="tag-badge mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
                Message from the Managing Director
              </div>
              <h2 className="text-3xl font-bold font-poppins mb-2">{managingDirector.name}</h2>
              <p className="text-green-primary text-sm mb-2">{managingDirector.title}</p>
              <p className="text-gray-500 text-xs mb-6">{managingDirector.credentials}</p>

              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                {managingDirector.message.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Industries */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="tag-badge mx-auto mb-4">Our Reach</div>
            <h2 className="section-heading text-gray-900 dark:text-white">Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industryIcons.map(({ name, Icon, color }, i) => (
              <div key={name} className="reveal card-base p-6 text-center hover:-translate-y-1 group" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${color}`}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-poppins leading-tight">{name}</div>
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
