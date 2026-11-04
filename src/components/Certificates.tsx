import { useState } from 'react'
import {
  ExternalLink,
  Eye,
  CheckCircle2,
  Calendar,
  Building2,
  FileCheck,
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  Award,
} from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export interface CertificateItem {
  id?: string | number
  title: string
  issuer?: string
  date?: string
  issue_date?: string
  credentialId?: string
  credential_id?: string
  verifyUrl?: string
  verification_url?: string
  viewUrl?: string
  certificateImage?: string
  about?: string
  description?: string
  skills?: string[]
  skills_covered?: string[]
  featured?: boolean
  is_active?: boolean
  position?: number
}

interface CertificatesProps {
  certificates?: CertificateItem[]
}

export default function Certificates({ certificates = [] }: CertificatesProps) {
  const [selectedIssuer, setSelectedIssuer] = useState('ALL')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const activeCerts = certificates
    .filter((c) => c.is_active !== false)
    .sort((a, b) => (a.position || 0) - (b.position || 0))

  const issuers = ['ALL', ...new Set(activeCerts.map((c) => c.issuer).filter((val): val is string => Boolean(val)))]

  const filteredCerts =
    selectedIssuer === 'ALL'
      ? activeCerts
      : activeCerts.filter((c) => c.issuer === selectedIssuer)

  const handleCopyCredential = (id?: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (!id) return
    navigator.clipboard.writeText(id)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const updateCardGlow = (event: React.MouseEvent<HTMLElement>) => {
    // Disable 3D tilt on touch devices for butter-smooth mobile scrolling
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    const rotateX = ((y - rect.height / 2) / rect.height) * -4
    const rotateY = ((x - rect.width / 2) / rect.width) * 4
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
    card.style.zIndex = '40'
    if (card.parentElement) {
      card.parentElement.style.zIndex = '40'
    }
  }

  const resetCardTilt = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    event.currentTarget.style.zIndex = ''
    if (event.currentTarget.parentElement) {
      event.currentTarget.parentElement.style.zIndex = ''
    }
  }

  return (
    <section id="certificates" className="section-shell py-16 md:py-28 relative z-10">
      <SectionHeader
        eyebrow="Certifications"
        title="Verified credentials, specializations, and professional learning milestones."
        text="Formal coursework, professional specializations, and developer certifications backing my software engineering foundation."
      />

      {/* Top Telemetry Info & Filter Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <strong className="text-white">{activeCerts.length}</strong> Verified Credentials
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            100% Authenticated
          </span>
        </div>

        {/* Filter Pills with touch-friendly horizontal swipe on mobile */}
        {issuers.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 sm:py-0 sm:flex-wrap -mx-1 px-1 sm:mx-0 sm:px-0">
            {issuers.map((issuer) => {
              const count =
                issuer === 'ALL'
                  ? activeCerts.length
                  : activeCerts.filter((c) => c.issuer === issuer).length

              return (
                <button
                  key={issuer}
                  type="button"
                  onClick={() => setSelectedIssuer(issuer)}
                  className={`px-3 py-1.5 rounded-full font-mono text-xs transition border cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    selectedIssuer === issuer
                      ? 'bg-red-500 text-white border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.35)] font-bold'
                      : 'bg-black/30 border-red-400/15 text-slate-300 hover:border-red-400/40 hover:text-white'
                  }`}
                >
                  <span>{issuer}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedIssuer === issuer ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-5 lg:gap-8 lg:grid-cols-2">
        {filteredCerts.map((cert, index) => {
          const viewCertificateLink = cert.viewUrl || cert.certificateImage || cert.verifyUrl || cert.verification_url
          const credId = cert.credentialId || cert.credential_id
          const certDate = cert.date || cert.issue_date
          const certAbout = cert.about || cert.description
          const certSkills = cert.skills || cert.skills_covered

          return (
            <Reveal
              key={cert.id || cert.title}
              delay={index * 0.05}
              className="relative z-10 transition-[z-index] duration-150 hover:z-40 h-full"
            >
              <article
                onMouseMove={updateCardGlow}
                onMouseLeave={resetCardTilt}
                className="certificate-card red-corner glass-panel group relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 transition-[border-color,box-shadow,z-index] duration-300 hover:z-40 hover:border-red-400/45 border border-red-400/15 bg-black/40"
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  {/* Top HUD Index Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-red-400/10">
                    <p className="font-mono text-xs uppercase tracking-wider text-red-300 flex items-center gap-1.5">
                      <span>CERT {String(index + 1).padStart(2, '0')}</span>
                      <span className="text-slate-600 hidden sm:inline">//</span>
                      <span className="text-slate-400 font-normal hidden sm:inline">CREDENTIAL LOG</span>
                    </p>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {cert.featured && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/25 px-2 py-0.5 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          Featured
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Verified
                      </span>
                    </div>
                  </div>

                  {/* Header with Icon & Title */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-500/20 to-red-950/40 border border-red-500/30 text-xl sm:text-2xl group-hover:scale-105 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                      <span role="img" aria-label="trophy">🏆</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug break-words group-hover:text-red-200 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Metadata Spec Box: Issued by | Date | Credential ID */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-red-400/15 bg-black/40 font-mono text-xs">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                        <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500">
                          Issued by
                        </span>
                        <span className="font-semibold text-slate-200 truncate block text-xs">
                          {cert.issuer || 'Accredited Org'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500">
                          Date
                        </span>
                        <span className="font-semibold text-slate-200 truncate block text-xs">
                          {certDate || 'Completed'}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 min-w-0 sm:border-l sm:border-white/5 sm:pl-3 pt-2 sm:pt-0 border-t border-white/5 sm:border-t-0">
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0">
                          <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider text-slate-500">
                            Credential ID
                          </span>
                          <span className="font-semibold text-slate-200 truncate block font-mono text-[11px]">
                            {credId || 'ID Logged'}
                          </span>
                        </div>
                      </div>

                      {credId && (
                        <button
                          type="button"
                          onClick={(e) => handleCopyCredential(credId, e)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition active:scale-95 shrink-0"
                          title="Copy Credential ID"
                          aria-label="Copy Credential ID"
                        >
                          {copiedId === credId ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* About the Certificate */}
                  {certAbout && (
                    <div className="space-y-1.5">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-red-400 shrink-0" />
                        About the Certificate
                      </p>
                      <p className="leading-6 sm:leading-7 text-slate-300 text-xs sm:text-sm">
                        {certAbout}
                      </p>
                    </div>
                  )}

                  {/* Skills Covered */}
                  {certSkills && certSkills.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                        Skills Covered
                      </p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {certSkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="rounded-full border border-red-400/20 bg-red-500/[0.055] px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[11px] sm:text-xs font-mono text-slate-200 hover:border-red-400/40 hover:bg-red-500/10 transition-colors flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-red-400 shrink-0" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certificate Holographic Preview (Click opens in new tab) */}
                  {cert.certificateImage && (
                    <div className="space-y-2">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
                        Certificate Document
                      </p>
                      <a
                        href={viewCertificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/doc block relative rounded-xl sm:rounded-2xl overflow-hidden border border-red-400/20 bg-black/60 shadow-lg cursor-pointer transition-all duration-300 hover:border-red-500/60"
                        title="Click to view full certificate details in a new tab"
                      >
                        <div className="relative h-40 sm:h-52 w-full overflow-hidden">
                          <img
                            src={cert.certificateImage}
                            alt={cert.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-center group-hover/doc:scale-105 transition-transform duration-500 opacity-90 group-hover/doc:opacity-100"
                          />
                          {/* Cyber HUD Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end justify-between p-3 sm:p-4">
                            <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono text-white font-semibold truncate pr-2">
                              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                              <span className="truncate group-hover/doc:text-red-300 transition-colors">
                                Tap to view document
                              </span>
                            </div>
                            <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded-lg bg-black/80 text-slate-300 border border-white/10 group-hover/doc:border-red-500/40 shrink-0">
                              <span>Open</span>
                              <ExternalLink className="w-3 h-3 text-red-400" />
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>

                {/* Dual Action Buttons (stacked nicely on mobile, side-by-side on desktop) */}
                <div className="relative z-10 mt-6 sm:mt-7 flex flex-col sm:flex-row gap-2.5 sm:gap-3 border-t border-red-400/15 pt-4 sm:pt-5">
                  {viewCertificateLink && (
                    <a
                      href={viewCertificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-black/40 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-red-100 transition hover:bg-red-500/20 hover:border-red-400/60 cursor-pointer shadow-sm hover:text-white"
                    >
                      <Eye className="w-4 h-4 text-red-400 shrink-0" />
                      <span>View Certificate</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-0.5 shrink-0" />
                    </a>
                  )}

                  {cert.verifyUrl || cert.verification_url ? (
                    <a
                      href={cert.verifyUrl || cert.verification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition shadow-[0_0_24px_rgba(239,68,68,0.35)] hover:shadow-[0_0_32px_rgba(239,68,68,0.6)] cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Verify Credential</span>
                    </a>
                  ) : (
                    <div className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/15 px-4 py-2 text-xs font-mono text-slate-500">
                      <span>Verification on Request</span>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
