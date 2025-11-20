import { useState } from 'react'
import { Menu, X, Heart, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Why Us', href: '#highlights' },
    { name: 'Stories', href: '#stories' },
    { name: 'Awards', href: '#awards' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-violet-600 text-white shadow-[0_10px_30px_rgba(168,85,247,0.5)]">
                <Heart className="w-6 h-6" />
              </div>
              <div className="leading-tight">
                <p className="text-white font-bold text-lg tracking-tight">EternalMatch</p>
                <p className="text-white/70 text-xs flex items-center gap-1"><ShieldCheck className="w-4 h-4"/> Top 1% Trusted</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map(item => (
                <a key={item.name} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.name}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.5)] hover:shadow-[0_14px_40px_rgba(236,72,153,0.65)] transition-all">
                Get Started
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white/90">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {navItems.map(item => (
                <a key={item.name} href={item.href} className="block text-white/90" onClick={() => setOpen(false)}>
                  {item.name}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 px-5 py-2 rounded-full shadow-[0_10px_30px_rgba(236,72,153,0.5)]">
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
