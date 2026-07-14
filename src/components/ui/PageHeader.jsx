export default function PageHeader({ badge, title, highlight, description, children }) {
  return (
    <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-primary/10 rounded-full animate-blob" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-accent/10 rounded-full animate-blob-delay" />
      </div>
      <div className="container-custom relative z-10 text-center">
        {badge && (
          <div className="tag-badge mx-auto mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
            {badge}
          </div>
        )}
        <h1 className="section-heading text-white mb-6">
          {title}
          {highlight && (
            <> <span className="text-green-primary">{highlight}</span></>
          )}
        </h1>
        {description && (
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
