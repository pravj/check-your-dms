import { useState } from 'react'
import { downloadPng, copyPngToClipboard } from '../lib/exportImage'
import { openXComposer } from '../lib/shareToX'

type Props = {
  /** The mockup DOM node to rasterize. */
  target: React.RefObject<HTMLDivElement | null>
  /** Resolved caption text for the tweet. */
  caption: string
}

export function ExportBar({ target, caption }: Props) {
  const [busy, setBusy] = useState<null | 'download' | 'copy' | 'share'>(null)
  const [hint, setHint] = useState('')

  async function onDownload() {
    if (!target.current) return
    setBusy('download')
    try {
      await downloadPng(target.current)
      setHint('Saved as missed-cursor.png')
    } finally {
      setBusy(null)
    }
  }

  async function onCopy() {
    if (!target.current) return
    setBusy('copy')
    const ok = await copyPngToClipboard(target.current)
    setHint(ok ? 'Image copied to clipboard' : 'Copy not supported — use Download')
    setBusy(null)
  }

  async function onShare() {
    if (!target.current) return
    setBusy('share')
    const ok = await copyPngToClipboard(target.current)
    openXComposer(caption)
    setHint(
      ok
        ? 'Caption opened on X — paste the image (⌘/Ctrl+V)'
        : 'Caption opened on X — Download the image and attach it',
    )
    setBusy(null)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={onShare}
          disabled={busy !== null}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--pill)] px-5 py-3 text-[15px] font-semibold text-[var(--pill-text)] transition hover:opacity-90 disabled:opacity-60"
        >
          {busy === 'share' ? 'Opening…' : '𝕏  Share to X'}
        </button>
        <button
          onClick={onDownload}
          disabled={busy !== null}
          className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-5 py-3 text-[15px] font-semibold text-[var(--text)] transition hover:border-[var(--muted)] disabled:opacity-60"
        >
          {busy === 'download' ? 'Rendering…' : 'Download PNG'}
        </button>
        <button
          onClick={onCopy}
          disabled={busy !== null}
          className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-5 py-3 text-[15px] font-semibold text-[var(--text)] transition hover:border-[var(--muted)] disabled:opacity-60"
        >
          {busy === 'copy' ? 'Rendering…' : 'Copy image'}
        </button>
      </div>
      <div className="mt-2 h-5 text-[13px] text-[var(--muted)]">{hint}</div>
    </div>
  )
}
