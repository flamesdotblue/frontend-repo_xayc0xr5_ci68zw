import { Mail, Phone, Linkedin, Github, Award, Briefcase, GraduationCap, BookOpen, Cpu, Brain, Code, Star } from 'lucide-react'
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
      {/* Skills (Coursework + Technical) */}
      <Section id="skills" title="Skills" icon={Code}>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Coursework / Skills with ratings */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gray-700" />
              <h3 className="text-lg font-semibold text-gray-900">Coursework / Skills</h3>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { name: 'Data Structures & Algorithms', rating: 4 },
                { name: 'Operating Systems', rating: 4 },
                { name: 'Embedded Systems', rating: 4 },
                { name: 'Artificial Intelligence (AI)', rating: 3 },
                { name: 'OOPs Concepts', rating: 2 },
                { name: 'Web Development', rating: 4 },
                { name: 'Android Development', rating: 3 },
                { name: 'IoT', rating: 4 },
                { name: 'Image Processing', rating: 3 },
                { name: 'UI/UX', rating: 2 },
                { name: 'Machine Learning (ML)', rating: 2 },
              ].map((item) => (
                <li key={item.name} className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2">
                  <span className="text-sm font-medium text-gray-800">{item.name}</span>
                  <Stars rating={item.rating} />
                </li>
              ))}
            </ul>
            <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(white,transparent)] bg-[conic-gradient(at_120%_-10%,#22d3ee,transparent_30%),conic-gradient(at_-20%_110%,#818cf8,transparent_30%)]" />
          </div>

          {/* Technical Skills chips */}
          <div className="space-y-6">
            <SkillCard title="Languages" icon={Code} items={[
              'Java', 'Python', 'C', 'C++', 'JavaScript', 'SQL',
            ]} />
            <SkillCard title="Developer Tools" icon={Cpu} items={[
              'VS Code', 'Android Studio', 'IntelliJ IDEA Ultimate',
            ]} />
            <SkillCard title="Technologies / Frameworks" icon={Brain} items={[
              'Linux', 'Git', 'GitHub', 'ReactJS', 'Mongo', 'Node.js', 'Express.js', 'Redux', 'Vite', 'Tailwind CSS', 'REST APIs', 'JWT Auth', 'Postman',
            ]} />
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={GraduationCap}>
        <div className="grid gap-6 md:grid-cols-2">
          <EduCard
            school="INDIAN INSTITUTE OF INFORMATION TECHNOLOGY (IIIT), SURAT"
            degree="Electronics and Communication Engineering — CGPA 8.86"
            period="11/2022 – 07/2026"
            location="Surat, Gujarat"
            details={[]}
          />
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={Briefcase}>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpCard
            company="Blue Stock Fintech Company"
            role="SDE Intern | Python, Django, Postman, HTML, CSS, JavaScript"
            period="08/2024"
            points={[
              'Part of a 5‑member team delivering core product features.',
              'Built displays for company logo, name, price band, opening/closing dates, issue size, issue type, listing date, status, IPO price, listing price, listing gain, CMP, and current return.',
              'Enabled downloadable RHP and DRHP PDFs.',
              'Developed IPO web application and supporting APIs.',
              'Worked end‑to‑end as a full‑stack developer.',
            ]}
          />
        </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" icon={Award}>
        <div className="grid gap-6 md:grid-cols-2">
          <AchCard
            title="Key Highlights"
            items={[
              'FFE Scholar',
            ]}
          />
        </div>
      </Section>

      {/* Extracurricular */}
      <Section id="about" title="About / Extracurricular" icon={BookOpen}>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <ul className="grid gap-2 sm:grid-cols-2 text-gray-700 text-sm">
            <li>• Dancing</li>
            <li>• Reading books</li>
            <li>• Playing games</li>
            <li>• FFE Scholar</li>
          </ul>
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications" title="Certifications" icon={Award}>
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
            <li>IBM SkillsBuild — AI and ML</li>
            <li>Coursera — Data Structures and Algorithms (DSA)</li>
            <li>Edu-versity — AI and ML</li>
            <li>Graphs Camp by Codeforces Master (selected from 40,000+ applicants; learned 17+ advanced graph problem‑solving techniques)</li>
            <li>Completed the Mentorship Program (through FFE)</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={Mail}>
        <div className="overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-8 shadow-lg">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.25),transparent_35%)]" />
          <div className="relative grid items-start gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s connect</h3>
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

function Stars({ rating }) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: 4 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
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

function EduCard({ school, degree, period, location, details }) {
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{school}</h3>
          <p className="text-sm text-gray-600">{degree}</p>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">{period}</span>
      </div>
      <div className="mt-3 text-sm text-gray-700">{location}</div>
      {Array.isArray(details) && details.length > 0 && (
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-700">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
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
