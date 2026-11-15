import { ArrowUpRight } from 'lucide-react'
import { hackathons } from '../data/profile'
import { Container, ExternalLink, Reveal, SectionHeading, secondaryActionClass } from './ui'

export function Hackathons() {
  return (
    <section id="hackathons" aria-labelledby="hackathons-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="hackathons-heading"
            index="06  Hackathons"
            title="Hackathons"
            lede="Participation and a team project, limited to the work I actually did."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {hackathons.map((item) => (
              <article key={item.title} className="rounded-3xl border border-white/10 bg-charcoal p-6 md:p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-crimson">{item.kind}</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-balance text-paper">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-mist">{item.summary}</p>
                {'href' in item && item.href ? (
                  <ExternalLink href={item.href} className={`${secondaryActionClass} mt-6`}>
                    {item.linkLabel}
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </ExternalLink>
                ) : null}
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
