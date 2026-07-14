import { ceoMessage } from '../../data/siteData'

export default function CeoMessage() {
  const paragraphs = ceoMessage.message.split('\n\n').filter(Boolean)

  return (
    <section className="section-padding bg-gradient-to-br from-dark via-gray-900 to-dark text-white overflow-hidden relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-accent/5 rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-green-primary/20 to-blue-accent/20 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-primary to-green-secondary rounded-full mx-auto flex items-center justify-center text-5xl font-bold font-poppins mb-4">
                    {ceoMessage.name[0]}
                  </div>
                  <div className="text-white font-bold font-poppins">{ceoMessage.name}</div>
                  <div className="text-green-primary text-sm">{ceoMessage.title}</div>
                </div>
              </div>
              {/* Corner badge */}
              <div className="absolute -bottom-4 -right-4 bg-green-primary text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                12+ Years Leading
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <div className="tag-badge mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
              Message from the CEO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-8 leading-tight">
              Technology That Transforms.{' '}
              <span className="text-green-primary">Partnerships That Last.</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-sm md:text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="font-bold text-white font-poppins">{ceoMessage.signature}</div>
              <div className="text-green-primary text-sm">{ceoMessage.title}</div>
              <div className="text-gray-500 text-xs mt-1">{ceoMessage.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
