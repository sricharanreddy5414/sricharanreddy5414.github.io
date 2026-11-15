import { navLinks, profile } from '../data/profile'
import { Container, ExternalLink } from './ui'

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-2xl text-paper">{profile.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-mist">{profile.subtitle}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-sm text-mist hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. Early-career cloud portfolio.</p>
          <p className="flex gap-4">
            <ExternalLink href={profile.github} className="hover:text-paper">
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedin} className="hover:text-paper">
              LinkedIn
            </ExternalLink>
            <a href={`mailto:${profile.email}`} className="hover:text-paper">
              Email
            </a>
          </p>
        </div>
      </Container>
    </footer>
  )
}
