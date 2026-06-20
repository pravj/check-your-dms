import { MonitorIcon, SunIcon, MoonIcon } from './icons'
import type { ThemePref } from '../lib/useTheme'

const OPTIONS: { value: ThemePref; label: string; Icon: typeof SunIcon }[] = [
  { value: 'system', label: 'System theme', Icon: MonitorIcon },
  { value: 'light', label: 'Light theme', Icon: SunIcon },
  { value: 'dark', label: 'Dark theme', Icon: MoonIcon },
]

/** Cursor-style three-way segmented theme control. The active segment gets a
 *  raised "pill" inside the track; the rest are muted icon buttons. */
export function ThemeToggle({
  pref,
  onChange,
}: {
  pref: ThemePref
  onChange: (p: ThemePref) => void
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-[var(--border)] bg-[var(--panel)] p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = pref === value
        return (
          <button
            key={value}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => onChange(value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
              active
                ? 'bg-[var(--paper)] text-[var(--text)] shadow-sm'
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            <Icon className="h-[15px] w-[15px]" />
          </button>
        )
      })}
    </div>
  )
}
