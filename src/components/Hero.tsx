import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { Container, ExternalLink, primaryActionClass, secondaryActionClass } from './ui'

function Portrait() {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className="grid aspect-square w-full place-items-center bg-charcoal"
        role="img"
        aria-label={`${profile.name}. Profile photo unavailable.`}
      >
        <span className="font-serif text-6xl tracking-wide text-paper" aria-hidden="true">
          {profile.initials}
        </span>
      </div>
    )
  }

  return (
    <img
      src={profile.avatarUrl}
      alt={`GitHub profile photo of ${profile.name}`}
      width={480}
      height={480}
      fetchPriority="high"
      decoding="async"
      className="aspect-square w-full object-cover"
      onError={() => setFailed(true)}
    />
  )
}

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="hero-atmosphere relative overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.8fr)]">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-crimson">{profile.location}</p>
            <p className="mt-5 text-lg font-medium tracking-tight text-paper sm:text-xl">{profile.name}</p>
            <h1
              id="home-heading"
              aria-label={profile.headline}
              className="mt-3 max-w-3xl font-serif text-5xl leading-[1.05] text-balance text-paper sm:text-6xl lg:text-7xl"
            >
              <span aria-hidden="true">
                Building <span className="italic text-crimson">Reliable</span> Cloud Solutions.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-paper sm:text-lg">{profile.subtitle}</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-pretty text-mist">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className={primaryActionClass}>
                Explore My Work
              </a>
              <ExternalLink href={profile.github} className={secondaryActionClass}>
                View GitHub
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </ExternalLink>
              <a href="#contact" className={secondaryActionClass}>
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -top-3 -left-3 h-16 w-16 border-t border-l border-crimson/80" aria-hidden="true" />
            <div className="absolute -right-3 -bottom-3 h-16 w-16 border-r border-b border-crimson/80" aria-hidden="true" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
              <Portrait />
            </div>
            <a
              href="#certifications"
              className="mt-4 block rounded-2xl border border-white/10 bg-charcoal/90 p-5 transition-colors hover:border-crimson/50"
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

        <dl className="mt-16 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3">
          <div>
            <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">University</dt>
            <dd className="mt-2 text-sm text-paper">Alliance University, B.Tech CSE – Cloud Computing</dd>
          </div>
          <div>
            <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">Current CGPA</dt>
            <dd className="mt-2 text-sm text-paper">8.8/10 through Semester 5</dd>
          </div>
          <div>
            <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">Expected graduation</dt>
            <dd className="mt-2 text-sm text-paper">2028</dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}
