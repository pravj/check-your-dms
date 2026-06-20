import { forwardRef, useLayoutEffect, useRef, useState } from 'react'
import type { Meme } from '../types'
import { PhoneMockup } from './PhoneMockup'

const W = 390
const H = 760

/** Renders the mockup at its true 390x760 size (so exports stay pixel-perfect)
 *  but visually scales it down to fit narrow screens via a CSS transform. The
 *  transform lives on an ancestor of the export node, so html-to-image — which
 *  clones the node at its own intrinsic size — is unaffected. */
export const ScaledMockup = forwardRef<HTMLDivElement, { meme: Meme }>(
  function ScaledMockup({ meme }, ref) {
    const holderRef = useRef<HTMLDivElement>(null)
    const [scale, setScale] = useState(1)

    useLayoutEffect(() => {
      const holder = holderRef.current
      if (!holder) return
      const update = () => setScale(Math.min(1, holder.clientWidth / W))
      update()
      const ro = new ResizeObserver(update)
      ro.observe(holder)
      return () => ro.disconnect()
    }, [])

    return (
      <div ref={holderRef} className="flex w-full justify-center">
        <div
          className="overflow-hidden rounded-[28px] border border-neutral-200 shadow-xl"
          style={{ width: W * scale, height: H * scale }}
        >
          <div
            style={{
              width: W,
              height: H,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          >
            <PhoneMockup ref={ref} meme={meme} />
          </div>
        </div>
      </div>
    )
  },
)
