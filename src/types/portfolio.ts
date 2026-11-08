import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  href: string
}

export interface HeroStat {
  label: string
  value: string
}

export interface SkillGroup {
  title: string
  icon: LucideIcon
  skills: string[]
}

export interface Principle {
  label: string
  icon: LucideIcon
}

export interface Project {
  id?: string | number
  title: string
  idea: string
  stack: string[]
  features: string[]
  github?: string
  live?: string
  is_active?: boolean
  category?: 'Web App' | 'Frontend' | 'Tool' | 'Full Stack' | 'Learning'
  featured?: boolean
}

export interface Certificate {
  id: string | number
  title: string
  issuer: string
  issue_date?: string
  credential_id?: string
  verification_url?: string
  description?: string
  skills_covered?: string[]
  is_active?: boolean
  position?: number
}

export interface JourneyItem {
  title: string
  text: string
  icon: LucideIcon
}

export interface ServiceItem {
  title: string
  text: string
  icon: LucideIcon
  description?: string
  points?: string[]
}

export interface SocialLink {
  label: string
  href: string
  icon: LucideIcon
  handle: string
}

export interface ThemePalette {
  accent: string
  accentRgb: string
  glowRgb: string
  lightRgb: string
  bgSolid: string
  cardBg: string
  nodeBg: string
  shades: Record<number, string>
  menuColors: string[]
}
