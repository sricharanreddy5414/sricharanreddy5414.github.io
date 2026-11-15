import { useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import { characterModelUrl } from '../character/config'
import { profile } from '../data/profile'

function clearMotion(target: HTMLDivElement) {
  target.style.setProperty('--tilt-x', '0deg')
  target.style.setProperty('--tilt-y', '0deg')
  target.style.setProperty('--shift-x', '0px')
  target.style.setProperty('--shift-y', '0px')
}

function setMotion(target: HTMLDivElement, event: ReactPointerEvent<HTMLDivElement>) {
  const rect = target.getBoundingClientRect()
  const px = (event.clientX - rect.left) / rect.width - 0.5
  const py = (event.clientY - rect.top) / rect.height - 0.5
  const touch = event.pointerType === 'touch'
  const tilt = touch ? 6 : 9
  const shift = touch ? 8 : 16
  target.style.setProperty('--tilt-x', `${(-py * tilt).toFixed(2)}deg`)
  target.style.setProperty('--tilt-y', `${(px * tilt).toFixed(2)}deg`)
  target.style.setProperty('--shift-x', `${(px * shift).toFixed(1)}px`)
  target.style.setProperty('--shift-y', `${(py * shift).toFixed(1)}px`)
}

export function PortraitFrame() {
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [failed, setFailed] = useState(false)
  const touching = useRef(false)

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (reduce || !stageRef.current) return
    if (event.pointerType === 'touch' && !touching.current) return
    setMotion(stageRef.current, event)
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'touch' || reduce || !stageRef.current) return
    touching.current = true
    setMotion(stageRef.current, event)
  }

  function reset() {
    touching.current = false
    if (stageRef.current) clearMotion(stageRef.current)
  }

  useEffect(() => {
    const stage = stageRef.current
    if (!stage || reduce) return
    const hero = document.getElementById('home')
    const onScroll = () => {
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)))
      const yaw = (0.35 - progress) * 8
      stage.style.setProperty('--scroll-yaw', `${yaw.toFixed(2)}deg`)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reduce])

  return (
    <div
      ref={stageRef}
      className="portrait-stage relative mx-auto w-full max-w-[22rem] sm:max-w-md"
      data-character-model={characterModelUrl}
      onPointerMove={onPointerMove}
      onPointerDown={onPointerDown}
      onPointerUp={reset}
      onPointerCancel={reset}
      onPointerLeave={reset}
    >
      <div className="portrait-glow" aria-hidden="true" />
      <div className="portrait-scroll">
      <div className="portrait-float">
        <div className="portrait-yaw">
          <div className="portrait-tilt">
            <div className="portrait-depth" aria-hidden="true" />
            <div className="portrait-plate">
              {failed ? (
                <div
                  className="portrait-photo grid place-items-center bg-charcoal"
                  role="img"
                  aria-label={`${profile.name}. Profile photo unavailable.`}
                >
                  <span className="font-serif text-6xl tracking-wide text-paper" aria-hidden="true">
                    {profile.initials}
                  </span>
                </div>
              ) : (
                <img
                  src={profile.avatarUrl}
                  alt={`GitHub profile photo of ${profile.name}`}
                  width={480}
                  height={480}
                  fetchPriority="high"
                  decoding="async"
                  className="portrait-photo"
                  onError={() => setFailed(true)}
                />
              )}
              <div className="portrait-glass" aria-hidden="true" />
              <div className="portrait-sheen" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="portrait-shadow" aria-hidden="true" />
    </div>
  )
}
