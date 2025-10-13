import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Iridescent Identity Dashboard',
    description:
      'A holographic profile and verification system with real‑time signals and delightful micro‑interactions for a fintech audience.',
    tags: ['React', 'Framer Motion', 'Spline'],
    link: 'https://in.linkedin.com/in/timmareddy-deekshitha-701218318',
  },
  {
    title: 'Holographic Portfolio Experience',
    description:
      'An immersive personal site blending 3D visuals and accessible design to showcase skills, work, and social proof.',
    tags: ['Vite', 'Tailwind CSS', '3D UI'],
    link: 'https://in.linkedin.com/in/timmareddy-deekshitha-701218318',
  },
  {
    title: 'Realtime Wallet Analytics',
    description:
      'A modern dashboard for tracking transactions, risk, and behavior — optimized for clarity and speed.',
    tags: ['TypeScript', 'APIs', 'Charts'],
    link: 'https://in.linkedin.com/in/timmareddy-deekshitha-701218318',
  },
]

function Tag({ label }) {
  return (
    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
      {label}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Featured Projects
        </h2>
        <p className="mt-3 text-gray-600">
          A selection of modern, vibrant builds across identity, fintech, and rich user interfaces.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.05, duration: 0.45 }}
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow transition will-change-transform hover:shadow-lg"
            whileHover={{ y: -6, scale: 1.01 }}
          >
            {/* Hover aura */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-100/40 via-transparent to-fuchsia-100/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <div className="mt-6">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Visit
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            {/* Animated border shimmer */}
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
