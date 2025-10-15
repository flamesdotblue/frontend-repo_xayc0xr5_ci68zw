import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Profile from './components/Profile'

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.08),transparent_40%)]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Profile />
      </main>
    </div>
  )
}
