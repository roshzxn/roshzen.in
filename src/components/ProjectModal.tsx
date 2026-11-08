import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  Layers,
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
} from 'lucide-react'
import type { Project } from '../types/portfolio'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

type ModalTab = 'architecture' | 'overview' | 'challenges'

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('architecture')

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const arch = project.architecture

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-red-500/30 bg-[#0a0a0f] text-slate-100 shadow-[0_0_50px_rgba(220,38,38,0.25)] overflow-hidden z-10"
        >
          {/* Cyberpunk Top Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700" />

          {/* Modal Header */}
          <div className="p-5 sm:p-7 border-b border-white/10 bg-black/40">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-red-500/15 border border-red-500/30 text-red-400">
                    <Terminal size={12} />
                    {project.category || 'Software Project'}
                  </span>
                  {project.live ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Production Live
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      Active Prototype
                    </span>
                  )}
                </div>
                <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-black text-white tracking-wide">
                  {project.title}
                </h2>
                {project.tagline && (
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {project.tagline}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/40 transition cursor-pointer shrink-0"
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mt-6 overflow-x-auto no-scrollbar pt-1">
              <button
                type="button"
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition flex items-center gap-2 cursor-pointer shrink-0 ${
                  activeTab === 'architecture'
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Layers size={15} />
                <span>System Architecture</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition flex items-center gap-2 cursor-pointer shrink-0 ${
                  activeTab === 'overview'
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Cpu size={15} />
                <span>Overview & Metrics</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('challenges')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-semibold transition flex items-center gap-2 cursor-pointer shrink-0 ${
                  activeTab === 'challenges'
                    ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <Zap size={15} />
                <span>Engineering Challenges</span>
              </button>
            </div>
          </div>

          {/* Modal Body (Scrollable) */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-300">
            {/* TAB 1: ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                {arch ? (
                  <>
                    {/* Architecture Summary Banner */}
                    <div className="p-4 sm:p-5 rounded-2xl border border-red-500/20 bg-red-950/10 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-red-400">
                        <Sparkles size={14} />
                        <span>System Design Paradigm</span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-200 font-medium">
                        {arch.designPattern}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                        {arch.summary}
                      </p>
                    </div>

                    {/* Architectural Layers Flow */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Application Flow & Stack Hierarchy
                      </h4>
                      <div className="grid gap-3.5">
                        {arch.layers.map((layer, idx) => (
                          <div
                            key={layer.name}
                            className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/40 transition space-y-2"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                              <div className="flex items-center gap-2.5">
                                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-red-500/20 text-red-400 font-mono text-xs font-bold">
                                  0{idx + 1}
                                </span>
                                <span className="text-sm sm:text-base font-bold text-white">
                                  {layer.name}
                                </span>
                              </div>
                              <span className="text-[11px] font-mono text-red-300 uppercase tracking-wider bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20 self-start sm:self-auto">
                                {layer.role}
                              </span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-400">
                              {layer.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {layer.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-black/60 border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="p-6 text-center text-slate-400">
                    <p>Detailed architecture diagram is currently being updated for this build.</p>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: OVERVIEW & METRICS */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Core Concept */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Concept & Purpose
                  </h4>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {project.idea}
                  </p>
                </div>

                {/* Key Features */}
                {project.features && project.features.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Highlights & Features
                    </h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                        >
                          <CheckCircle2 size={16} className="text-red-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Performance Metrics */}
                {arch?.metrics && arch.metrics.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Technical Benchmarks & Telemetry
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {arch.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-2xl border border-white/10 bg-black/50 text-center space-y-1"
                        >
                          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                            {m.label}
                          </div>
                          <div className="text-lg sm:text-xl font-black text-white">
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Cloud */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Full Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1 rounded-full text-xs font-mono text-red-200 bg-red-500/10 border border-red-500/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: CHALLENGES & SOLUTIONS */}
            {activeTab === 'challenges' && (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-slate-400">
                  Engineering difficulties encountered during implementation and the technical solutions devised to address them:
                </p>

                {arch?.keyChallenges && arch.keyChallenges.length > 0 ? (
                  <div className="space-y-3.5">
                    {arch.keyChallenges.map((item, idx) => (
                      <div
                        key={item.challenge}
                        className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] space-y-3"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold font-mono shrink-0 mt-0.5">
                            !
                          </span>
                          <div>
                            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
                              Challenge #{idx + 1}
                            </span>
                            <h5 className="text-sm sm:text-base font-bold text-white mt-0.5">
                              {item.challenge}
                            </h5>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5 border-t border-white/5 pt-3">
                          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono shrink-0 mt-0.5">
                            ✓
                          </span>
                          <div>
                            <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                              Engineered Solution
                            </span>
                            <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-relaxed">
                              {item.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-slate-400">
                    <p>Challenges and engineering solutions being documented.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-black/60 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition cursor-pointer"
                >
                  <GitBranch size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 transition shadow-[0_0_20px_rgba(239,68,68,0.4)] cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono text-slate-400 hover:text-white transition cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
