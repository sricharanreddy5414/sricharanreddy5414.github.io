import { education } from '../data/profile'
import { Container, Reveal, SectionHeading } from './ui'

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="education-heading"
            index="05  Education"
            title="Education"
            lede="Alliance University for the B.Tech in cloud computing, with Class XII and Class X results from Andhra Pradesh."
          />
          <ol className="relative mt-12 border-l border-white/10">
            {education.map((item) => (
              <li key={item.school} className="relative pb-12 pl-8 last:pb-0">
                <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-crimson" aria-hidden="true" />
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-sm text-crimson">{item.period}</p>
                  <p className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs uppercase tracking-[0.14em] text-mist">
                    {item.status}
                  </p>
                </div>
                <h3 className="mt-3 font-serif text-3xl text-paper">{item.school}</h3>
                <p className="mt-2 text-sm text-paper">
                  {item.credential}
                  <span className="text-mist"> · {item.detail}</span>
                </p>
                <p className="mt-1 text-sm text-mist">{item.place}</p>
                <ul className="mt-4 space-y-1">
                  {item.points.map((point) => (
                    <li key={point} className="text-sm text-paper">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </Container>
    </section>
  )
}
