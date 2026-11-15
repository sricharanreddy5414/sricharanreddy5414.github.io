import { characterModelUrl } from './config'

type NavigatorWithHints = Navigator & {
  deviceMemory?: number
  connection?: { saveData?: boolean }
}

export function webGLAvailable() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function prefersLightweightRendering() {
  const nav = navigator as NavigatorWithHints
  if (nav.connection?.saveData) return true
  return typeof nav.deviceMemory === 'number' && nav.deviceMemory > 0 && nav.deviceMemory <= 2
}

export async function characterModelAvailable(url = characterModelUrl) {
  try {
    const response = await fetch(url, { method: 'HEAD' })
    if (!response.ok) return false
    const type = (response.headers.get('content-type') ?? '').toLowerCase()
    return !type.includes('text/html')
  } catch (error) {
    console.info('[character] The model check failed.', error)
    return false
  }
}
