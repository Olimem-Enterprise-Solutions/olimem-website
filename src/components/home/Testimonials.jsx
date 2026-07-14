import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="section-padding bg-white dark:bg-dark overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="tag-badge mx-auto mb-4">Client Stories</div>
          <h2 className="section-heading text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="section-subheading mx-auto text-center mt-3">
            Real recommendation letters from government, education and corporate clients across Zimbabwe.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-base p-8 md:p-12 relative overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              {/* Service tag */}
              <div className="mb-4">
                <span className="tag-badge">{t.service}</span>
              </div>

              <Quote size={36} className="text-green-primary/20 mb-4" />

              <blockquote className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic line-clamp-6">
                "{t.quote}"
              </blockquote>
            </div>

            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-primary to-blue-accent rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white font-poppins text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.position}</div>
                  <div className="text-xs text-green-primary font-medium">{t.company}</div>
                </div>
              </div>
              {/* Stars + date */}
              <div className="text-right hidden md:block">
                <div className="flex gap-0.5 justify-end mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-400">{t.date}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-green-primary hover:text-white transition-all"
              aria-label="Previous">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all ${i === active ? 'w-6 h-2 bg-green-primary' : 'w-2 h-2 bg-gray-300 dark:bg-gray-600'}`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button onClick={next}
              className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-green-primary hover:text-white transition-all"
              aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-4">
            Based on official recommendation letters — {testimonials.length} verified client references
          </p>
        </div>
      </div>
    </section>
  )
}
