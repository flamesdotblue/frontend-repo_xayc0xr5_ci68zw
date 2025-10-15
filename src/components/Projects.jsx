import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, Star, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

function Tag({ label }) {
  return (
    <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
      {label}
    </span>
  )
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    })
  } catch {
    return ''
  }
}

export default function Projects() {
  const username = 'TIMMAREDDY-DEEKSHITHA'
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState('updated') // updated | stars | name

  useEffect(() => {
    let isMounted = true
    async function fetchRepos() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        )
        if (!res.ok) throw new Error(`GitHub API error ${res.status}`)
        const data = await res.json()
        if (isMounted) setRepos(Array.isArray(data) ? data : [])
      } catch (e) {
        if (isMounted) setError('Could not load GitHub projects right now.')
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    fetchRepos()
    return () => {
      isMounted = false
    }
  }, [username])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = repos.filter((r) => {
      if (!q) return true
      const hay = `${r.name} ${r.description ?? ''} ${r.language ?? ''}`.toLowerCase()
      return hay.includes(q)
    })

    if (sortBy === 'stars') {
      list = list.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
    } else if (sortBy === 'name') {
      list = list.sort((a, b) => a.name.localeCompare(b.name))
    } else {
      list = list.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    }

    return list
  }, [repos, query, sortBy])

  return (
    <section id="projects" className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects from GitHub
        </h2>
        <p className="mt-3 text-gray-600">
          Automatically listing only what exists on your GitHub profile. No extras added.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search repositories..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Sort by</span>
          <div className="flex overflow-hidden rounded-lg border border-gray-200">
            {[
              { key: 'updated', label: 'Recent' },
              { key: 'stars', label: 'Stars' },
              { key: 'name', label: 'Name' },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortBy(opt.key)}
                className={`${
                  sortBy === opt.key ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'
                } px-3 py-1.5 font-medium transition`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-2xl border border-gray-200 bg-white/60"
            />
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <p className="mt-8 text-center text-sm text-red-600">{error}</p>
      )}

      {/* Empty state */}
      {!loading && !error && filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-gray-600">No repositories found.</p>
      )}

      {/* Repos grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r, idx) => (
          <motion.article
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: idx * 0.03, duration: 0.4 }}
            key={r.id}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow transition will-change-transform hover:shadow-lg"
            whileHover={{ y: -6, scale: 1.01 }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 break-words">{r.name}</h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-200">
                <Star className="h-3.5 w-3.5" /> {r.stargazers_count}
              </span>
            </div>
            {r.description && (
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">{r.description}</p>
            )}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {r.language && <Tag label={r.language} />}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
              <span>Updated {formatDate(r.updated_at)}</span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={r.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Repository <ExternalLink className="h-4 w-4" />
              </a>
              {r.homepage && r.homepage.trim() !== '' && (
                <a
                  href={r.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                >
                  <Globe className="h-4 w-4" /> Live
                </a>
              )}
            </div>
            <div className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
