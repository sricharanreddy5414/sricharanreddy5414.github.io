import { sampleCinematicTurn, TURN_LOOP_SECONDS } from '../src/character/turn.ts'

const start = sampleCinematicTurn(0)
const profile = sampleCinematicTurn(8)
const end = sampleCinematicTurn(TURN_LOOP_SECONDS)
let previous = start.yaw
let maxStep = 0

for (let time = 0.05; time <= TURN_LOOP_SECONDS; time += 0.05) {
  const pose = sampleCinematicTurn(time)
  maxStep = Math.max(maxStep, Math.abs(pose.yaw - previous))
  if (!Number.isFinite(pose.yaw)) throw new Error('Turn pose is not finite.')
  previous = pose.yaw
}

if (Math.abs(start.yaw) > 0.001 || Math.abs(end.yaw) > 0.001) {
  throw new Error('The turn does not begin and end facing forward.')
}
if (profile.yaw > -1.2) throw new Error('The profile pose is not far enough from the front.')
if (Math.abs(profile.headYaw + profile.neckYaw + profile.spineYaw - profile.yaw) > 0.001) {
  throw new Error('Head, neck, and spine rotations do not add up to the pose.')
}
if (maxStep > 0.05) throw new Error(`The turn jumps by ${maxStep.toFixed(3)} radians.`)

console.log('Cinematic turn curve passed.')
