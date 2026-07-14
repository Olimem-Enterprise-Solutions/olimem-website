import { Landmark, GraduationCap, Heart, Factory, ShoppingCart, Stethoscope, Wheat, Banknote, Radio, Truck } from 'lucide-react'

const industries = [
  { name: 'Government', Icon: Landmark, color: 'text-blue-accent bg-blue-accent/10 group-hover:bg-blue-accent group-hover:text-white' },
  { name: 'Education', Icon: GraduationCap, color: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 group-hover:bg-purple-600 group-hover:text-white' },
  { name: 'NGOs', Icon: Heart, color: 'text-red-500 bg-red-100 dark:bg-red-900/20 group-hover:bg-red-500 group-hover:text-white' },
  { name: 'Manufacturing', Icon: Factory, color: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20 group-hover:bg-orange-600 group-hover:text-white' },
  { name: 'Retail', Icon: ShoppingCart, color: 'text-pink-600 bg-pink-100 dark:bg-pink-900/20 group-hover:bg-pink-600 group-hover:text-white' },
  { name: 'Healthcare', Icon: Stethoscope, color: 'text-green-primary bg-green-primary/10 group-hover:bg-green-primary group-hover:text-white' },
  { name: 'Agriculture', Icon: Wheat, color: 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 group-hover:bg-yellow-600 group-hover:text-white' },
  { name: 'Financial Services', Icon: Banknote, color: 'text-teal-600 bg-teal-100 dark:bg-teal-900/20 group-hover:bg-teal-600 group-hover:text-white' },
  { name: 'Telecommunications', Icon: Radio, color: 'text-cyan-600 bg-cyan-100 dark:bg-cyan-900/20 group-hover:bg-cyan-600 group-hover:text-white' },
  { name: 'Logistics', Icon: Truck, color: 'text-indigo-600 bg-indigo-100 dark:bg-indigo-900/20 group-hover:bg-indigo-600 group-hover:text-white' },
]

export default function Industries() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="tag-badge mx-auto mb-4">Industries We Serve</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Trusted Across Every Sector
          </h2>
          <p className="section-subheading mx-auto text-center">
            Our solutions are deployed across government, private sector and civil society — wherever technology can drive transformation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {industries.map(({ name, Icon, color }, index) => (
            <div
              key={name}
              className="reveal card-base p-6 text-center hover:-translate-y-1 cursor-default group"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${color}`}>
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 font-poppins leading-tight">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
