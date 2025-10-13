import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

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
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto -mt-16 max-w-5xl rounded-2xl border border-white/30 bg-white/80 p-6 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-xl">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Verified Digital Identity
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Timmareddy Deekshitha
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Building modern, vibrant, and futuristic digital experiences — with a focus on identity, fintech, and human‑centered design.
            </p>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:flex-row sm:w-auto">
            <a
              href="https://in.linkedin.com/in/timmareddy-deekshitha-701218318"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black"
            >
              View LinkedIn
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Explore Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
