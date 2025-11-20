import { motion } from 'framer-motion'
import { Handshake, CheckCircle2, Lock, Sparkles } from 'lucide-react'

export default function Highlights() {
  const items = [
    {
      icon: Handshake,
      title: 'Human-first Matchmaking',
      desc: 'Dedicated relationship advisors guide you end-to-end — not just algorithms.'
    },
    {
      icon: CheckCircle2,
      title: 'Verified Profiles Only',
      desc: 'Multi-step verification and background checks to ensure authenticity.'
    },
    {
      icon: Lock,
      title: 'Discreet & Secure',
      desc: 'Your privacy is sacred. We never share data without explicit consent.'
    },
    {
      icon: Sparkles,
      title: 'Success-driven Approach',
      desc: 'Personalized intros, guided conversations, and compatibility sessions.'
    },
  ]

  return (
    <section id="highlights" className="relative py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Why People Choose Us
          </motion.h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            We meet thousands who trust us to find their better partner — because we make it real, personal, and effective.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 text-white shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-2"><Icon className="w-6 h-6"/></div>
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
