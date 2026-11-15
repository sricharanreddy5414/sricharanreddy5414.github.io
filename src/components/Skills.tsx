import { skillGroups } from '../data/profile'
import { Container, Reveal, SectionHeading } from './ui'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="skills-heading"
            index="02  Skills"
            title="Technical skills"
            lede="Grouped by the platforms, languages, and tools I use in projects, coursework, and certification study."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className={`rounded-3xl border border-white/10 bg-charcoal p-6 transition-colors hover:border-white/20 md:p-8 ${
                  group.wide ? 'md:col-span-2' : ''
                }`}
              >
                <h3 className="text-lg font-medium text-paper">{group.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-mist">{group.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-paper"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
