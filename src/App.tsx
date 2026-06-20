import { useRef, useState } from 'react'
import type { Meme } from './types'
import { PhoneMockup } from './components/PhoneMockup'
import { Builder } from './components/Builder'
import { ExportBar } from './components/ExportBar'

/** Tweet text the Share-to-X composer opens with (not rendered in the image). */
const SHARE_CAPTION = "i found the reason I don't have $500M today"

const DEFAULT_MEME: Meme = {
  pitchId: 'series-b',
  customPitch: '',
  replyId: 'marketplaces',
  customReply: '',
  pitchDate: 'May 15, 2023',
  replyDate: 'May 16, 2023',
  statusTime: '23:20',
}

export default function App() {
  const [meme, setMeme] = useState<Meme>(DEFAULT_MEME)
  const mockupRef = useRef<HTMLDivElement>(null)

  const set = (patch: Partial<Meme>) => setMeme((m) => ({ ...m, ...patch }))

  return (
    <div className="min-h-screen bg-[#f6f7f9] text-neutral-900">
      <div className="mx-auto max-w-6xl px-5 py-8">
        <header className="mb-6 text-center">
          <h1 className="text-[28px] font-extrabold tracking-tight sm:text-[34px]">
            Did you miss Cursor?
          </h1>
          <p className="mt-1 text-[15px] text-neutral-500">
            Make your own “wasted Cursor DM” screenshot. Pick a pitch, pick your
            regret, post the cope.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_390px]">
          {/* Controls */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
              <Builder meme={meme} set={set} />
              <div className="border-t border-neutral-100 pt-5">
                <ExportBar target={mockupRef} caption={SHARE_CAPTION} />
              </div>
            </div>
          </div>

          {/* Live preview */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-8">
              <div className="flex justify-center">
                <div className="overflow-hidden rounded-[28px] border border-neutral-200 shadow-xl">
                  <PhoneMockup ref={mockupRef} meme={meme} />
                </div>
              </div>
              <p className="mt-3 text-center text-[12px] text-neutral-400">
                Live preview · exports exactly what you see
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-[12px] text-neutral-400">
          Parody. Not affiliated with Cursor or Michael Truell. Make something
          funny.
        </footer>
      </div>
    </div>
  )
}
