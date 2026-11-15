import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/profile'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActive(visible.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled || open ? 'border-white/10 bg-ink/95 backdrop-blur-xl' : 'border-transparent bg-ink/70 backdrop-blur-md'
      }`}
    >
      <div className="h-0.5 bg-wine" />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="inline-flex items-center text-paper" aria-label={`${profile.name}, home`}>
          <span className="mr-2.5 inline-block size-2 bg-wine" aria-hidden="true" />
          <span className="font-serif text-xl tracking-[0.18em]">{profile.initials}</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  data-active={active === link.id ? 'true' : 'false'}
                  className={`link-underline text-sm ${active === link.id ? 'text-paper' : 'text-mist hover:text-paper'}`}
                  onClick={() => setActive(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
    </header>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[4.125rem] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-ink lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-4 md:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center text-base text-paper"
                  onClick={() => {
                    setActive(link.id)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </>
  )
}
