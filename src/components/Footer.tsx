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
              cursor edition
            </span>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted)]">
            A parody fan project for the “wasted Cursor DM” trend. Not affiliated
            with Cursor or Michael Truell. Make something funny.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-[14px]">
          <FooterLink href="https://cursor.com">Cursor (real)</FooterLink>
          <FooterLink href="https://x.com/mntruell">@mntruell</FooterLink>
          <FooterLink href="https://x.com/search?q=mntruell%20DM">
            The trend
          </FooterLink>
          <FooterLink href="https://github.com">Source</FooterLink>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-10">
        <p className="text-[12px] text-[var(--muted)]">© 2026 · for the bit</p>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[var(--muted)] transition hover:text-[var(--text)]"
    >
      {children}
    </a>
  )
}
