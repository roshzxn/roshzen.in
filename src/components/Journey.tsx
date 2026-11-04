import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import type { JourneyItem } from '../types/portfolio'

interface JourneyProps {
  journey: JourneyItem[]
}

function Journey({ journey }: JourneyProps) {
  return (
    <section id="journey" className="section-shell py-20 md:py-28 relative z-10">
      <SectionHeader
        eyebrow="Learning Journey"
        title="A growth path built through practice, projects, and steady improvement."
        text="Milestones tracking my transition from curiosity to active project building and software craftsmanship."
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-red-500/80 via-red-600/50 to-transparent shadow-[0_0_24px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.4)] md:left-1/2" />

        <div className="grid gap-6">
          {journey.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 0
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <div
                  className={`relative grid gap-5 pl-14 md:grid-cols-2 md:pl-0 ${
                    isEven ? '' : 'md:[&>article]:col-start-2'
                  }`}
                >
                  <span className="absolute left-0 top-6 z-10 grid h-10 w-10 place-items-center rounded-2xl border border-red-400/50 bg-[var(--portfolio-node-bg,#0b0505)] text-red-300 shadow-[0_0_30px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.32)] md:left-1/2 md:-translate-x-1/2 transition-transform duration-300 hover:scale-110">
                    <Icon size={19} />
                  </span>

                  <article className="journey-card glass-panel rounded-3xl p-6 md:p-7 transition duration-300 hover:-translate-y-1.5 hover:border-red-400/50 hover:shadow-[0_10px_35px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.18)]">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-400 font-semibold">
                        Step {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-red-400/60 animate-ping" />
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                  </article>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Journey
