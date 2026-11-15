import { aboutParagraphs, focusAreas } from '../data/profile'
import { Education } from './Education'
import { Container, Reveal, SectionHeading } from './ui'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="about-heading"
            index="01  About"
            title="About me"
            lede="Early-career cloud work grounded in an AWS certification, university study, and hands-on prototypes."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="space-y-5 text-base leading-7 text-pretty text-mist">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {focusAreas.map((area) => (
                <li key={area.title} className="rounded-2xl border border-white/10 bg-charcoal px-5 py-4">
                  <h3 className="text-sm font-medium text-paper">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-mist">{area.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Education />
      </Container>
    </section>
  )
}
