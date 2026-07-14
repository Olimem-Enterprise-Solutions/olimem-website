import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, MapPin, Monitor, Cloud, Shield, Settings, Calculator } from 'lucide-react'

const highlights = [
  'Sage Certified Partner',
  'GIS Intelligence',
  'Custom Software',
  'Pan-African Reach',
]

const serviceCards = [
  {
    icon: Calculator,
    label: 'Sage Solutions',
    desc: 'Pastel · Payroll · Evolution',
    color: 'from-green-primary to-green-secondary',
  },
  {
    icon: MapPin,
    label: 'GIS Services',
    desc: 'Mapping · Spatial Analysis',
    color: 'from-blue-accent to-blue-600',
  },
  {
    icon: Monitor,
    label: 'Custom Software',
    desc: 'ERP · CRM · Web · Mobile',
    color: 'from-purple-600 to-blue-accent',
  },
  {
    icon: Cloud,
    label: 'Cloud Services',
    desc: 'Microsoft 365 · Migration',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    label: 'Cybersecurity',
    desc: 'Assessments · Monitoring',
    color: 'from-red-500 to-red-700',
  },
  {
    icon: Settings,
    label: 'Managed IT',
    desc: 'Support · Infrastructure',
    color: 'from-teal-500 to-green-primary',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-dark pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-green-primary/5 rounded-full animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-accent/5 rounded-full animate-blob-delay" />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#5BC236 1px, transparent 1px), linear-gradient(90deg, #5BC236 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left content — Sage-focused headline */}
          <div>
            <div className="tag-badge mb-6 inline-flex">
              Sage Gold Partner — Zimbabwe & Africa
            </div>

            <h1 className="section-heading text-gray-900 dark:text-white mb-6 text-balance">
              Zimbabwe's{' '}
              <span className="gradient-text">Sage Gold Partner</span>{' '}
              for Pastel, Payroll & Evolution — Plus GIS & Custom Software
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
              From Sage Pastel, Payroll and Evolution implementation, support and training, to GIS technologies and custom software development — Olimem helps organizations innovate, automate and grow.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle size={16} className="text-green-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Speak to Our Sage Gold Partner Team
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-secondary text-base px-8 py-4">
                Explore All Solutions
              </Link>
            </div>
          </div>

          {/* Right — Services Visual Grid with hover interactivity */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {serviceCards.map((service) => {
                const Icon = service.icon
                return (
                  <Link
                    key={service.label}
                    to={service.label === 'Sage Solutions' ? '/services#sage' : '/services'}
                    className="card-base p-4 flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon size={22} className="text-white" strokeWidth={1.75} />
                    </div>
                    <div className="font-bold text-xs text-gray-900 dark:text-white font-poppins leading-tight mb-1 group-hover:text-green-primary transition-colors">
                      {service.label}
                    </div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                      {service.desc}
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Olimem logo watermark below grid */}
            <div className="mt-6 flex justify-center">
              <img
                src="/logo-wide.png"
                alt="Olimem Enterprise Solutions"
                className="h-10 w-auto object-contain opacity-60 dark:opacity-40"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-lg animate-float">
              Sage Gold Partner
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
        <span className="text-xs">Scroll to explore</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-700 rounded-full" />
      </div>
    </section>
  )
}
