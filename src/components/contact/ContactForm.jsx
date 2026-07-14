import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const serviceOptions = [
  'Sage Pastel Accounting',
  'Sage Payroll',
  'Sage Evolution ERP',
  'GIS Solutions',
  'Custom Software Development',
  'ICT Infrastructure',
  'Cloud Services',
  'Cybersecurity',
  'Managed IT Services',
  'Digital Transformation',
  'Other',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => { const copy = { ...e }; delete copy[name]; return copy })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    try {
      const body = new URLSearchParams({ 'form-name': 'consultation', ...form })
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card-base p-12 text-center">
        <div className="w-20 h-20 bg-green-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={36} className="text-green-primary" />
        </div>
        <h3 className="text-2xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Your consultation request has been received. One of our experts will contact you within 1 business day.
        </p>
        <button onClick={() => setStatus(null)} className="btn-primary">
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className="card-base p-8">
      <h3 className="text-xl font-bold font-poppins text-gray-900 dark:text-white mb-6">
        Book Your Free Consultation
      </h3>

      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6">
          <AlertCircle size={18} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-700 dark:text-red-400">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      {/* Hidden Netlify form */}
      <form name="consultation" data-netlify="true" hidden>
        <input name="name" /><input name="company" /><input name="email" />
        <input name="phone" /><input name="service" /><textarea name="message" />
      </form>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name *" name="name" type="text" placeholder="John Smith" value={form.name} onChange={handleChange} error={errors.name} />
          <Field label="Company" name="company" type="text" placeholder="Your Company Ltd" value={form.company} onChange={handleChange} />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Email Address *" name="email" type="email" placeholder="john@company.co.zw" value={form.email} onChange={handleChange} error={errors.email} />
          <Field label="Phone Number" name="phone" type="tel" placeholder="+263 77 123 4567" value={form.phone} onChange={handleChange} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service of Interest *</label>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
              errors.service
                ? 'border-red-400 focus:ring-red-400'
                : 'border-gray-200 dark:border-gray-700 focus:border-green-primary focus:ring-green-primary/20'
            } focus:outline-none focus:ring-2`}
          >
            <option value="">Select a service...</option>
            {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your business needs, current challenges or questions..."
            value={form.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors resize-none ${
              errors.message
                ? 'border-red-400 focus:ring-red-400'
                : 'border-gray-200 dark:border-gray-700 focus:border-green-primary focus:ring-green-primary/20'
            } focus:outline-none focus:ring-2`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button type="submit" className="btn-primary w-full justify-center py-4">
          <Send size={16} />
          Book Consultation
        </button>

        <p className="text-xs text-gray-400 text-center">
          Your information is secure and will never be shared. Response within 1 business day.
        </p>
      </form>
    </div>
  )
}

function Field({ label, name, type, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors ${
          error
            ? 'border-red-400 focus:ring-red-400'
            : 'border-gray-200 dark:border-gray-700 focus:border-green-primary focus:ring-green-primary/20'
        } focus:outline-none focus:ring-2`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
