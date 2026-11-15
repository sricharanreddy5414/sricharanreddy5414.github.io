import { motion, useReducedMotion } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

export function Container({
  children,
  className = '',
  wide = false,
}: {
  children: ReactNode
  className?: string
  wide?: boolean
}) {
  return (
    <div className={`mx-auto w-full px-5 md:px-8 ${wide ? 'max-w-[90rem]' : 'max-w-6xl'} ${className}`}>{children}</div>
  )
}

export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
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
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
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
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-neon px-5 text-sm font-medium text-white transition-colors hover:bg-wine'

export const secondaryActionClass =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-sm font-medium text-paper transition-colors duration-300 hover:border-white/30'

export function TiltSurface({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    event.currentTarget.style.setProperty('--tilt-x', `${(-py * 3.5).toFixed(2)}deg`)
    event.currentTarget.style.setProperty('--tilt-y', `${(px * 4.5).toFixed(2)}deg`)
  }

  function onPointerLeave(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div className={`tilt-scene ${className}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <div className="tilt-inner">{children}</div>
    </div>
  )
}
