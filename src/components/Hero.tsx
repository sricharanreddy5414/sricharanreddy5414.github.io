import { profile } from '../data/profile'
import { HeroVisual } from './HeroVisual'
import { Container, ExternalLink, primaryActionClass, secondaryActionClass } from './ui'

const particles = [
  { left: '8%', top: '22%', delay: '0s' },
  { left: '18%', top: '68%', delay: '2.4s' },
  { left: '32%', top: '40%', delay: '4s' },
  { left: '61%', top: '18%', delay: '1.2s' },
  { left: '74%', top: '62%', delay: '3.1s' },
  { left: '86%', top: '28%', delay: '5s' },
  { left: '92%', top: '74%', delay: '2s' },
  { left: '48%', top: '82%', delay: '6s' },
]

const [headlineBefore, headlineAfter] = profile.headline.split('Reliable')

export function Hero() {
  return (
    <section id="home" aria-labelledby="home-heading" className="hero-atmosphere relative overflow-x-clip">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-smoke" aria-hidden="true" />
      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span key={`${particle.left}-${particle.top}`} style={{ left: particle.left, top: particle.top, animationDelay: particle.delay }} />
        ))}
      </div>
      <Container wide className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.9fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(34rem,0.95fr)] xl:gap-12">
          <div className="hero-intro min-w-0">
            <p className="text-xs font-semibold tracking-[0.28em] text-neon uppercase">{profile.location}</p>
            <p className="hero-name mt-4 text-paper">{profile.name}</p>
            <h1 id="home-heading" className="hero-headline mt-3 font-serif text-balance text-paper">
              {headlineBefore.trimEnd()} <span className="text-crimson">Reliable</span>
              <br />
              {headlineAfter.trim()}
            </h1>
            <p className="mt-6 max-w-xl text-base font-medium text-pretty text-paper sm:text-lg">{profile.subtitle}</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-pretty text-mist sm:text-base">{profile.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#projects" className={`${primaryActionClass} min-h-12 px-6 font-semibold tracking-[0.14em] uppercase shadow-[0_10px_30px_rgba(255,45,60,0.18)] hover:shadow-[0_12px_34px_rgba(255,45,60,0.32)]`}>
                Explore My Work
              </a>
              <ExternalLink href={profile.github} className={`${secondaryActionClass} min-h-12 px-6 font-semibold tracking-[0.14em] uppercase hover:border-neon/50`}>
                View GitHub
              </ExternalLink>
              <a href="#contact" className={`${secondaryActionClass} min-h-12 px-6 font-semibold tracking-[0.14em] uppercase hover:border-neon/50`}>
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-intro-fade min-w-0">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  )
}
