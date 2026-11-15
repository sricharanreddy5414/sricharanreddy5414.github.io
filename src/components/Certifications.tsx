import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { certifications } from '../data/profile'
import { Container, ExternalLink, Reveal, SectionHeading, primaryActionClass } from './ui'

export function Certifications() {
  const featured = certifications.find((item) => item.featured)
  const supporting = certifications.filter((item) => !item.featured)

  return (
    <section id="certifications" aria-labelledby="certifications-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="certifications-heading"
            index="04  Certifications"
            title="Certifications"
            lede="AWS Certified Solutions Architect – Associate is the primary credential. Supporting courses are listed with the issuer details available to me."
          />

          {featured ? (
            <article className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal">
              <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(220px,0.7fr)]">
                <div>
                  <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-crimson">
                    <BadgeCheck aria-hidden="true" className="size-4" />
                    Primary credential
                  </p>
                  <h3 className="mt-4 font-serif text-4xl leading-tight text-balance text-paper md:text-5xl">{featured.title}</h3>
                  <p className="mt-4 text-sm text-mist">
                    {featured.issuer}
                    {featured.exam ? ` · Exam ${featured.exam}` : ''}
                  </p>
                  <dl className="mt-8 grid gap-6 sm:grid-cols-3">
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">Exam score</dt>
                      <dd className="mt-2 text-paper">{featured.score}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">Issued</dt>
                      <dd className="mt-2 text-paper">{featured.issued}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-[0.16em] text-mist">Expiration</dt>
                      <dd className="mt-2 text-paper">{featured.expires}</dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-ink p-6">
                  <p className="font-serif text-6xl text-paper">
                    872<span className="text-2xl text-mist">/1000</span>
                  </p>
                  <p className="mt-4 text-sm leading-6 text-mist">Public badge hosted on Credly. No other certificate numbers are shown.</p>
                  {featured.verifyUrl ? (
                    <ExternalLink href={featured.verifyUrl} className={`${primaryActionClass} mt-6`}>
                      Verify credential
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </ExternalLink>
                  ) : null}
                </div>
              </div>
            </article>
          ) : null}

          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {supporting.map((item) => (
              <li key={item.title} className="rounded-2xl border border-white/10 bg-charcoal p-5">
                <h3 className="text-base font-medium text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mist">
                  {item.issuer}
                  {item.platform ? ` · ${item.platform}` : ''}
                  {item.issued ? ` · ${item.issued}` : ''}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  )
}
