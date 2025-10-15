import { useState } from 'react'
import { Linkedin, Copy, Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const profileUrl = 'https://in.linkedin.com/in/timmareddy-deekshitha-701218318'
  const email = 'ui22ec78@iiitsurat.ac.in'
  const phone = '+91-9347450699'

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="relative mx-auto mt-24 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 p-10 shadow-lg">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(244,114,182,0.25),transparent_35%)]" />

        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let’s build something recruiters love</h2>
          <p className="mt-3 max-w-2xl text-slate-200">
            I craft interactive experiences that stand out in a crowded inbox. I’m quick to collaborate and quicker to deliver.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`mailto:${email}?subject=Let%27s%20work%20together&body=Hi%2C%20I%27d%20love%20to%20chat%20about...`}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow hover:bg-slate-50"
            >
              <Mail className="h-4 w-4" />
              Email me
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${phone.replace(/[^+\d]/g, '')}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              Quick call
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <Linkedin className="h-4 w-4" />
              Connect on LinkedIn
            </motion.a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <Copy className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy profile link'}
            </motion.button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Timmareddy Deekshitha. All rights reserved.
      </p>
    </section>
  )
}
