import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUp, Globe } from 'lucide-react'
import { companyInfo, services } from '../../data/siteData'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-dark text-gray-300">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-green-primary to-blue-accent">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white font-poppins">Ready to Transform Your Business?</h3>
              <p className="text-white/80 mt-1">Talk to our experts. Your first consultation is free.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-white text-green-primary font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Book Free Consultation
              </Link>
              <Link to="/services" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-5">
              <img src="/logo-wide.png" alt="Olimem Enterprise Solutions" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Zimbabwe's certified Sage Gold Partner for enterprise technology, GIS intelligence and custom software development since 2006.
            </p>
            {/* Sage Gold Partner badge — Sage style */}
            <div className="inline-flex items-center gap-2 bg-black border border-green-primary rounded-lg px-3 py-2">
              <span className="text-green-primary font-bold text-sm" style={{ fontFamily: 'Georgia, serif' }}>Sage</span>
              <div className="w-px h-5 bg-gray-600" />
              <div>
                <div className="text-white text-[10px] font-semibold leading-none">Business Partner</div>
                <div className="text-green-primary text-[10px] font-bold leading-none mt-0.5">Gold</div>
              </div>
            </div>
          </div>

          {/* Quick links + Services */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-green-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-primary rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold font-poppins mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={`/services#${s.id}`} className="text-sm text-gray-400 hover:text-green-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-primary rounded-full" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bulawayo HQ + Harare */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Zimbabwe Offices</h4>

            {/* Bulawayo HQ */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-primary text-xs font-bold uppercase tracking-widest">Bulawayo</span>
                <span className="text-[10px] bg-green-primary text-white px-2 py-0.5 rounded-full font-semibold">HQ</span>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <MapPin size={13} className="text-green-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-400">1st Floor, Suite 110, Fidelity Life Centre<br />Cnr 11th Ave & Fife Street, Bulawayo</span>
                </div>
                <div className="flex gap-3">
                  <Phone size={13} className="text-green-primary mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-400">
                    <a href="tel:+2638688006971" className="block hover:text-green-primary transition-colors">+263 868 800 6971–4</a>
                    <a href="tel:+263774163183" className="block hover:text-green-primary transition-colors">0774 163 183</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail size={13} className="text-green-primary mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-400">
                    <a href="mailto:olimemtc@gmail.com" className="block hover:text-green-primary transition-colors">olimemtc@gmail.com</a>
                    <a href="mailto:olimembulawayo@gmail.com" className="block hover:text-green-primary transition-colors">olimembulawayo@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Harare */}
            <div>
              <div className="text-green-primary text-xs font-bold uppercase tracking-widest mb-3">Harare</div>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <MapPin size={13} className="text-green-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-400">3rd Floor, Suite 305, Exploration House<br />145 R. Mugabe Way / 5th Street, Harare</span>
                </div>
                <div className="flex gap-3">
                  <Mail size={13} className="text-green-primary mt-0.5 shrink-0" />
                  <a href="mailto:olimemtc@gmail.com" className="text-xs text-gray-400 hover:text-green-primary transition-colors">olimemtc@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-3 pt-4 border-t border-gray-800">
              <Clock size={13} className="text-green-primary mt-0.5 shrink-0" />
              <div className="text-xs text-gray-400">
                <div>Mon – Fri: 8:00 AM – 4:30 PM</div>
                <div>Saturday & Sunday: Closed</div>
              </div>
            </div>
          </div>

          {/* Zambia */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Zambia Office</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={13} className="text-green-primary mt-0.5 shrink-0" />
                <span className="text-xs text-gray-400">Stand No. 3536<br />Ibex Main Street<br />Lusaka, Zambia</span>
              </div>
              <div className="flex gap-3">
                <Phone size={13} className="text-green-primary mt-0.5 shrink-0" />
                <div className="text-xs text-gray-400">
                  <a href="tel:+260777023051" className="block hover:text-green-primary transition-colors">+260 777 023051</a>
                  <a href="tel:+260977929706" className="block hover:text-green-primary transition-colors">+260 977 929706</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={13} className="text-green-primary mt-0.5 shrink-0" />
                <div className="text-xs text-gray-400">
                  <a href="mailto:veronica.kawaka@olimement.com" className="block hover:text-green-primary transition-colors">veronica.kawaka@olimement.com</a>
                  <a href="mailto:olimemzambiasales@gmail.com" className="block hover:text-green-primary transition-colors">olimemzambiasales@gmail.com</a>
                </div>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-gray-800 flex gap-3 items-center">
              <Globe size={13} className="text-green-primary shrink-0" />
              <a href="https://www.olimement.com" target="_blank" rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-green-primary transition-colors">
                www.olimement.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Olimem Enterprise Solutions (Pvt) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-green-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-green-primary transition-colors">Terms of Use</Link>
            <button onClick={scrollToTop}
              className="w-9 h-9 bg-green-primary hover:bg-green-secondary rounded-lg flex items-center justify-center transition-colors"
              aria-label="Back to top">
              <ArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
