import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/profile'
import { Container, ExternalLink, Reveal, SectionHeading, TiltSurface, secondaryActionClass } from './ui'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="projects-heading"
            index="03  Projects"
            title="Selected projects"
            lede="Two independent cloud prototypes and one hackathon team contribution, with the scope of my work stated on each card."
          />
          <div className="mt-12 space-y-6">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.08}>
              <TiltSurface>
              <article id={project.id} className="rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_24px_60px_rgba(0,0,0,0.28)] md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-serif text-lg leading-none text-crimson">{project.number}</p>
                  <p className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-mist">
                    {project.kind}
                  </p>
                </div>
                <h3 className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-balance text-paper md:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-pretty text-mist">{project.summary}</p>

                {project.features ? (
                  <div className="mt-8">
                    <h4 className="text-sm font-medium text-paper">Included in the prototype</h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex gap-3 text-sm leading-6 text-mist">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8">
                  <h4 className="text-sm font-medium text-paper">{project.contributionTitle}</h4>
                  <ul className="mt-3 grid gap-2 lg:grid-cols-2">
                    {project.contribution.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-mist">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-crimson" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.troubleshooting ? (
                  <div className="mt-8 border-l-2 border-wine pl-4">
                    <h4 className="text-sm font-medium text-paper">{project.troubleshooting.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-mist">{project.troubleshooting.body}</p>
                  </div>
                ) : null}

                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/10 px-3 py-1 text-xs text-paper">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-2">
                  {project.disclosures.map((note) => (
                    <p key={note} className="text-sm leading-6 text-paper">
                      {note}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <ExternalLink href={project.github} className={secondaryActionClass}>
                    GitHub repository
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </ExternalLink>
                  {project.live ? (
                    <ExternalLink href={project.live.href} className={secondaryActionClass}>
                      {project.live.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ExternalLink>
                  ) : null}
                  {project.unavailable ? (
                    <ExternalLink href={project.unavailable.href} className={secondaryActionClass}>
                      {project.unavailable.label}
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ExternalLink>
                  ) : null}
                </div>
              </article>
              </TiltSurface>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
