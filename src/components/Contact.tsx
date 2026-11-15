import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent, ReactNode, SVGProps } from 'react'

function GithubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.48h4.56V24H.22V8.48zM8.34 8.48h4.37v2.12h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v8.78h-4.56v-7.79c0-1.86-.03-4.25-2.59-4.25-2.59 0-2.99 2.02-2.99 4.11V24H8.34V8.48z" />
    </svg>
  )
}
import { profile } from '../data/profile'
import { Container, ExternalLink, Reveal, SectionHeading } from './ui'

function ContactRow({
  href,
  external,
  icon,
  label,
  value,
}: {
  href: string
  external?: boolean
  icon: ReactNode
  label: string
  value: string
}) {
  const className =
    'flex items-center gap-4 rounded-2xl border border-white/10 bg-charcoal px-5 py-4 transition-colors hover:border-white/25'
  const body = (
    <>
      <span className="text-crimson" aria-hidden="true">
        {icon}
      </span>
      <span>
        <span className="block text-[0.72rem] uppercase tracking-[0.16em] text-mist">{label}</span>
        <span className="mt-1 block text-sm text-paper">{value}</span>
      </span>
    </>
  )

  if (external) {
    return (
      <ExternalLink href={href} className={className}>
        {body}
      </ExternalLink>
    )
  }

  return (
    <a href={href} className={className}>
      {body}
    </a>
  )
}

export function Contact() {
  const [notice, setNotice] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`
    setNotice('Your email app should open with this message. It is not sent until you send it from there.')
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
            <div>
            <SectionHeading
              id="contact-heading"
              index="06  Contact"
              title="Contact"
              lede="I am based in Bengaluru and open to early-career conversations about cloud support, AWS engineering, and cloud infrastructure."
            />
            <div className="mt-10">
              <address className="grid gap-3 not-italic">
                <ContactRow
                  href={`mailto:${profile.email}`}
                  icon={<Mail className="size-5" />}
                  label="Email"
                  value={profile.email}
                />
                <ContactRow
                  href={profile.phoneHref}
                  icon={<Phone className="size-5" />}
                  label="Phone"
                  value={profile.phoneDisplay}
                />
                <ContactRow
                  href={profile.linkedin}
                  external
                  icon={<LinkedinIcon className="size-5" />}
                  label="LinkedIn"
                  value="sri-charan-reddy"
                />
                <ContactRow
                  href={profile.github}
                  external
                  icon={<GithubIcon className="size-5" />}
                  label="GitHub"
                  value={profile.githubHandle}
                />
              </address>
              <p className="mt-4 flex items-center gap-3 px-1 text-sm text-mist">
                <MapPin aria-hidden="true" className="size-4 text-crimson" />
                {profile.location}
              </p>
              <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-mist">
                <ArrowUpRight aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-crimson" />
                Email and the profile links above are the direct ways to reach me.
              </p>
            </div>
            </div>
            <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-white/10 bg-charcoal p-6 md:p-8">
              <div>
                <h3 className="font-serif text-3xl text-paper">Write to me</h3>
                <p className="mt-3 text-sm leading-6 text-mist">
                  This form opens your email app with the message filled in. Nothing is stored on this website, and nothing is sent until you send that email.
                </p>
              </div>
              <label className="grid gap-2 text-sm text-paper">
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="min-h-11 rounded-xl border border-white/10 bg-ink px-3 text-paper outline-none focus-visible:border-crimson"
                />
              </label>
              <label className="grid gap-2 text-sm text-paper">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="min-h-11 rounded-xl border border-white/10 bg-ink px-3 text-paper outline-none focus-visible:border-crimson"
                />
              </label>
              <label className="grid gap-2 text-sm text-paper">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="rounded-xl border border-white/10 bg-ink px-3 py-3 text-paper outline-none focus-visible:border-crimson"
                />
              </label>
              <button type="submit" className="min-h-12 rounded-full bg-wine px-5 text-sm font-medium text-white transition-colors hover:bg-[#861628]">
                Compose email
              </button>
              {notice ? (
                <p role="status" className="text-sm leading-6 text-paper">
                  {notice}
                </p>
              ) : null}
            </form>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
