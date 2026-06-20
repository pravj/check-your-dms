/** Open the X composer pre-filled with the caption. X's web intent cannot attach
 *  an image, so the calling UI copies the PNG to the clipboard first and tells the
 *  user to paste it. */
export function openXComposer(caption: string): void {
  const url = new URL('https://x.com/intent/tweet')
  url.searchParams.set('text', caption)
  url.searchParams.set('hashtags', 'Cursor')
  window.open(url.toString(), '_blank', 'noopener,noreferrer')
}
