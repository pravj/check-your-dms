import { useRef, useState } from 'react'
import type { Meme } from './types'
import { ScaledMockup } from './components/ScaledMockup'
import { Builder } from './components/Builder'
import { ExportBar } from './components/ExportBar'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { MacWindow } from './components/MacWindow'
import { useTheme } from './lib/useTheme'

/** Tweet text the Share-to-X composer opens with (not rendered in the image). */
const SHARE_CAPTION = "i found the reason I don't have $500M today"

/** The viewer's current local time, "H:MM" 24h — so each user's screenshot
 *  looks like their own phone. */
function currentStatusTime(): string {
  const now = new Date()
  return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`
}

/** A plausible battery level — mostly healthy, occasionally low (red). */
function randomBattery(): number {
  return Math.floor(Math.random() * 86) + 14 // 14–99
}

const DEFAULT_MEME: Meme = {
  pitchId: 'series-b',
  customPitch: '',
  replyId: 'marketplaces',
  customReply: '',
  pitchDate: 'May 15, 2023',
  replyDate: 'May 16, 2023',
  statusTime: '23:20',
  batteryPct: 62,
}

export default function App() {
  const [meme, setMeme] = useState<Meme>(() => ({
    ...DEFAULT_MEME,
    statusTime: currentStatusTime(),
    batteryPct: randomBattery(),
  }))
  const mockupRef = useRef<HTMLDivElement>(null)
  const { theme, toggle } = useTheme()

  const set = (patch: Partial<Meme>) => setMeme((m) => ({ ...m, ...patch }))

  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--text)]">
      <Navbar theme={theme} onToggle={toggle} />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5">
        {/* Hero */}
        <section className="pt-12 pb-10 sm:pt-16">
          <div className="text-[13px] font-medium tracking-wide text-[var(--muted)]">
            DM cope generator
          </div>
          <h1 className="mt-3 max-w-3xl text-[34px] leading-[1.08] font-medium tracking-[-0.02em] sm:text-[52px]">
            Did you miss on Cursor?
            <br />
            <span className="text-[var(--muted)]">
              Manufacture the regret in seconds.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-[var(--muted)]">
            Build your own “wasted Cursor DM” screenshot — pick the pitch from
            Michael, pick your reply (or leave him on read), and post the cope.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-8 pb-4 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* Controls */}
          <div className="order-2 min-w-0 lg:order-1">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-5 sm:p-6">
              <Builder meme={meme} set={set} />
              <div className="mt-5 border-t border-[var(--border)] pt-5">
                <ExportBar target={mockupRef} caption={SHARE_CAPTION} />
              </div>
            </div>
          </div>

          {/* Live preview */}
          <div className="order-1 min-w-0 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <MacWindow title="Messages">
                <ScaledMockup ref={mockupRef} meme={meme} />
              </MacWindow>
              <p className="mt-3 text-center text-[12px] text-[var(--muted)]">
                Live preview · exports exactly what you see
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
