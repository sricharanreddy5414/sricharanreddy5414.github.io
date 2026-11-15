import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { characterModelUrl } from '../../character/config'
import { CharacterLighting } from './CharacterLighting'
import { CharacterModel } from './CharacterModel'

export default function CharacterScene({
  active,
  onReady,
  onError,
}: {
  active: boolean
  onReady: () => void
  onError: (error: Error) => void
}) {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <Canvas
      aria-label="3D character scene"
      dpr={mobile ? [1, 1.25] : [1, 1.5]}
      frameloop={active ? 'always' : 'never'}
      gl={{
        alpha: true,
        antialias: !mobile,
        powerPreference: mobile ? 'low-power' : 'high-performance',
      }}
      camera={{ position: [0, 1.5, 2.2], fov: 28, near: 0.05, far: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <CharacterLighting mobile={mobile} />
      <CharacterModel url={characterModelUrl} mobile={mobile} onReady={onReady} onError={onError} />
    </Canvas>
  )
}
