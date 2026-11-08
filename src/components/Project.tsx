import { useState, useMemo } from 'react'
import { ArrowUpRight, GitBranch, LockKeyhole, Search, Sparkles, Layers } from 'lucide-react'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import ProjectModal from './ProjectModal'
import type { Project } from '../types/portfolio'

interface ProjectActionProps {
  href?: string
  children: React.ReactNode
  icon: React.ComponentType<{ size: number }>
}

function ProjectAction({ href, children, icon: Icon }: ProjectActionProps) {
  if (!href) {
    return (
      <span
        className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-red-500/15 bg-black/20 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-500 select-none"
        aria-disabled="true"
      >
        <LockKeyhole size={15} />
        Coming Soon
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-red-100 transition duration-200 hover:-translate-y-0.5 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.35)]"
    >
      <Icon size={15} />
      {children}
    </a>
  )
}

interface ProjectsProps {
  projects: Project[]
}

function Projects({ projects }: ProjectsProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Extract all unique tech tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach((p) => {
      p.stack?.forEach((s) => tags.add(s))
    })
    return ['ALL', ...Array.from(tags).slice(0, 7)]
  }, [projects])

  // Filter projects by search and selected tag
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.idea.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack?.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesTag =
        selectedTag === 'ALL' || project.stack?.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [projects, searchQuery, selectedTag])

  const updateCardGlow = (event: React.MouseEvent<HTMLElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)
    const rotateX = ((y - rect.height / 2) / rect.height) * -5
    const rotateY = ((x - rect.width / 2) / rect.width) * 5
    card.style.transform = `perspective(850px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
    card.style.zIndex = '40'
    if (card.parentElement) {
      card.parentElement.style.zIndex = '40'
    }
  }

  const resetCardTilt = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.transform =
      'perspective(850px) rotateX(0deg) rotateY(0deg) translateZ(0)'
    event.currentTarget.style.zIndex = ''
    if (event.currentTarget.parentElement) {
      event.currentTarget.parentElement.style.zIndex = ''
    }
  }

  return (
    <section id="projects" className="section-shell py-20 md:py-28 relative z-20">
      <SectionHeader
        eyebrow="Projects"
        title="Real builds, app concepts, and developer experiments."
        text="Every project here is a step in my journey — from polished production builds to creative full-stack apps and user-centric concepts."
      />

      {/* Filter and Search Bar */}
      <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Tech Tag Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {allTags.map((tag) => {
            const isActive = selectedTag === tag
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-red-500 text-white font-semibold shadow-[0_0_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.4)] scale-105'
                    : 'border border-red-500/20 bg-black/40 text-slate-300 hover:border-red-400/40 hover:text-white'
                }`}
              >
                {tag}
              </button>
            )
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-2xl border border-red-500/20 bg-black/50 py-2 pl-10 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400/50"
          />
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-3xl border border-red-500/20 bg-black/30 p-12 text-center">
          <p className="text-slate-400">No projects found matching your filter.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedTag('ALL')
            }}
            className="mt-4 rounded-xl bg-red-500/20 px-4 py-2 text-xs font-mono text-red-200 hover:bg-red-500/30"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid gap-6 lg:gap-8 lg:grid-cols-2 p-1">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.05}
              className="relative z-10 transition-[z-index] duration-150 hover:z-40 h-full"
            >
              <article
                className="project-card red-corner glass-panel group relative z-10 flex h-full flex-col overflow-hidden rounded-3xl p-6 sm:p-7 transition-[border-color,box-shadow,z-index] duration-300 hover:z-40 hover:border-red-400/50 hover:shadow-[0_16px_40px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.18)] m-0.5"
                onMouseMove={updateCardGlow}
                onMouseLeave={resetCardTilt}
                style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-red-400 font-semibold">
                        Project {String(index + 1).padStart(2, '0')}
                      </span>
                      {project.live && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-400 border border-emerald-500/20">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white transition-colors group-hover:text-red-100">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-red-500/10 text-red-300 transition duration-300 hover:bg-red-500 hover:text-white hover:scale-110 shadow-[0_0_20px_rgba(var(--portfolio-accent-glow-rgb,220,38,38),0.15)] cursor-pointer"
                    title={`View ${project.title} Architecture & Deep-Dive`}
                    aria-label={`Open ${project.title} case study`}
                  >
                    <Layers size={19} />
                  </button>
                </div>

                <p className="mt-4 leading-7 text-slate-300 text-sm sm:text-base flex-1">{project.idea}</p>

                <div className="mt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                    Tech Stack
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {project.stack?.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-red-400/20 bg-red-500/[0.06] px-3 py-1 text-xs text-slate-200 transition-colors hover:border-red-400/40"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && project.features.length > 0 && (
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                      Key Highlights
                    </p>
                    <ul className="mt-2.5 grid gap-2 text-xs sm:text-sm text-slate-300 sm:grid-cols-3">
                      {project.features.map((feature) => (
                        <li key={feature} className="rounded-xl border border-red-400/15 bg-black/40 p-2.5 flex items-center gap-1.5">
                          <Sparkles size={12} className="text-red-400 shrink-0" />
                          <span className="truncate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-red-400/15 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-red-400/30 bg-black/50 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white transition duration-200 hover:bg-red-500/20 hover:border-red-400/60 hover:text-white cursor-pointer shadow-sm"
                  >
                    <Layers size={14} className="text-red-400" />
                    <span>Deep-Dive</span>
                  </button>

                  <ProjectAction href={project.github} icon={GitBranch}>
                    GitHub
                  </ProjectAction>
                  <ProjectAction href={project.live} icon={ArrowUpRight}>
                    Live Demo
                  </ProjectAction>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      )}

      {/* Interactive System Architecture & Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}

export default Projects
