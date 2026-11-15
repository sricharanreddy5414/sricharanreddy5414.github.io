import type { AnimationClip, Bone, Object3D } from 'three'
import { characterClipPattern, idleClipPattern } from './config'

function compact(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '')
}

export type TurnBones = {
  head?: Bone
  neck?: Bone
  spine?: Bone
  leftEye?: Bone
  rightEye?: Bone
}

export function findTurnBones(root: Object3D): TurnBones {
  const bones: TurnBones = {}
  root.traverse((node) => {
    const bone = node as Bone
    if (!bone.isBone) return
    const name = compact(bone.name).replace(/^mixamorig/, '')
    if (name === 'head') bones.head = bone
    else if (name === 'neck') bones.neck = bone
    else if (name === 'spine2') bones.spine = bone
    else if (name === 'spine1' && compact(bones.spine?.name ?? '').replace(/^mixamorig/, '') !== 'spine2') bones.spine = bone
    else if (name === 'spine' && !bones.spine) bones.spine = bone
    else if (name === 'lefteye') bones.leftEye = bone
    else if (name === 'righteye') bones.rightEye = bone
  })
  return bones
}

export function findCinematicClip(clips: AnimationClip[]) {
  return clips.find((clip) => characterClipPattern.test(compact(clip.name))) ?? null
}

export function findIdleClip(clips: AnimationClip[]) {
  return clips.find((clip) => idleClipPattern.test(compact(clip.name))) ?? null
}
