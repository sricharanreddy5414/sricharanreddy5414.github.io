import { useThree } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import { Box3, PerspectiveCamera, Vector3 } from 'three'
import { GLTFLoader, type GLTF } from 'three/addons/loaders/GLTFLoader.js'
import { findCinematicClip, findTurnBones } from '../../character/bones'
import { CharacterAnimator } from './CharacterAnimator'

function asError(error: unknown) {
  if (error instanceof Error) return error
  return new Error('The character model failed to load.')
}

export function CharacterModel({
  url,
  mobile,
  onReady,
  onError,
}: {
  url: string
  mobile: boolean
  onReady: () => void
  onError: (error: Error) => void
}) {
  const camera = useThree((state) => state.camera)
  const [gltf, setGltf] = useState<GLTF | null>(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    let active = true
    loader.load(
      url,
      (next) => {
        if (!active) return
        const bones = findTurnBones(next.scene)
        const clip = findCinematicClip(next.animations)
        if (!bones.head && !bones.neck && !clip) {
          onError(new Error('The GLB has no head or neck bone and no cinematic animation clip.'))
          return
        }
        next.scene.traverse((node) => {
          const mesh = node as { isMesh?: boolean; castShadow?: boolean; frustumCulled?: boolean }
          if (!mesh.isMesh) return
          mesh.castShadow = !mobile
          mesh.frustumCulled = true
        })
        const box = new Box3().setFromObject(next.scene)
        const size = box.getSize(new Vector3())
        const center = box.getCenter(new Vector3())
        const focusY = box.max.y - size.y * 0.16
        if (camera instanceof PerspectiveCamera) {
          camera.fov = mobile ? 32 : 28
          camera.position.set(center.x, focusY, center.z + Math.max(size.y * 0.78, size.x * 1.15))
          camera.near = 0.05
          camera.far = 50
          camera.lookAt(center.x, focusY - size.y * 0.05, center.z)
          camera.updateProjectionMatrix()
        }
        setGltf(next)
        onReady()
      },
      undefined,
      (error) => {
        if (active) onError(asError(error))
      },
    )
    return () => {
      active = false
    }
  }, [camera, mobile, onError, onReady, url])

  if (!gltf) return null
  return (
    <>
      <primitive object={gltf.scene} />
      <CharacterAnimator gltf={gltf} />
    </>
  )
}
