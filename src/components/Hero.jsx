import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[88vh] pt-24">
      {/* 3D Scene */}
      <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Soft gradient glow overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/40" />

        {/* Iridescent edges */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/40" />
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-60 [mask-image:linear-gradient(white,transparent)] bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
      </div>

      {/* Content overlay */}
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mx-auto -mt-16 max-w-5xl rounded-2xl border border-white/30 bg-white/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-xl"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Digital Identity
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Timmareddy Deekshitha
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              Building modern, vibrant, and futuristic digital experiences — focusing on identity, fintech, and human‑centered design.
            </motion.p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://in.linkedin.com/in/timmareddy-deekshitha-701218318"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black"
            >
              View LinkedIn
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Explore Projects
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
