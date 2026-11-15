import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  id,
  index,
  title,
  lede,
}: {
  id: string
  index: string
  title: string
  lede: string
}) {
  return (
    <header className="max-w-2xl">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-crimson">{index}</p>
      <h2 id={id} className="mt-3 font-serif text-4xl leading-tight text-balance text-paper sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-pretty text-mist sm:text-lg">{lede}</p>
    </header>
  )
}

export function ExternalLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export const primaryActionClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-wine px-5 text-sm font-medium text-white transition-colors hover:bg-[#861628]'

export const secondaryActionClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-paper transition-colors hover:border-white/30'
