import { Mail, Phone, Linkedin, Github, Download, Award, Briefcase, GraduationCap, BookOpen, Cpu, Brain, Code, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const email = 'ui22ec78@iiitsurat.ac.in'
const phone = '+91-9347450699'
const linkedin = 'https://in.linkedin.com/in/timmareddy-deekshitha-701218318'
const github = 'https://github.com/TIMMAREDDY-DEEKSHITHA'

function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="relative mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow">
          <Icon className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}

export default function Profile() {
  return (
    <div className="relative z-10">
      {/* Resume / Snapshot */}
      <Section id="resume" title="Resume" icon={Download}>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">Timmareddy Deekshitha</h3>
              <p className="mt-1 text-sm font-medium text-blue-700">Student • MERN Stack Developer • Competitive Programmer</p>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700 sm:grid-cols-2">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-gray-500" /> {email}</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gray-500" /> {phone}</li>
                <li className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-gray-500" /> <a href={linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">LinkedIn</a></li>
                <li className="flex items-center gap-2"><Github className="h-4 w-4 text-gray-500" /> <a href={github} target="_blank" rel="noreferrer" className="text-gray-900 hover:underline">GitHub</a></li>
              </ul>
            </div>
            <div className="flex items-start justify-start gap-3 md:justify-end">
              <a
                href={`mailto:${email}?subject=Resume%20Request&body=Hi%2C%20please%20share%20your%20latest%20resume.`}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-black"
              >
                <Download className="h-4 w-4" /> Request PDF
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                <ExternalLink className="h-4 w-4" /> View Projects
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={Code}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Programming Languages" icon={Code} items={[
            'C', 'C++', 'Python', 'JavaScript',
          ]} />
          <SkillCard title="Frontend" icon={BookOpen} items={[
            'HTML5', 'CSS3', 'React', 'Redux', 'Vite', 'Tailwind CSS',
          ]} />
          <SkillCard title="Backend" icon={Cpu} items={[
            'Node.js', 'Express.js', 'REST APIs', 'JWT Auth',
          ]} />
          <SkillCard title="Databases" icon={Brain} items={[
            'MongoDB', 'MySQL', 'PostgreSQL',
          ]} />
          <SkillCard title="Tools & Platforms" icon={Award} items={[
            'Git', 'GitHub', 'Linux', 'Docker', 'Postman', 'VS Code',
          ]} />
          <SkillCard title="CS & CP" icon={BookOpen} items={[
            'Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'LeetCode', 'Codeforces',
          ]} />
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="grid gap-6 md:grid-cols-2">
          <EduCard
            school="Indian Institute of Information Technology (IIIT) Surat"
            degree="B.Tech — Candidate"
            period="2022 – 2026"
            details={[
              'Core focus across Computer Science with strong MERN & CP track',
              'Active in projects and hackathons; hands‑on, practical approach',
            ]}
          />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience / Internships" icon={Briefcase}>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpCard
            company="Open to Internships"
            role="SWE / Frontend / MERN Intern"
            period="Available now"
            points={[
              'Build responsive, accessible UIs with React and Tailwind',
              'Develop REST APIs and integrate backend services',
              'Collaborate in Git workflows; write clean, documented code',
              'Ship fast with a focus on UX and performance',
            ]}
          />
          <ExpCard
            company="Academic & GitHub Projects"
            role="Project Developer"
            period="Ongoing"
            points={[
              'End‑to‑end project ownership from idea to deployment',
              'Applied MERN stack to real problems and demos',
              'Automated testing and CI basics; iterative improvements',
              'See “Projects” section for live examples',
            ]}
          />
        </div>
      </Section>

      {/* Achievements / Certifications */}
      <Section id="achievements" title="Achievements / Certifications" icon={Award}>
        <div className="grid gap-6 md:grid-cols-2">
          <AchCard
            title="Competitive Programming"
            items={[
              'Active on LeetCode and Codeforces',
              'Strong focus on Data Structures & Algorithms',
            ]}
          />
          <AchCard
            title="Certifications & Courses"
            items={[
              'Coursework in Web Development and CS Fundamentals',
              'Continuous learning via projects and reading',
            ]}
          />
        </div>
      </Section>

      {/* About Me */}
      <Section id="about" title="About Me" icon={BookOpen}>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="text-gray-700">
            I enjoy building thoughtful, interactive experiences with a strong emphasis on clean UI,
            performance, and clarity. Current interests include developer tooling and modern web apps.
          </p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-8 shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.25),transparent_35%)]" />
          <div className="relative grid items-start gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s connect</h3>
              <p className="mt-2 max-w-prose text-slate-200">
                The fastest way to reach me is email. I’m happy to share my resume, discuss projects,
                or explore opportunities.
              </p>
              <div className="mt-6 grid gap-2 text-sm text-slate-100">
                <a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:underline">
                  <Mail className="h-4 w-4" /> {email}
                </a>
                <a href={`tel:${phone.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-2 hover:underline">
                  <Phone className="h-4 w-4" /> {phone}
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${email}?subject=Let%E2%80%99s%20work%20together`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-slate-50"
              >
                <Mail className="h-4 w-4" /> Email me
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> Quick call
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

function SkillCard({ title, icon: Icon, items }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2">
        <Icon className="h-5 w-5 text-gray-700" />
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-200">
            {it}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(white,transparent)] bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
    </div>
  )
}

function EduCard({ school, degree, period, details }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{school}</h3>
          <p className="text-sm text-gray-600">{degree}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">{period}</span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
        {details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  )
}

function ExpCard({ company, role, period, points }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200">{period}</span>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

function AchCard({ title, items }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-700">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
