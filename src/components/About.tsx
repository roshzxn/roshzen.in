import { CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import type { Principle } from '../types/portfolio'

interface AboutProps {
  highlights: string[]
  principles: Principle[]
}

function About({ highlights, principles }: AboutProps) {
  return (
    <section id="about" className="section-shell py-20 md:py-28 relative z-10">
      <SectionHeader
        eyebrow="About"
        title="A CSE student building real projects while learning like an engineer."
        text="I am Arun Roshan, also known as RoshZen. I learn by building practical websites, app ideas, UI concepts, and developer-focused projects that improve my frontend, programming, and product thinking."
      />

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <article className="glass-panel h-full rounded-3xl p-6 md:p-8 border border-red-500/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <p className="text-lg leading-8 text-slate-300">
              My current focus is frontend development with <strong className="text-white font-medium">React, JavaScript, Tailwind CSS</strong>, and clean UI/UX. I also practice Python, explore app development ideas, and continuously refine the engineering fundamentals needed to build production-grade software.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              I specialize in crafting digital experiences that feel purposeful and fast: portfolios, developer tools, learning platforms, interactive web experiences, and scalable interfaces with responsive design.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-red-400/15 bg-red-500/[0.045] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/35 hover:bg-red-500/[0.08]"
                >
                  <CheckCircle2 className="mt-1 shrink-0 text-red-400" size={19} />
                  <span className="leading-7 text-slate-200">{highlight}</span>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid h-full gap-4 sm:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="red-corner glass-panel group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-red-400/50 hover:shadow-[0_12px_36px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.18)] cursor-default"
                >
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-red-300 transition duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-105">
                    <Icon size={22} />
                  </span>
                  <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-red-100">{item.label}</h3>
                  <p className="mt-3 leading-7 text-slate-400">
                    A core philosophy guiding architecture, clean design, and performance.
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default About
