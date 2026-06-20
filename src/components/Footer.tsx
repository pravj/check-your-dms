import { CursorLogo } from './icons'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <div className="flex items-center gap-2 text-[var(--text)]">
            <CursorLogo className="h-5 w-5" />
            <span className="text-[15px] font-semibold tracking-[-0.01em]">
              Check your DMs
            </span>
            <span className="rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-medium text-[var(--muted)]">
              Cursor edition
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
            A parody fan project for the “Missed on Cursor DM” trend.
          </p>
        </div>

        <div className="text-[14px] text-[var(--muted)] sm:text-right">
          <p>
            Made by{' '}
            <a
              href="https://x.com/hackpravj"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--accent)] transition hover:opacity-80"
            >
              @hackpravj
            </a>
          </p>
          <span className="mt-2 inline-block rounded-full border border-[var(--border)] px-2 py-0.5 text-[11px] font-medium text-[var(--muted)]">
            using Cursor/CC Opus 4.8
          </span>
        </div>
      </div>
    </footer>
  )
}
