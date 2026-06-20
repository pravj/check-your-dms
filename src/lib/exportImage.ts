import { toPng } from 'html-to-image'

/** Render a DOM node to a high-res PNG data URL. pixelRatio 3 = crisp on retina
 *  and when reshared on X. cacheBust avoids stale image caching during a session. */
async function nodeToPng(node: HTMLElement): Promise<string> {
  return toPng(node, {
    pixelRatio: 3,
    cacheBust: true,
    // White backdrop so transparent rounded corners don't show as black.
    backgroundColor: '#ffffff',
  })
}

export async function downloadPng(
  node: HTMLElement,
  filename = 'missed-on-cursor.png',
): Promise<void> {
  const dataUrl = await nodeToPng(node)
  const a = document.createElement('a')
  a.href = dataUrl
  a.download = filename
  a.click()
}

/** Try to copy the rendered PNG to the clipboard. Returns true on success.
 *  Not supported everywhere (needs a secure context + ClipboardItem). */
export async function copyPngToClipboard(node: HTMLElement): Promise<boolean> {
  try {
    if (!navigator.clipboard || typeof ClipboardItem === 'undefined') return false
    const dataUrl = await nodeToPng(node)
    const blob = await (await fetch(dataUrl)).blob()
    await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })])
    return true
  } catch {
    return false
  }
}
