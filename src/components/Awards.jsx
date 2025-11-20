import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const awards = [
  'Best Premium Matchmaking Service',
  'Global Excellence in Client Trust',
  'Innovation in Private Matchmaking',
  'Top Client Success Ratio',
  'Most Recommended Bureau',
  'Outstanding Advisory Team',
  'Privacy & Security Leadership',
  'Cultural Compatibility Research',
  'Best Elite Introductions',
  'Excellence in Relationship Outcomes',
]

export default function Awards() {
  return (
    <section id="awards" className="relative py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            10 Major Awards — And Counting
          </motion.h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Recognized worldwide for trust, results, and unmatched client experience.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {awards.map((label, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.05 }}
              className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-5 text-white flex items-center gap-3"
            >
              <div className="p-2 rounded-lg bg-white/10">
                <Trophy className="w-5 h-5" />
              </div>
              <p className="text-sm">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
