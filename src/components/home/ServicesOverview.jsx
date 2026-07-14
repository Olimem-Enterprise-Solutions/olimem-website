import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, MapPin, Code2, Server, Cloud, Shield, Settings, Zap } from 'lucide-react'
import { services } from '../../data/siteData'

const serviceIcons = {
  sage: BookOpen,
  gis: MapPin,
  software: Code2,
  infrastructure: Server,
  cloud: Cloud,
  cybersecurity: Shield,
  'managed-it': Settings,
  digital: Zap,
}

// Inline SVG illustrations — no internet needed, always render
function SageIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#f0fdf4" />
      {/* Desk */}
      <rect x="30" y="110" width="240" height="8" rx="3" fill="#86efac" />
      {/* Monitor */}
      <rect x="90" y="55" width="120" height="75" rx="6" fill="#fff" stroke="#5BC236" strokeWidth="2" />
      <rect x="95" y="60" width="110" height="60" rx="3" fill="#f0fdf4" />
      {/* Bar chart on screen */}
      <rect x="105" y="90" width="14" height="25" rx="2" fill="#5BC236" />
      <rect x="125" y="78" width="14" height="37" rx="2" fill="#2E3192" />
      <rect x="145" y="84" width="14" height="31" rx="2" fill="#92D23C" />
      <rect x="165" y="70" width="14" height="45" rx="2" fill="#5BC236" />
      {/* Monitor stand */}
      <rect x="143" y="130" width="14" height="10" rx="2" fill="#86efac" />
      <rect x="133" y="138" width="34" height="4" rx="2" fill="#86efac" />
      {/* Person left */}
      <circle cx="65" cy="72" r="14" fill="#fde68a" />
      <rect x="50" y="88" width="30" height="30" rx="6" fill="#2E3192" />
      {/* Person right */}
      <circle cx="235" cy="72" r="14" fill="#fca5a5" />
      <rect x="220" y="88" width="30" height="30" rx="6" fill="#5BC236" />
      {/* Speech bubble */}
      <rect x="60" y="45" width="55" height="22" rx="6" fill="#5BC236" />
      <polygon points="75,67 85,67 80,74" fill="#5BC236" />
      <rect x="67" y="51" width="12" height="3" rx="1" fill="white" />
      <rect x="67" y="57" width="20" height="3" rx="1" fill="white" />
      <text x="150" y="155" fontSize="9" fill="#86efac" textAnchor="middle">Sage Business Solutions</text>
    </svg>
  )
}

function GISIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#eff6ff" />
      {/* Map background */}
      <rect x="20" y="15" width="260" height="130" rx="8" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5" />
      {/* Roads */}
      <line x1="20" y1="80" x2="280" y2="80" stroke="#bfdbfe" strokeWidth="8" />
      <line x1="150" y1="15" x2="150" y2="145" stroke="#bfdbfe" strokeWidth="8" />
      <line x1="20" y1="40" x2="280" y2="120" stroke="#bfdbfe" strokeWidth="4" />
      {/* Land patches */}
      <rect x="30" y="25" width="60" height="45" rx="4" fill="#bbf7d0" opacity="0.7" />
      <rect x="110" y="90" width="70" height="40" rx="4" fill="#fde68a" opacity="0.7" />
      <rect x="200" y="25" width="70" height="55" rx="4" fill="#c7d2fe" opacity="0.6" />
      {/* Map pins */}
      <ellipse cx="100" cy="63" rx="6" ry="3" fill="#00000020" />
      <path d="M100 30 C87 30 80 40 80 50 C80 63 100 75 100 75 C100 75 120 63 120 50 C120 40 113 30 100 30Z" fill="#2E3192" />
      <circle cx="100" cy="50" r="7" fill="white" />
      <ellipse cx="170" cy="108" rx="6" ry="3" fill="#00000020" />
      <path d="M170 75 C157 75 150 85 150 95 C150 108 170 120 170 120 C170 120 190 108 190 95 C190 85 183 75 170 75Z" fill="#5BC236" />
      <circle cx="170" cy="95" r="7" fill="white" />
      <ellipse cx="240" cy="73" rx="6" ry="3" fill="#00000020" />
      <path d="M240 40 C227 40 220 50 220 60 C220 73 240 85 240 85 C240 85 260 73 260 60 C260 50 253 40 240 40Z" fill="#ef4444" />
      <circle cx="240" cy="60" r="7" fill="white" />
      {/* Compass */}
      <circle cx="45" cy="130" r="12" fill="white" stroke="#93c5fd" strokeWidth="1.5" />
      <text x="45" y="134" fontSize="12" fill="#2E3192" textAnchor="middle" fontWeight="bold">N</text>
      <text x="150" y="157" fontSize="9" fill="#93c5fd" textAnchor="middle">GIS & Location Intelligence</text>
    </svg>
  )
}

function SoftwareIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#faf5ff" />
      {/* Laptop */}
      <rect x="55" y="40" width="190" height="110" rx="8" fill="#1e1b4b" />
      <rect x="62" y="48" width="176" height="95" rx="4" fill="#0f0a2e" />
      {/* Code lines */}
      <rect x="72" y="58" width="40" height="5" rx="2" fill="#a78bfa" />
      <rect x="118" y="58" width="60" height="5" rx="2" fill="#5BC236" />
      <rect x="72" y="70" width="20" height="5" rx="2" fill="#fbbf24" />
      <rect x="98" y="70" width="80" height="5" rx="2" fill="#818cf8" />
      <rect x="184" y="70" width="30" height="5" rx="2" fill="#f87171" />
      <rect x="80" y="82" width="50" height="5" rx="2" fill="#5BC236" />
      <rect x="136" y="82" width="40" height="5" rx="2" fill="#a78bfa" />
      <rect x="72" y="94" width="30" height="5" rx="2" fill="#fbbf24" />
      <rect x="108" y="94" width="70" height="5" rx="2" fill="#5BC236" />
      <rect x="80" y="106" width="90" height="5" rx="2" fill="#818cf8" />
      <rect x="72" y="118" width="55" height="5" rx="2" fill="#f87171" />
      <rect x="133" y="118" width="35" height="5" rx="2" fill="#a78bfa" />
      {/* Cursor blink */}
      <rect x="174" y="118" width="3" height="9" rx="1" fill="white" opacity="0.8" />
      {/* Laptop base */}
      <rect x="30" y="148" width="240" height="6" rx="3" fill="#374151" />
      <text x="150" y="158" fontSize="9" fill="#c4b5fd" textAnchor="middle">Custom Software Development</text>
    </svg>
  )
}

function InfrastructureIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#fff7ed" />
      {/* Server rack */}
      <rect x="80" y="20" width="140" height="120" rx="6" fill="#374151" />
      {/* Server units */}
      {[30, 52, 74, 96, 118].map((y, i) => (
        <g key={i}>
          <rect x="88" y={y} width="124" height="18" rx="3" fill="#1f2937" />
          <circle cx="100" cy={y + 9} r="4" fill={i % 2 === 0 ? "#5BC236" : "#22c55e"} />
          <rect x="110" y={y + 6} width="50" height="3" rx="1" fill="#374151" />
          <rect x="110" y={y + 11} width="35" height="3" rx="1" fill="#374151" />
          <circle cx="200" cy={y + 9} r="3" fill="#f97316" />
          <circle cx="208" cy={y + 9} r="3" fill="#374151" />
        </g>
      ))}
      {/* Network lines */}
      <line x1="150" y1="140" x2="60" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="4" />
      <line x1="150" y1="140" x2="150" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="4" />
      <line x1="150" y1="140" x2="240" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="4" />
      <circle cx="60" cy="155" r="4" fill="#f97316" />
      <circle cx="150" cy="155" r="4" fill="#f97316" />
      <circle cx="240" cy="155" r="4" fill="#f97316" />
      <text x="150" y="10" fontSize="9" fill="#f97316" textAnchor="middle">ICT Infrastructure</text>
    </svg>
  )
}

function CloudIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#ecfeff" />
      {/* Main cloud */}
      <ellipse cx="150" cy="65" rx="80" ry="45" fill="white" stroke="#67e8f9" strokeWidth="2" />
      <ellipse cx="110" cy="75" rx="45" ry="35" fill="white" stroke="#67e8f9" strokeWidth="2" />
      <ellipse cx="190" cy="72" rx="50" ry="38" fill="white" stroke="#67e8f9" strokeWidth="2" />
      {/* Cloud icons inside */}
      <rect x="115" y="48" width="24" height="18" rx="3" fill="#0ea5e9" />
      <text x="127" y="61" fontSize="10" fill="white" textAnchor="middle">M</text>
      <rect x="146" y="48" width="24" height="18" rx="3" fill="#5BC236" />
      <text x="158" y="61" fontSize="10" fill="white" textAnchor="middle">☁</text>
      <rect x="130" y="70" width="24" height="18" rx="3" fill="#2E3192" />
      <text x="142" y="83" fontSize="10" fill="white" textAnchor="middle">🔒</text>
      {/* Rain lines — data flowing down */}
      {[80, 110, 140, 170, 200, 230].map((x, i) => (
        <line key={i} x1={x} y1="108" x2={x - 8} y2="130" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      {/* Devices receiving */}
      <rect x="55" y="130" width="40" height="25" rx="3" fill="#0ea5e9" />
      <rect x="130" y="132" width="40" height="23" rx="3" fill="#2E3192" />
      <rect x="205" y="130" width="40" height="25" rx="3" fill="#5BC236" />
      <text x="150" y="158" fontSize="9" fill="#67e8f9" textAnchor="middle">Cloud Services & Microsoft 365</text>
    </svg>
  )
}

function CybersecurityIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#fff1f2" />
      {/* Shield */}
      <path d="M150 15 L210 40 L210 95 C210 125 150 148 150 148 C150 148 90 125 90 95 L90 40 Z" fill="#2E3192" />
      <path d="M150 25 L200 46 L200 95 C200 119 150 138 150 138 C150 138 100 119 100 95 L100 46 Z" fill="#1e1b4b" />
      {/* Checkmark */}
      <polyline points="125,88 142,105 178,72" fill="none" stroke="#5BC236" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      {/* Orbiting dots */}
      <circle cx="150" cy="80" r="55" fill="none" stroke="#fca5a5" strokeWidth="1" strokeDasharray="4" />
      <circle cx="205" cy="80" r="6" fill="#ef4444" />
      <circle cx="95" cy="80" r="6" fill="#ef4444" />
      <circle cx="150" cy="25" r="6" fill="#ef4444" />
      <circle cx="150" cy="135" r="6" fill="#5BC236" />
      {/* Warning badges */}
      <circle cx="50" cy="50" r="14" fill="#ef4444" />
      <text x="50" y="55" fontSize="14" fill="white" textAnchor="middle">!</text>
      <circle cx="250" cy="50" r="14" fill="#ef4444" />
      <text x="250" y="55" fontSize="14" fill="white" textAnchor="middle">!</text>
      <text x="150" y="158" fontSize="9" fill="#fca5a5" textAnchor="middle">Cybersecurity & Compliance</text>
    </svg>
  )
}

function ManagedITIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#f0fdfa" />
      {/* Headset person */}
      <circle cx="150" cy="55" r="28" fill="#fde68a" />
      {/* Headset */}
      <path d="M122 55 C122 38 178 38 178 55" fill="none" stroke="#374151" strokeWidth="4" />
      <rect x="118" y="50" width="8" height="16" rx="4" fill="#374151" />
      <rect x="174" y="50" width="8" height="16" rx="4" fill="#374151" />
      {/* Mic */}
      <line x1="178" y1="62" x2="192" y2="75" stroke="#374151" strokeWidth="3" />
      <circle cx="195" cy="77" r="5" fill="#5BC236" />
      {/* Body */}
      <path d="M110 155 C110 120 190 120 190 155" fill="#2E3192" />
      {/* Floating icons */}
      <rect x="30" y="40" width="50" height="35" rx="6" fill="white" stroke="#5BC236" strokeWidth="1.5" />
      <text x="55" y="53" fontSize="16" textAnchor="middle">🖥️</text>
      <text x="55" y="68" fontSize="7" fill="#374151" textAnchor="middle">Monitor</text>
      <rect x="220" y="40" width="50" height="35" rx="6" fill="white" stroke="#5BC236" strokeWidth="1.5" />
      <text x="245" y="53" fontSize="16" textAnchor="middle">⚙️</text>
      <text x="245" y="68" fontSize="7" fill="#374151" textAnchor="middle">Manage</text>
      <rect x="30" y="90" width="50" height="35" rx="6" fill="white" stroke="#5BC236" strokeWidth="1.5" />
      <text x="55" y="103" fontSize="16" textAnchor="middle">📊</text>
      <text x="55" y="118" fontSize="7" fill="#374151" textAnchor="middle">Monitor</text>
      <rect x="220" y="90" width="50" height="35" rx="6" fill="white" stroke="#5BC236" strokeWidth="1.5" />
      <text x="245" y="103" fontSize="16" textAnchor="middle">🔧</text>
      <text x="245" y="118" fontSize="7" fill="#374151" textAnchor="middle">Support</text>
      <text x="150" y="158" fontSize="9" fill="#5eead4" textAnchor="middle">Managed IT Services</text>
    </svg>
  )
}

function DigitalIllustration() {
  return (
    <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="300" height="160" fill="#f0fdf4" />
      {/* Arrow path from left to right — transformation journey */}
      <path d="M30 100 C30 100 80 100 100 80 C120 60 130 40 150 40 C170 40 180 60 200 80 C220 100 260 80 270 60" fill="none" stroke="#5BC236" strokeWidth="4" strokeLinecap="round" />
      {/* Old way (left) */}
      <rect x="20" y="105" width="50" height="40" rx="4" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1.5" />
      <text x="45" y="122" fontSize="8" fill="#6b7280" textAnchor="middle">Paper</text>
      <text x="45" y="133" fontSize="8" fill="#6b7280" textAnchor="middle">Process</text>
      {/* Middle — gear transformation */}
      <circle cx="150" cy="40" r="22" fill="white" stroke="#5BC236" strokeWidth="2" />
      <circle cx="150" cy="40" r="12" fill="#5BC236" />
      <text x="150" y="45" fontSize="14" fill="white" textAnchor="middle">⚡</text>
      {/* New way (right) */}
      <rect x="230" y="65" width="50" height="40" rx="4" fill="#dcfce7" stroke="#5BC236" strokeWidth="1.5" />
      <text x="255" y="82" fontSize="8" fill="#15803d" textAnchor="middle">Digital</text>
      <text x="255" y="93" fontSize="8" fill="#15803d" textAnchor="middle">Workflow</text>
      {/* Progress dots */}
      {[60, 100, 140, 180, 220].map((x, i) => (
        <circle key={i} cx={x} cy={i < 3 ? 90 - i * 10 : 90 - (4 - i) * 10} r="5"
          fill={i < 4 ? "#5BC236" : "#e5e7eb"} />
      ))}
      {/* Team icons */}
      <circle cx="80" cy="140" r="10" fill="#fde68a" />
      <circle cx="105" cy="140" r="10" fill="#fca5a5" />
      <circle cx="130" cy="140" r="10" fill="#bfdbfe" />
      <text x="90" y="156" fontSize="7" fill="#374151" textAnchor="middle">Your Team + Olimem</text>
      <text x="150" y="8" fontSize="9" fill="#5BC236" textAnchor="middle">Digital Transformation</text>
    </svg>
  )
}

const serviceVisuals = {
  sage: SageIllustration,
  gis: GISIllustration,
  software: SoftwareIllustration,
  infrastructure: InfrastructureIllustration,
  cloud: CloudIllustration,
  cybersecurity: CybersecurityIllustration,
  'managed-it': ManagedITIllustration,
  digital: DigitalIllustration,
}

const serviceColors = {
  sage: 'from-green-primary to-green-secondary',
  gis: 'from-blue-accent to-blue-600',
  software: 'from-purple-600 to-blue-accent',
  infrastructure: 'from-orange-500 to-red-500',
  cloud: 'from-cyan-500 to-blue-500',
  cybersecurity: 'from-red-500 to-red-700',
  'managed-it': 'from-teal-500 to-green-primary',
  digital: 'from-green-primary to-blue-accent',
}

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="tag-badge mx-auto mb-4">What We Do</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            End-to-End Enterprise Technology Solutions
          </h2>
          <p className="section-subheading mx-auto text-center">
            From Sage accounting to GIS intelligence, custom software to cloud migration — we deliver the full stack of enterprise technology your business needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.id] || Settings
            const Illustration = serviceVisuals[service.id]
            const color = serviceColors[service.id]
            return (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="reveal card-base overflow-hidden group hover:-translate-y-2 hover:shadow-2xl flex flex-col transition-all duration-300"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* SVG Illustration header */}
                <div className="h-40 w-full overflow-hidden relative">
                  {Illustration && <Illustration />}
                  {/* Small icon badge bottom-left */}
                  <div className={`absolute bottom-3 left-3 w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                    <Icon size={15} className="text-white" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white font-poppins mb-2 leading-snug group-hover:text-green-primary transition-colors text-sm">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 text-green-primary text-xs font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
