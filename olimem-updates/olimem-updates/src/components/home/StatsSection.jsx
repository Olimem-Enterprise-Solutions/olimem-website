const sectors = [
  'Government',
  'Education',
  'NGOs',
  'Agriculture',
  'Mining',
  'Telecommunications',
  'Financial Services',
  'Retail',
  'Healthcare',
  'Logistics',
]

export default function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-green-primary to-blue-accent py-16">
      <div className="container-custom text-white text-center">

        {/* Main stat */}
        <div className="mb-10">
          <div className="text-6xl md:text-7xl font-bold font-poppins mb-2">21+</div>
          <div className="text-2xl md:text-3xl font-semibold text-white/90 uppercase tracking-widest">
            Years of Experience
          </div>
          <div className="w-20 h-1 bg-white/30 rounded-full mx-auto mt-4" />
        </div>

        {/* Sectors */}
        <p className="text-white/80 text-sm uppercase tracking-widest mb-5 font-medium">
          Sectors We Serve
        </p>
        <div className="flex flex-wrap justify-center gap-3">
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
