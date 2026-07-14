import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteData'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...new Set(faqs.map((f) => f.category))]
  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <section className="section-padding bg-white dark:bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="tag-badge mx-auto mb-4">FAQs</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="section-subheading mx-auto text-center">
            Get quick answers to the questions we hear most often from clients.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpen(null) }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-green-primary text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={index} className="card-base overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 dark:text-white font-poppins text-sm md:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-green-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
