import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const CHUNK_RELOAD_GUARD_KEY = 'chunk-reload-guard-ts'
const CHUNK_RELOAD_WINDOW_MS = 60_000

function forceSingleRecoveryReload() {
  const now = Date.now()
  const lastReload = Number(sessionStorage.getItem(CHUNK_RELOAD_GUARD_KEY) || 0)

  // Avoid infinite refresh loops: only allow one forced refresh per minute.
  if (now - lastReload < CHUNK_RELOAD_WINDOW_MS) return

  sessionStorage.setItem(CHUNK_RELOAD_GUARD_KEY, String(now))
  window.location.reload()
}

function isChunkLoadFailure(message) {
  if (!message) return false

  return (
    message.includes('Failed to fetch dynamically imported module') ||
    message.includes('Importing a module script failed') ||
    message.includes('ChunkLoadError') ||
    message.includes('Loading chunk')
  )
}

window.addEventListener('error', (event) => {
  const message = event?.message || event?.error?.message || ''
  if (isChunkLoadFailure(String(message))) {
    forceSingleRecoveryReload()
  }
})

window.addEventListener('unhandledrejection', (event) => {
  const reason = event?.reason
  const message = typeof reason === 'string' ? reason : reason?.message || ''
  if (isChunkLoadFailure(String(message))) {
    forceSingleRecoveryReload()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
