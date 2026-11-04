import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import type { ServiceItem } from '../types/portfolio'

interface ServicesProps {
  services: ServiceItem[]
}

function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section-shell py-20 md:py-28">
      <SectionHeader
        eyebrow="What Can I Build"
        title="Websites, apps, and digital ideas — built clean, fast, and ready to launch."
        text="From personal portfolios to app concepts and landing pages, here is the kind of work I love building as I grow as a developer."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="service-card red-corner glass-panel group h-full rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-red-400/50 hover:shadow-[0_12px_40px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.18)]">
                <div className="mb-6 flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-red-500/10 text-red-300 transition duration-300 group-hover:bg-red-500 group-hover:text-white group-hover:scale-105">
                    <Icon size={22} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-400/70">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-red-100">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

export default Services
