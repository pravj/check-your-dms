import type { ReactNode } from 'react'

/** cursor.com-style product surface: a warm panel with a macOS window header
 *  (traffic lights + centered title). Wraps the phone preview. */
export function MacWindow({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--panel)]">
      <div className="relative flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="absolute inset-x-0 text-center text-[13px] font-medium text-[var(--muted)]">
          {title}
        </span>
      </div>
      <div className="bg-[var(--panel-2)] p-6 sm:p-8">{children}</div>
    </div>
  )
}
