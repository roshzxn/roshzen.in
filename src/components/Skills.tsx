import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import type { SkillGroup } from '../types/portfolio'

interface SkillsProps {
  skillGroups: SkillGroup[]
}

function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="section-shell py-20 md:py-28 relative z-10">
      <SectionHeader
        eyebrow="Skills"
        title="A practical stack for frontend, programming, tools, and continuous learning."
        text="Core tools and technologies I use to build responsive, performant, and aesthetic applications."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group, index) => {
          const Icon = group.icon
          return (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="skill-card red-corner glass-panel group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-red-400/50 hover:shadow-[0_12px_36px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.16)] flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-red-300 transition duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-105 shadow-[0_0_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.12)]">
                      <Icon size={24} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-400/70 font-semibold">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-red-100">{group.title}</h3>
                  <p className="mt-1.5 text-xs font-mono uppercase tracking-wider text-slate-400">{group.skills.length} technologies</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-red-400/15 bg-black/40 px-3 py-1.5 text-xs sm:text-sm text-slate-200 transition duration-200 group-hover:border-red-400/30 group-hover:bg-red-500/[0.08] hover:scale-105 hover:text-white hover:border-red-400 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
