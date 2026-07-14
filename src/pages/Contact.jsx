import { useEffect } from 'react'
import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'
import SmartSearch from '../components/ui/SmartSearch'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { companyInfo } from '../data/siteData'

export default function Contact() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Contact Us | Olimem Enterprise Solutions'
  }, [])

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-dark via-gray-900 to-dark text-white py-24">
        <div className="container-custom text-center">
          <div className="tag-badge mx-auto mb-6" style={{ background: 'rgba(91,194,54,0.15)', color: '#5BC236' }}>
            Get In Touch
          </div>
          <h1 className="section-heading text-white mb-6">How Can We Help You?</h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            Whether you need Sage support, a GIS consultation or a custom software quote — our team across Zimbabwe and Zambia is ready to assist.
          </p>
          <div className="max-w-2xl mx-auto">
            <SmartSearch placeholder="Search our services, FAQs and projects..." />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Offices */}
            <div>
              <h2 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-8">
                Our Offices
              </h2>

              <div className="space-y-8">
                {companyInfo.offices.map((office) => (
                  <div key={office.name} className="reveal card-base p-6">
                    {/* Office name */}
                    <div className="flex items-center gap-3 mb-5">
                      <h3 className="font-bold font-poppins text-gray-900 dark:text-white text-lg">
                        {office.name} Office
                      </h3>
                      {office.badge && (
                        <span className="text-[10px] bg-green-primary text-white px-2 py-0.5 rounded-full font-semibold">
                          {office.badge}
                        </span>
                      )}
                    </div>

                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex gap-4">
                        <div className="w-9 h-9 bg-green-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <MapPin size={16} className="text-green-primary" />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {office.address.map((line) => <div key={line}>{line}</div>)}
                        </div>
                      </div>

                      {/* Phones */}
                      {office.phones.length > 0 && (
                        <div className="flex gap-4">
                          <div className="w-9 h-9 bg-green-primary/10 rounded-lg flex items-center justify-center shrink-0">
                            <Phone size={16} className="text-green-primary" />
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {office.phones.map((phone, i) => (
                              <a key={phone} href={office.phoneLinks[i]}
                                className="block hover:text-green-primary transition-colors">
                                {phone}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Emails */}
                      <div className="flex gap-4">
                        <div className="w-9 h-9 bg-green-primary/10 rounded-lg flex items-center justify-center shrink-0">
                          <Mail size={16} className="text-green-primary" />
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {office.emails.map((email) => (
                            <a key={email} href={`mailto:${email}`}
                              className="block hover:text-green-primary transition-colors">
                              {email}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Hours */}
                <div className="reveal card-base p-6">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 bg-green-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Clock size={16} className="text-green-primary" />
                    </div>
                    <div>
                      <div className="font-semibold font-poppins text-gray-900 dark:text-white mb-2">
                        Business Hours
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Mon – Fri: 8:00 AM – 4:30 PM</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Saturday & Sunday: Closed</div>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="reveal card-base p-6">
                  <div className="flex gap-4">
                    <div className="w-9 h-9 bg-green-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Globe size={16} className="text-green-primary" />
                    </div>
                    <div>
                      <div className="font-semibold font-poppins text-gray-900 dark:text-white mb-1">Website</div>
                      <a href={`https://${companyInfo.website}`} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-green-primary transition-colors">
                        {companyInfo.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
