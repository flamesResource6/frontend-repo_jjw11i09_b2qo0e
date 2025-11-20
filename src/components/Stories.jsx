import { motion } from 'framer-motion'

const stories = [
  {
    couple: 'Aarav & Meera',
    quote: 'We met through a curated intro and knew within weeks. The level of care was unmatched.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop'
  },
  {
    couple: 'Kabir & Alia',
    quote: 'They didn\'t just match us, they prepared us for forever. It felt effortless and genuine.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop'
  },
  {
    couple: 'Rohit & Naina',
    quote: 'From the first call to the engagement, they were with us every step.',
    image: 'https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export default function Stories() {
  return (
    <section id="stories" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Success Stories
          </motion.h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto">Real couples who found their forever through our expert matchmaking.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.couple}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl group shadow-xl"
            >
              <img src={s.image} alt={s.couple} className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="font-semibold text-lg">{s.couple}</p>
                <p className="text-white/80 text-sm mt-1">“{s.quote}”</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
