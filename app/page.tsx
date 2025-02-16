
import Header from "../components/Header"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Technology from "../components/Technology"
import Solutions from "../components/Solutions"
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      <Features />
      <Technology />
      <Solutions />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

