import { useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'
import { AnimationMixer, type Bone } from 'three'
import type { GLTF } from 'three/addons/loaders/GLTFLoader.js'
import { findCinematicClip, findIdleClip, findTurnBones, type TurnBones } from '../../character/bones'
import { sampleCinematicTurn } from '../../character/turn'

type Rest = { x: number; y: number; z: number }

function remember(bone: Bone | undefined, map: Map<Bone, Rest>) {
  if (!bone || map.has(bone)) return
  map.set(bone, { x: bone.rotation.x, y: bone.rotation.y, z: bone.rotation.z })
}

function setYaw(bone: Bone | undefined, map: Map<Bone, Rest>, yaw: number) {
  if (!bone) return
  const rest = map.get(bone)
  if (!rest) return
  bone.rotation.y = rest.y + yaw
}

export function CharacterAnimator({ gltf }: { gltf: GLTF }) {
  const elapsed = useRef(0)
  const mixer = useRef<AnimationMixer | null>(null)
  const procedural = useRef(true)
  const bones = useRef<TurnBones>({})
  const rest = useRef(new Map<Bone, Rest>())

  useEffect(() => {
    const found = findTurnBones(gltf.scene)
    bones.current = found
    rest.current = new Map()
    remember(found.head, rest.current)
    remember(found.neck, rest.current)
    remember(found.spine, rest.current)
    remember(found.leftEye, rest.current)
    remember(found.rightEye, rest.current)

    const cinematic = findCinematicClip(gltf.animations)
    const idle = cinematic ? null : findIdleClip(gltf.animations)
    const clip = cinematic ?? idle
    procedural.current = !cinematic
    mixer.current?.stopAllAction()
    mixer.current = null
    if (clip) {
      const next = new AnimationMixer(gltf.scene)
      next.clipAction(clip).play()
      mixer.current = next
    }

    return () => {
      mixer.current?.stopAllAction()
      mixer.current = null
    }
  }, [gltf])

  useFrame((_, delta) => {
    elapsed.current += delta
    mixer.current?.update(delta)
    if (!procedural.current) return
    const pose = sampleCinematicTurn(elapsed.current)
    const current = bones.current
    setYaw(current.head, rest.current, pose.headYaw)
    setYaw(current.neck, rest.current, pose.neckYaw)
    setYaw(current.spine, rest.current, pose.spineYaw)
    setYaw(current.leftEye, rest.current, pose.eyeYaw)
    setYaw(current.rightEye, rest.current, pose.eyeYaw)
    const spine = current.spine
    const spineRest = spine ? rest.current.get(spine) : undefined
    if (spine && spineRest && !mixer.current) spine.rotation.x = spineRest.x + pose.breath
  })

  return null
}
