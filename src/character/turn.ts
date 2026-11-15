export const TURN_LOOP_SECONDS = 14

const keys = [
  { t: 0, yaw: 0 },
  { t: 2, yaw: 0 },
  { t: 5, yaw: -0.72 },
  { t: 8, yaw: -1.35 },
  { t: 9.6, yaw: -1.35 },
  { t: 13.2, yaw: 0 },
  { t: TURN_LOOP_SECONDS, yaw: 0 },
] as const

function smoothstep(value: number) {
  const t = Math.min(1, Math.max(0, value))
  return t * t * (3 - 2 * t)
}

export type TurnPose = {
  yaw: number
  headYaw: number
  neckYaw: number
  spineYaw: number
  eyeYaw: number
  breath: number
}

export function sampleCinematicTurn(time: number): TurnPose {
  const loop = ((time % TURN_LOOP_SECONDS) + TURN_LOOP_SECONDS) % TURN_LOOP_SECONDS
  let index = 0
  while (index < keys.length - 2 && loop > keys[index + 1].t) index += 1
  const from = keys[index]
  const to = keys[index + 1]
  const span = to.t - from.t
  const yaw = from.yaw + (to.yaw - from.yaw) * smoothstep(span === 0 ? 0 : (loop - from.t) / span)
  return {
    yaw,
    headYaw: yaw * 0.62,
    neckYaw: yaw * 0.28,
    spineYaw: yaw * 0.1,
    eyeYaw: Math.sin(loop * 0.85) * 0.05,
    breath: Math.sin((loop / TURN_LOOP_SECONDS) * Math.PI * 2) * 0.015,
  }
}
