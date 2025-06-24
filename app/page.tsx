import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import USP from '../components/USP'
import Work from '../components/Work'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <Services />
      <USP />
      <Work />
      <FAQ />
      <CTA />
    </main>
  )
}