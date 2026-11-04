import type { SocialLink } from '../types/portfolio'

interface FooterProps {
  socialLinks: SocialLink[]
}

function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="border-t border-red-500/15 py-10 bg-black/40 backdrop-blur-md">
      <div className="section-shell flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-red-500 to-red-800 font-mono text-xs font-black text-white">
              AR
            </span>
            <span className="font-mono text-base font-bold text-white tracking-wide">RoshZen</span>
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Arun Roshan. Built with React 19, TypeScript & modern UI design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5">
          {socialLinks
            .filter((item) => item.href)
            .map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-red-400/20 bg-red-500/[0.05] text-slate-300 transition duration-200 hover:-translate-y-1 hover:border-red-400/50 hover:bg-red-500/20 hover:text-white"
                  aria-label={item.label}
                >
                  <Icon size={18} />
                </a>
              )
            })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
