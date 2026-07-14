import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 20, suffix: '+', label: 'Years of Experience' },
  { value: 9, suffix: '', label: 'Sage Products Supported' },
  { value: 7, suffix: '', label: 'Own Software Products' },
  { value: 3, suffix: '', label: 'Country Presence' },
]

const sectors = [
  'Government', 'Local Authorities', 'Education', 'Healthcare',
  'Manufacturing', 'Mining', 'Agriculture', 'Financial Services',
  'Telecommunications', 'NGOs & Development',
]

function CountUp({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [started, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-green-primary to-blue-accent py-16">
      <div className="container-custom text-white">

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="reveal">
              <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8" />

        {/* Sectors */}
        <p className="text-white/70 text-xs uppercase tracking-widest mb-4 text-center font-semibold">
          Sectors We Serve
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {sectors.map((sector) => (
            <span
              key={sector}
              className="px-4 py-1.5 bg-white/15 border border-white/25 rounded-full text-sm font-medium text-white hover:bg-white/25 transition-colors"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
