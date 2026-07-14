import { Target, Map, Wrench, Award, Handshake, Globe } from 'lucide-react'
import { whyChooseUs } from '../../data/siteData'

const icons = [Target, Map, Wrench, Award, Handshake, Globe]

const iconColors = [
  'bg-green-primary/10 text-green-primary',
  'bg-blue-accent/10 text-blue-accent',
  'bg-purple-100 dark:bg-purple-900/20 text-purple-600',
  'bg-orange-100 dark:bg-orange-900/20 text-orange-600',
  'bg-teal-100 dark:bg-teal-900/20 text-teal-600',
  'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600',
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="tag-badge mb-4">Why Olimem</div>
            <h2 className="section-heading text-gray-900 dark:text-white mb-6">
              Built for African Business.<br />
              <span className="gradient-text">Globally Competitive.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              We combine deep technical expertise with an intimate understanding of the African business environment — delivering solutions that are relevant, practical and built to last.
            </p>

            {/* Feature list — first 3 items */}
            <div className="space-y-5">
              {whyChooseUs.slice(0, 3).map((item, i) => {
                const Icon = icons[i]
                const colorClass = iconColors[i]
                return (
                  <div key={item.title} className="flex gap-4 group">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${colorClass} group-hover:scale-110`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white font-poppins mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — grid of all 6 cards */}
          <div className="grid grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[i]
              const colorClass = iconColors[i]
              return (
                <div
                  key={item.title}
                  className="reveal card-base p-5 hover:-translate-y-1 group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${colorClass} group-hover:scale-110`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white font-poppins text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
