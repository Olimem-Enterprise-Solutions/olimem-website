import { useEffect } from 'react'
import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import ServicesOverview from '../components/home/ServicesOverview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Industries from '../components/home/Industries'
import ClientLogos from '../components/home/ClientLogos'
import CeoMessage from '../components/home/CeoMessage'
import BlogPreview from '../components/home/BlogPreview'
import FAQ from '../components/home/FAQ'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Home() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Olimem Enterprise Solutions | Sage, GIS & Custom Software Zimbabwe'
  }, [])

  return (
    <main>
      <Hero />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <ClientLogos />
      <BlogPreview />
      <FAQ />
    </main>
  )
}
