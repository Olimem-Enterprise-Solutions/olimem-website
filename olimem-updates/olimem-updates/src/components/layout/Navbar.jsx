import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { useDarkMode } from '../../hooks/useDarkMode'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Sage Business Solutions', path: '/services#sage' },
      { label: 'GIS Solutions', path: '/services#gis' },
      { label: 'Custom Software', path: '/services#software' },
      { label: 'ICT Infrastructure', path: '/services#infrastructure' },
      { label: 'Cloud Services', path: '/services#cloud' },
      { label: 'Cybersecurity', path: '/services#cybersecurity' },
      { label: 'Managed IT Services', path: '/services#managed-it' },
      { label: 'Digital Transformation', path: '/services#digital' },
    ],
  },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const [isDark, setIsDark] = useDarkMode()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(null)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-lg border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* Real Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo-wide.png"
              alt="Olimem Enterprise Solutions"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-green-primary bg-green-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5'
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {link.children && dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
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
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="container-custom py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-primary hover:bg-green-primary/5 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 space-y-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-xs text-gray-500 dark:text-gray-400 hover:text-green-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800">
              <Link to="/contact" className="btn-primary w-full justify-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
