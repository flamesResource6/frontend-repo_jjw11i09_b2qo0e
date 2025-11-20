import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Stories from './components/Stories'
import Awards from './components/Awards'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-10 bg-[#0b0a1a]" />
      <div className="absolute inset-0 -z-10 opacity-[0.35]" style={{backgroundImage:'radial-gradient(1200px_600px_at_50%_-20%,rgba(236,72,153,0.15),transparent),radial-gradient(1000px_500px_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(1000px_500px_at_90%_20%,rgba(147,51,234,0.12),transparent)'}} />

      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Stories />
        <Awards />
        <CTA />
      </main>

      <footer className="py-10 border-t border-white/10 text-center text-white/60">
        © {new Date().getFullYear()} EternalMatch — premium marriage bureau. All rights reserved.
      </footer>
    </div>
  )
}

export default App
