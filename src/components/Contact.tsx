import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Loader2, Send, XCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import { saveSubmission } from '../private-links/lib/submissionService'
import type { SocialLink } from '../types/portfolio'

interface FormState {
  name: string
  email: string
  projectType: string
  message: string
}

const INITIAL: FormState = {
  name: '',
  email: '',
  projectType: 'Portfolio website',
  message: '',
}

interface ContactProps {
  socialLinks: SocialLink[]
}

function Contact({ socialLinks }: ContactProps) {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please complete all required fields.')
      setStatus('error')
      return
    }

    setStatus('loading')
    setErrorMsg('')

    try {
      // Save locally & to database inbox
      await saveSubmission({
        name: form.name,
        email: form.email,
        projectType: form.projectType,
        message: form.message,
      })

      // Send via EmailJS
      await emailjs.send(
        'service_eo8uktg',
        'template_mlzrdgm',
        {
          from_name: form.name,
          from_email: form.email,
          project_type: form.projectType,
          message: form.message,
          to_name: 'Arun',
        },
        'rhqTqDs_ZjQQv3mBy'
      )

      setStatus('success')
      setForm(INITIAL)

      setTimeout(() => {
        setStatus((s) => (s !== 'error' ? 'idle' : s))
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setErrorMsg('Could not send the message. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-shell py-20 md:py-28 relative z-10">
      <SectionHeader
        eyebrow="Contact"
        title="Have an idea, project, or collaboration? Send a message."
        text="Fill in the form and your message will be sent directly to my inbox. I'll get back to you promptly."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel h-full rounded-3xl p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-400 font-semibold">
              Start a conversation
            </p>
            <h3 className="mt-3 text-3xl font-bold text-white">Let's build something clean.</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I am open to student project websites, portfolio pages, React app ideas, freelance
              builds, and creative digital work that helps me grow as a software engineer.
            </p>

            <div className="mt-8 grid gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-red-500/10 text-red-300 transition-colors group-hover:bg-red-500 group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{item.label}</span>
                      <span className="block truncate text-sm text-slate-400">{item.handle}</span>
                    </span>
                    {item.href && <ArrowUpRight className="ml-auto shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />}
                  </>
                )

                if (!item.href) {
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 rounded-2xl border border-red-400/15 bg-black/30 p-4 transition-colors duration-300"
                    >
                      {content}
                    </div>
                  )
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-red-400/15 bg-black/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:bg-red-500/10 hover:shadow-[0_4px_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.1)]"
                  >
                    {content}
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="glass-panel rounded-3xl p-6 md:p-8" onSubmit={handleSubmit} noValidate>
            {/* Success banner */}
            {status === 'success' && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-green-300 animate-fadeIn">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-400" />
                <span className="text-sm font-medium leading-6">
                  Message sent! I'll get back to you soon. 🎉
                </span>
              </div>
            )}
            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-red-300 animate-fadeIn">
                <XCircle size={20} className="mt-0.5 shrink-0 text-red-400" />
                <span className="text-sm font-medium leading-6">{errorMsg}</span>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Name <span className="text-red-400">*</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-input"
                  autoComplete="name"
                  required
                  disabled={status === 'loading'}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-200">
                Email <span className="text-red-400">*</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact-input"
                  autoComplete="email"
                  required
                  disabled={status === 'loading'}
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              Project Type
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="contact-input text-slate-200"
                disabled={status === 'loading'}
              >
                <option value="Portfolio website">Portfolio website</option>
                <option value="React app idea">React app idea</option>
                <option value="Web Applications">Web Applications</option>
                <option value="Student project">Student project</option>
                <option value="Creative design idea">Creative design idea</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-200">
              Message <span className="text-red-400">*</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your idea or project..."
                className="contact-input resize-none"
                required
                disabled={status === 'loading'}
              />
            </label>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-red-700 px-6 py-4 font-bold text-white shadow-[0_0_32px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-red-400 hover:to-red-600 hover:shadow-[0_0_50px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
