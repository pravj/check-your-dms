import { CursorLogo } from './icons'
import { ThemeToggle } from './ThemeToggle'
import type { ThemePref } from '../lib/useTheme'

export function Navbar({
  pref,
  onThemeChange,
}: {
  pref: ThemePref
  onThemeChange: (p: ThemePref) => void
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--paper)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5">
        <a href="/" className="flex min-w-0 items-center gap-2 text-[var(--text)]">
          <CursorLogo className="h-[22px] w-[22px] shrink-0" />
          <span className="text-[17px] font-semibold tracking-[-0.01em] whitespace-nowrap">
            Check your DMs
          </span>
          <span className="ml-1 hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-medium text-[var(--muted)] sm:inline">
            Cursor edition
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle pref={pref} onChange={onThemeChange} />
          <a
            href="https://x.com/search?q=mntruell%20DM"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--pill)] px-4 py-2 text-[14px] font-semibold whitespace-nowrap text-[var(--pill-text)] transition hover:opacity-90"
          >
            <span className="sm:hidden">Trend</span>
            <span className="hidden sm:inline">See the trend</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
