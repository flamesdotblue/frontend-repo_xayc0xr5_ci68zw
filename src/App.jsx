import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-gray-900">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_40%)]" />

      <Navbar />

      <main>
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
