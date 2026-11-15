import { useReducedMotion } from 'framer-motion'
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { characterModelUrl } from '../../character/config'
import { characterModelAvailable, prefersLightweightRendering, webGLAvailable } from '../../character/runtime'
import { CharacterFallback } from './CharacterFallback'

const CharacterScene = lazy(() => import('./CharacterScene'))

type Phase = 'photo' | 'loading' | 'ready'

export function CharacterLoader() {
  const reduce = useReducedMotion()
  const stageRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('photo')
  const [visible, setVisible] = useState(true)
  const [mountScene, setMountScene] = useState(false)

  useEffect(() => {
    if (reduce || prefersLightweightRendering() || !webGLAvailable()) return
    let active = true
    characterModelAvailable().then((available) => {
      if (!active || !available) {
        if (active) console.info(`[character] No rigged model at ${characterModelUrl}. The profile photograph stays in the hero.`)
        return
      }
      setMountScene(true)
      setPhase('loading')
    })
    return () => {
      active = false
    }
  }, [reduce])

  useEffect(() => {
    const node = stageRef.current
    if (!node || !mountScene) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.05 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [mountScene])

  const onReady = useCallback(() => setPhase('ready'), [])
  const onError = useCallback((error: Error) => {
    console.warn('[character] Falling back to the profile photograph.', error)
    setMountScene(false)
    setPhase('photo')
  }, [])

  return (
    <div ref={stageRef} className="relative" data-character-model={characterModelUrl} data-character-state={phase}>
      <div className={phase === 'ready' ? 'invisible' : undefined} aria-hidden={phase === 'ready'}>
        <CharacterFallback />
      </div>
      {phase === 'loading' ? (
        <div className="character-loading" role="status">
          <span />
          <span className="sr-only">Loading the character model</span>
        </div>
      ) : null}
      {mountScene ? (
        <div className={`absolute inset-0 ${phase === 'ready' ? 'opacity-100' : 'opacity-0'}`}>
          <Suspense fallback={null}>
            <CharacterScene active={visible && phase !== 'photo'} onReady={onReady} onError={onError} />
          </Suspense>
        </div>
      ) : null}
    </div>
  )
}
