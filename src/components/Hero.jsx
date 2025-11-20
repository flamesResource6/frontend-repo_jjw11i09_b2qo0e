import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Trophy, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] rounded-full bg-[radial-gradient(closest-side,_rgba(236,72,153,0.15),_transparent_70%)]" />
        <div className="absolute top-1/3 -left-20 w-[40rem] h-[40rem] bg-[radial-gradient(circle,_rgba(99,102,241,0.25),_transparent_60%)] blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-[radial-gradient(circle,_rgba(236,72,153,0.25),_transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-[0_2px_0_rgba(0,0,0,0.2)]"
        >
          Find Your Forever, Curated by Experts
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl mx-auto"
        >
          Premium marriage bureau trusted by thousands. Handpicked matches, deep compatibility mapping, and complete privacy. We are in the top 1% — where trust meets destiny.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#get-started" className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 px-7 py-4 text-white font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.6)] hover:shadow-[0_16px_60px_rgba(236,72,153,0.75)] transition-all">
            <Sparkles className="w-5 h-5" /> Begin Your Journey
          </a>
          <a href="#highlights" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-white/90 hover:bg-white/10 transition">Learn More</a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {[
            { icon: Users, title: '50,000+ Meetings Arranged', desc: 'Real conversations. Real connections.' },
            { icon: ShieldCheck, title: 'Top 1% Trusted', desc: 'Private, verified, and secure.' },
            { icon: Trophy, title: '10+ Global Awards', desc: 'Recognized for excellence and outcomes.' },
            { icon: Sparkles, title: 'Elite Matchmaking', desc: 'Handpicked, compatibility-first matches.' },
          ].map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 text-white shadow-lg"
            >
              <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-white/70 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 w-[80%] max-w-6xl h-40 bg-gradient-to-r from-rose-500/40 via-fuchsia-500/40 to-indigo-500/40 blur-3xl rounded-full" />
    </section>
  )
}
