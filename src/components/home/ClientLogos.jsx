import { clients } from '../../data/testimonials'

function LogoCard({ client }) {
  const initials = client.name.split(' ').slice(0, 2).map((w) => w[0]).join('')

  return (
    <div className="group flex flex-col items-center justify-center h-28 px-3 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-green-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
      {client.logoPath ? (
        <>
          <img
            src={client.logoPath}
            alt={client.name}
            className="h-14 w-auto max-w-[100px] object-contain transition-all duration-300"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="hidden w-10 h-10 bg-green-primary/10 rounded-xl items-center justify-center text-xs font-bold text-green-primary mb-1">
            {initials}
          </div>
        </>
      ) : (
        <div className="w-10 h-10 bg-green-primary/10 rounded-xl flex items-center justify-center text-xs font-bold text-green-primary mb-2 group-hover:bg-green-primary group-hover:text-white transition-all duration-300">
          {initials}
        </div>
      )}
      <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 leading-tight text-center max-w-[90px] mt-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
        {client.name}
      </span>
    </div>
  )
}

export default function ClientLogos() {
  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="tag-badge mx-auto mb-4">Trusted By</div>
          <h2 className="section-heading text-gray-900 dark:text-white mb-4">
            Organizations That Trust Olimem
          </h2>
          <p className="section-subheading mx-auto text-center">
            Serving Rural District Councils, municipalities, universities, hospitals and corporations across Zimbabwe — backed by official recommendation letters.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {clients.map((client) => (
            <div key={client.name} className="w-[140px]">
              <LogoCard client={client} />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-10">
          All client relationships verified by official recommendation letters
        </p>
      </div>
    </section>
  )
}
