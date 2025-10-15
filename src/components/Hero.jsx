import { useState, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Mail, Download, User } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mx, setMx] = useState(0)
  const [my, setMy] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const areaRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMx(x)
    setMy(y)

    const px = (x / rect.width) * 2 - 1 // -1 to 1
    const py = (y / rect.height) * 2 - 1 // -1 to 1
    setTilt({
      x: Math.max(-10, Math.min(10, -py * 10)),
      y: Math.max(-10, Math.min(10, px * 10)),
    })
  }

  return (
    <section id="home" className="relative isolate min-h-[88vh] pt-24">
      {/* 3D Scene */}
      <div
        ref={areaRef}
        onMouseMove={handleMouseMove}
        className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-slate-50 via-white to-slate-100 shadow-lg"
      >
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Spotlight following the cursor (non-blocking) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(220px 220px at ${mx}px ${my}px, rgba(59,130,246,0.18), transparent 70%)`,
          }}
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
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
        className="relative mx-auto -mt-16 max-w-5xl rounded-2xl border border-white/30 bg-white/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-xl"
      >
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 text-white shadow">
              <User className="h-7 w-7" />
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-white/50" />
            </div>
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
              >
                Timmareddy Deekshitha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-1 text-sm font-medium text-blue-700 sm:text-base"
              >
                AI & Web Developer | Innovator | Problem Solver
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base"
              >
                I design and build interactive experiences across web, AI/ML, and IoT —
                translating ideas into polished products with performance, accessibility,
                and recruiter‑friendly storytelling.
              </motion.p>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#resume"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black"
            >
              <Download className="h-4 w-4" />
              View Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" />
              Contact
            </motion.a>
          </div>
        </div>

        {/* Quick highlights */}
        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-600 sm:grid-cols-4">
          <Badge label="3D & Motion" value="Spline + Framer" />
          <Badge label="Performance" value="Lighthouse 90+" />
          <Badge label="Focus" value="AI / Web / IoT" />
          <Badge label="Availability" value="Immediate" />
        </div>
      </motion.div>
    </section>
  )
}

function Badge({ label, value }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white px-3 py-2">
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(white,transparent)] bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
      <div className="relative flex items-center justify-between">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">{value}</span>
      </div>
    </div>
  )
}
