import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUp, Linkedin, Twitter, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

const serviceLinks = [
  { label: 'Sage Business Solutions', path: '/services#sage' },
  { label: 'GIS Solutions', path: '/services#gis' },
  { label: 'Custom Software', path: '/services#software' },
  { label: 'ICT Infrastructure', path: '/services#infrastructure' },
  { label: 'Cloud Services', path: '/services#cloud' },
  { label: 'Cybersecurity', path: '/services#cybersecurity' },
  { label: 'Managed IT Services', path: '/services#managed-it' },
  { label: 'Digital Transformation', path: '/services#digital' },
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
            <div className="flex gap-4">
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
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/logo-wide.png"
                alt="Olimem Enterprise Solutions"
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Zimbabwe's trusted partner for Sage business solutions, GIS intelligence, custom software development and enterprise technology consulting since 2006.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: 'https://linkedin.com/company/olimem-enterprise-solutions', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://twitter.com/OlimemT', label: 'Twitter' },
                { icon: Facebook, href: 'https://facebook.com/olimemEnterpriseSolutions', label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-green-primary rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-green-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-primary rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-green-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-green-primary rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Two offices */}
          <div>
            <h4 className="text-white font-semibold font-poppins mb-5">Our Offices</h4>

            {/* Harare */}
            <div className="mb-6">
              <div className="text-green-primary text-xs font-bold uppercase tracking-widest mb-3">
                Harare Office
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <MapPin size={14} className="text-green-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-400">
                    3rd Floor, Exploration House<br />
                    145 R. Mugabe Way / 5th Street<br />
                    Harare, Zimbabwe
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone size={14} className="text-green-primary mt-0.5 shrink-0" />
                  <div className="text-xs text-gray-400">
                    <a href="tel:+263779382965" className="block hover:text-green-primary transition-colors">+263 77 938 2965</a>
                    <a href="tel:+2638688006970" className="block hover:text-green-primary transition-colors">+263 868 800 6970/3</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail size={14} className="text-green-primary mt-0.5 shrink-0" />
                  <a href="mailto:olimemtc@gmail.com" className="text-xs text-gray-400 hover:text-green-primary transition-colors">
                    olimemtc@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Bulawayo */}
            <div>
              <div className="text-green-primary text-xs font-bold uppercase tracking-widest mb-3">
                Bulawayo Office
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <MapPin size={14} className="text-green-primary mt-0.5 shrink-0" />
                  <span className="text-xs text-gray-400">
                    Fidelity Life Centre<br />
                    1st Floor, Suite 110<br />
                    Cnr Fife Street / 11th Avenue<br />
                    Bulawayo, Zimbabwe
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail size={14} className="text-green-primary mt-0.5 shrink-0" />
                  <a href="mailto:olimembulawayo@gmail.com" className="text-xs text-gray-400 hover:text-green-primary transition-colors">
                    olimembulawayo@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div className="mt-5 flex gap-3">
              <Clock size={14} className="text-green-primary mt-0.5 shrink-0" />
              <div className="text-xs text-gray-400">
                <div>Mon – Fri: 8:00 AM – 5:00 PM</div>
                <div>Saturday: 8:00 AM – 1:00 PM</div>
              </div>
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
            <button
              onClick={scrollToTop}
              className="w-9 h-9 bg-green-primary hover:bg-green-secondary rounded-lg flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
