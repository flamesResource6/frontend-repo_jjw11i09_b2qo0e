import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-r from-rose-500/20 via-fuchsia-500/20 to-indigo-500/20 p-1">
          <div className="rounded-[22px] bg-[#0b0a1a]/80 backdrop-blur-xl p-10 text-center">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">Ready to meet your forever person?</h3>
            <p className="mt-3 text-white/70 max-w-2xl mx-auto">Join our premium program and get a dedicated advisor who handpicks deeply compatible matches for you.</p>

            <form className="mt-8 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
              <input type="text" placeholder="Your Name" className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <input type="email" placeholder="Email Address" className="w-full rounded-full bg-white/10 border border-white/20 px-5 py-3 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-400" />
              <button type="submit" className="rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-white font-semibold shadow-[0_10px_40px_rgba(236,72,153,0.6)] hover:shadow-[0_16px_60px_rgba(236,72,153,0.75)] transition">Request a Call</button>
            </form>

            <p className="mt-4 text-xs text-white/60">By continuing, you agree to our privacy policy and terms.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
