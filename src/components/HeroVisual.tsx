import { CharacterLoader } from './character/CharacterLoader'

const stack = [
  { name: 'AWS', mark: 'aws' },
  { name: 'Azure', mark: 'azure' },
  { name: 'Python', mark: 'python' },
  { name: 'Docker', mark: 'docker' },
  { name: 'GitHub', mark: 'github' },
] as const

function TechMark({ mark }: { mark: (typeof stack)[number]['mark'] }) {
  const common = 'size-4 shrink-0 text-neon'
  if (mark === 'aws') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path fill="currentColor" d="M4 15.5c2.2 1.6 4.8 2.5 8 2.5s5.8-.9 8-2.5l-1.1-1.4c-1.8 1.2-4.1 1.9-6.9 1.9s-5.1-.7-6.9-1.9L4 15.5z" />
        <path fill="currentColor" d="M12 4 5 8.2v2.2L12 6.4l7 4v-2.2L12 4z" />
      </svg>
    )
  }
  if (mark === 'azure') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path fill="currentColor" d="M11.2 4 4 19h5.2l1.6-3.4h4.3L11.2 4zm1.7 8.2-1.2 2.5h2.4l-1.2-2.5zM14.2 9.2 20 19h-4.2l-2.8-5.6 1.2-4.2z" />
      </svg>
    )
  }
  if (mark === 'python') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path fill="currentColor" d="M12.2 3c-2.6 0-4.2.8-4.2 2.4v2.2h4.4v.8H6.4C4.4 8.4 3 9.7 3 12.2S4.5 16 6.6 16h1.5v-2.1c0-1.5 1.3-2.8 2.9-2.8h4.3c1.3 0 2.3-1.1 2.3-2.4V5.4C17.6 3.8 15.4 3 12.2 3zm-1.6 1.6a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6zM11.8 21c2.6 0 4.2-.8 4.2-2.4v-2.2h-4.4v-.8h5.9c2 .1 3.5-1.2 3.5-3.7s-1.5-3.8-3.6-3.8h-1.5v2.1c0 1.5-1.3 2.8-2.9 2.8H9.7c-1.3 0-2.3 1.1-2.3 2.4v3.3c0 1.6 2.2 2.4 5.4 2.4zm1.6-1.6a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6z" />
      </svg>
    )
  }
  if (mark === 'docker') {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path fill="currentColor" d="M4 11h2.2V8.8H4V11zm3 0h2.2V8.8H7V11zm3 0h2.2V8.8H10V11zm3 0h2.2V8.8H13V11zM7 8h2.2V5.8H7V8zm3 0h2.2V5.8H10V8zm3 0h2.2V5.8H13V8zM10 5h2.2V2.8H10V5zm-6.2 7.2c-.4 1.4-.2 2.6.7 3.5 1 .9 2.6 1.3 4.6 1.3.2 1.2.8 1.8 2.2 1.8 1.2 0 2-.5 2.4-1.6.8.2 1.8.1 2.7-.4.7-.4 1.2-1 1.4-1.8h1.6c.8 0 1.4-.5 1.6-1.3.1-.6-.1-1.1-.6-1.5H3.8z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path fill="currentColor" d="M12 3C7.6 3 4 6.6 4 11.1c0 3.6 2.3 6.6 5.5 7.7.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.3-.9-.8-1.1-.8-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.2.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1.1.1-2.2 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.2.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.5.4 3.2-1.1 5.5-4.1 5.5-7.7C20 6.6 16.4 3 12 3z" />
    </svg>
  )
}

function ScoreRing() {
  const score = 872
  const total = 1000
  const radius = 26
  const circumference = 2 * Math.PI * radius
  const filled = circumference * (score / total)
  return (
    <div className="flex items-center gap-3" aria-label={`SAA-C03 score ${score} out of ${total}. This is a point score, not a percentage.`}>
      <svg viewBox="0 0 68 68" className="size-16 shrink-0" aria-hidden="true">
        <circle cx="34" cy="34" r={radius} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="4" />
        <circle
          cx="34"
          cy="34"
          r={radius}
          fill="none"
          stroke="#ff2d3c"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference - filled}`}
          transform="rotate(-90 34 34)"
        />
      </svg>
      <div>
        <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-neon">SAA-C03</p>
        <p className="font-serif text-2xl leading-none text-paper">
          {score}
          <span className="text-sm text-mist">/{total}</span>
        </p>
        <p className="mt-1 text-[0.65rem] text-mist">Score out of 1000</p>
      </div>
    </div>
  )
}

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-xl min-w-0 flex-col gap-5 xl:mx-0 xl:max-w-none xl:flex-row xl:items-center xl:justify-end xl:gap-6">
      <div className="relative mx-auto w-full max-w-[22rem] shrink-0 sm:max-w-md xl:mx-0 xl:w-80 xl:max-w-none min-[1440px]:w-[22rem]">
        <div className="portrait-halo" aria-hidden="true" />
        <div className="relative z-10">
          <CharacterLoader />
        </div>
      </div>
      <div className="grid w-full gap-4 sm:grid-cols-2 xl:flex xl:w-52 xl:shrink-0 xl:flex-col xl:gap-5">
        <aside className="glass-panel float-card rounded-2xl p-3 sm:col-start-2">
          <p className="px-2 pb-2 text-[0.62rem] font-semibold tracking-[0.2em] text-mist">TECHNOLOGY</p>
          <ul className="space-y-1">
            {stack.map((item) => (
              <li key={item.name}>
                <div className="tech-row flex items-center gap-2.5 rounded-xl border border-transparent px-2 py-1.5">
                  <TechMark mark={item.mark} />
                  <span className="text-xs font-semibold tracking-[0.16em] text-paper">{item.name.toUpperCase()}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <aside className="glass-panel float-card-late rounded-2xl p-4 sm:col-start-1 sm:row-start-1">
          <ScoreRing />
        </aside>
      </div>
    </div>
  )
}
