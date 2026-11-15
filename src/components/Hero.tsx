import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { heroRoles, profile } from '../data/profile'
import { PortraitFrame } from './PortraitFrame'
import { Container, primaryActionClass, secondaryActionClass } from './ui'

function NameLine({
  children,
  delay,
  accent = false,
}: {
  children: string
  delay: number
  accent?: boolean
}) {
  const reduce = useReducedMotion()
  const className = `display-name block whitespace-nowrap text-paper ${accent ? 'reddy-line' : ''}`
  const period = accent && children.endsWith('.')
  const label = period ? children.slice(0, -1) : children
  const content = (
    <>
      {label}
      {period ? <span className="text-crimson">.</span> : null}
    </>
  )
  if (reduce) {
    return <span className={className}>{content}</span>
  }

  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={className}
        initial={{ opacity: 0, y: '70%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.span>
    </span>
  )
}

function RoleLine() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce) return
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % heroRoles.length)
    }, 2800)
    return () => window.clearInterval(id)
  }, [reduce])

  if (reduce) {
    return <p className="mt-6 max-w-xl text-base leading-7 text-paper sm:text-lg">{heroRoles[0]}</p>
  }

  return (
    <p className="relative mt-6 h-8 overflow-hidden text-base text-paper sm:h-9 sm:text-lg" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={heroRoles[index]}
          className="absolute inset-x-0 top-0 block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          {heroRoles[index]}
        </motion.span>
      </AnimatePresence>
    </p>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const hello = (
    <p className="text-xs font-semibold tracking-[0.32em] text-crimson sm:text-sm">HELLO, I'M</p>
  )

  return (
    <section id="home" aria-labelledby="home-heading" className="hero-atmosphere relative">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container wide className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="grid items-center gap-12 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.7fr)] xl:gap-10">
          <div className="hero-intro min-w-0">
            {reduce ? (
              hello
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
                {hello}
              </motion.div>
            )}
            <h1 id="home-heading" aria-label={profile.name} className="mt-4">
              <NameLine delay={0.2}>SIRIVELLA</NameLine>
              <NameLine delay={0.34}>SRI CHARAN</NameLine>
              <NameLine delay={0.48} accent>
                REDDY.
              </NameLine>
            </h1>
            <RoleLine />
            <p className="mt-4 max-w-xl text-sm leading-7 text-pretty text-mist sm:text-base">{profile.heroIntro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className={`${primaryActionClass} min-h-12 px-6 text-base`}>
                View My Work
              </a>
              <a href="#contact" className={`${secondaryActionClass} min-h-12 px-6 text-base`}>
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-intro-fade relative mx-auto w-full max-w-md">
            <PortraitFrame />
            <a
              href="#certifications"
              className="relative z-10 mt-8 block rounded-2xl border border-white/10 bg-charcoal/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md transition-colors duration-300 hover:border-crimson/50"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-crimson">Primary credential</p>
              <p className="mt-2 font-serif text-4xl text-paper">
                872<span className="text-xl text-mist">/1000</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-mist">
                AWS Certified Solutions Architect – Associate, SAA-C03. Issued 13 November 2026. Valid through 13 November 2029.
              </p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
