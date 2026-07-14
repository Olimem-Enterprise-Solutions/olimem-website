import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown, BookOpen, MapPin, Code2, Cloud, Shield, Zap } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'
import { serviceDepartments, services } from '../../data/siteData'

const deptIcons = { BookOpen, MapPin, Code2, Cloud, Shield, Zap }

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useDarkMode()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  const topLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Insights', path: '/insights' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo-wide.png" alt="Olimem Enterprise Solutions" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/' ? 'text-green-primary bg-green-primary/10' : 'text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5'}`}>
              Home
            </Link>

            {/* Services dropdown — department wise */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === '/services' ? 'text-green-primary bg-green-primary/10' : 'text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5'}`}
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-[520px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-5 z-50">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Services by Department
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceDepartments.map((dept) => {
                      const Icon = deptIcons[dept.icon]
                      const deptServices = services.filter(s => dept.services.includes(s.id))
                      return (
                        <div key={dept.name} className="group">
                          <div className="flex items-center gap-2 mb-2">
                            {Icon && <Icon size={14} className="text-green-primary" />}
                            <span className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                              {dept.name}
                            </span>
                          </div>
                          {deptServices.map(s => (
                            <Link
                              key={s.id}
                              to={`/services#${s.id}`}
                              className="block pl-5 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-green-primary transition-colors"
                            >
                              {s.title}
                            </Link>
                          ))}
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <Link to="/services" className="text-xs text-green-primary font-semibold hover:underline">
                      View All Services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {topLinks.slice(1).map(link => (
              <Link
                key={link.label}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-green-primary bg-green-primary/10' : 'text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsDark(!isDark)}
              className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-gray-600" />}
            </button>
            <Link to="/contact" className="hidden lg:flex btn-primary text-sm px-5 py-2.5">
              Book Consultation
            </Link>
            <button
              className="lg:hidden w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="container-custom py-4 space-y-1">
            <Link to="/" className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5">Home</Link>
            <div className="px-4 py-2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Services</div>
              {serviceDepartments.map(dept => (
                <div key={dept.name} className="mb-3">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 ml-2">{dept.name}</div>
                  {services.filter(s => dept.services.includes(s.id)).map(s => (
                    <Link
                      key={s.id}
                      to={`/services#${s.id}`}
                      className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-primary transition-colors"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            {topLinks.slice(1).map(link => (
              <Link key={link.label} to={link.path} className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <Link to="/contact" className="btn-primary w-full justify-center">Book Consultation</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
