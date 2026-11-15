import { useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

export function Intro() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (reduce) return
    setVisible(true)
    const id = window.setTimeout(() => setVisible(false), 1000)
    return () => window.clearTimeout(id)
  }, [reduce])

  if (!visible) return null

  return (
    <div className="intro-screen" aria-hidden="true">
      <div className="text-center">
        <p className="text-xs font-semibold tracking-[0.32em] text-crimson">{profile.initials}</p>
        <p className="mt-3 font-sans text-2xl font-semibold tracking-tight text-paper">{profile.name}</p>
      </div>
    </div>
  )
}
