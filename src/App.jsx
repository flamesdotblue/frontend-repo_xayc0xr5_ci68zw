import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Ambient background aurora */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(56,189,248,0.22),transparent_60%),radial-gradient(1200px_600px_at_110%_110%,rgba(99,102,241,0.22),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.15] [background:repeating-linear-gradient(45deg,rgba(2,6,23,0.06)_0px,rgba(2,6,23,0.06)_1px,transparent_1px,transparent_10px)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  )
}

export default App
