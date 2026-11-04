import Reveal from './Reveal'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  text?: string
}

function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
      <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-red-300 shadow-[0_0_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.15)]">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
        {eyebrow}
      </div>
      <div className="mx-auto mt-4 mb-5 h-px w-16 bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
      <h2 className="text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{text}</p>}
    </Reveal>
  )
}

export default SectionHeader
