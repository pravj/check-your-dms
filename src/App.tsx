import { useMemo, useRef, useState } from 'react'
import type { Meme, ExamplePreset } from './types'
import { EXAMPLES } from './data/examples'
import { PhoneMockup } from './components/PhoneMockup'
import { Builder } from './components/Builder'
import { ExportBar } from './components/ExportBar'
import { ExamplesGallery } from './components/ExamplesGallery'

function memeFromPreset(p: ExamplePreset): Meme {
  return {
    pitchId: p.pitchId,
    customPitch: '',
    replyId: p.replyId,
    customReply: '',
    caption: p.caption,
    customCaption: '',
    pitchDate: p.pitchDate,
    replyDate: p.replyDate,
    statusTime: '23:20',
  }
}

export default function App() {
  const [meme, setMeme] = useState<Meme>(() => memeFromPreset(EXAMPLES[0]))
  const [activeExample, setActiveExample] = useState<string | null>(EXAMPLES[0].id)
  const mockupRef = useRef<HTMLDivElement>(null)

  const set = (patch: Partial<Meme>) => {
    setMeme((m) => ({ ...m, ...patch }))
    setActiveExample(null) // any manual edit detaches from the preset
  }

  const pickExample = (p: ExamplePreset) => {
    setMeme(memeFromPreset(p))
    setActiveExample(p.id)
  }

  const caption = useMemo(
    () => (meme.customCaption.trim() ? meme.customCaption : meme.caption),
    [meme.customCaption, meme.caption],
  )

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
              <div className="mb-5">
                <ExamplesGallery onPick={pickExample} activeId={activeExample} />
              </div>
              <div className="mb-5 border-t border-neutral-100 pt-5">
                <Builder meme={meme} set={set} />
              </div>
              <div className="border-t border-neutral-100 pt-5">
                <ExportBar target={mockupRef} caption={caption} />
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
