import { CursorLogo, SunIcon, MoonIcon } from './icons'
import type { Theme } from '../lib/useTheme'

export function Navbar({
  theme,
  onToggle,
}: {
  theme: Theme
  onToggle: () => void
}) {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--paper)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="/" className="flex items-center gap-2 text-[var(--text)]">
          <CursorLogo className="h-[22px] w-[22px]" />
          <span className="text-[17px] font-semibold tracking-[-0.01em]">
            Check your DMs
          </span>
          <span className="ml-1 hidden rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-medium text-[var(--muted)] sm:inline">
            cursor edition
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition hover:bg-[var(--panel)]"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="https://x.com/search?q=mntruell%20DM"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--pill)] px-4 py-2 text-[14px] font-semibold text-[var(--pill-text)] transition hover:opacity-90"
          >
            See the trend
          </a>
        </div>
      </nav>
    </header>
  )
}
