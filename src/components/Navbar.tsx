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
    const media = window.matchMedia('(min-width: 1280px)')
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? 'border-white/10 bg-ink/95 backdrop-blur-xl' : 'border-transparent bg-ink/70 backdrop-blur-md'
      }`}
    >
      <div className="h-0.5 bg-wine" />
      <div className="mx-auto flex h-16 w-full max-w-[90rem] items-center justify-between gap-4 px-5 md:px-8">
        <a href="#home" className="inline-flex shrink-0 items-center text-paper" aria-label={`${profile.name}, home`}>
          <span className="mr-2.5 inline-block size-2 bg-neon shadow-[0_0_10px_#ff2d3c]" aria-hidden="true" />
          <span className="font-serif text-xl tracking-[0.18em]">{profile.initials}</span>
          <span className="mx-2 text-white/25" aria-hidden="true">|</span>
          <span className="text-[0.68rem] font-semibold tracking-[0.2em] text-mist">PORTFOLIO</span>
        </a>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  data-active={active === link.id ? 'true' : 'false'}
                  aria-current={active === link.id ? 'true' : undefined}
                  className={`link-underline inline-flex items-center gap-1.5 text-[0.68rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${active === link.id ? 'text-paper' : 'text-mist hover:text-paper'}`}
                  onClick={() => setActive(link.id)}
                >
                  {active === link.id ? <span className="size-1 rounded-full bg-neon" aria-hidden="true" /> : null}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.14em] text-paper uppercase xl:inline-flex"
          >
            <span className="size-1.5 rounded-full bg-neon shadow-[0_0_8px_#ff2d3c]" aria-hidden="true" />
            Available for opportunities
          </a>
          <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-paper xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
        </div>
      </div>
    </header>
      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-x-0 top-[4.125rem] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-ink xl:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[90rem] flex-col px-5 py-4 md:px-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center text-sm font-medium uppercase tracking-[0.16em] text-paper"
                  aria-current={active === link.id ? 'true' : undefined}
                  onClick={() => {
                    setActive(link.id)
                    setOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a href="#contact" className="inline-flex min-h-12 items-center gap-2 text-xs font-semibold tracking-[0.16em] text-neon uppercase" onClick={() => setOpen(false)}>
                <span className="size-1.5 rounded-full bg-neon" aria-hidden="true" />
                Available for opportunities
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  )
}
