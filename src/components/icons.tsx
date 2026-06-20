/** Inline SVGs so the export has no external requests and stays crisp at 3x. */

/** Cursor's hexagonal cube logo mark. */
export function CursorLogo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Cursor">
      <path
        fill="currentColor"
        d="M12 1.5 21.5 7v10L12 22.5 2.5 17V7L12 1.5zm0 2.31L4.5 8.16v7.68L12 20.19l7.5-4.35V8.16L12 3.81z"
      />
      <path
        fill="currentColor"
        opacity="0.55"
        d="M12 3.81 19.5 8.16 12 12.5 4.5 8.16 12 3.81z"
      />
      <path
        fill="currentColor"
        opacity="0.85"
        d="M12 12.5 19.5 8.16v7.68L12 20.19V12.5z"
      />
    </svg>
  )
}

export function SunIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

export function MonitorIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

export function MoonIcon({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export function ArrowRight({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function VerifiedBadge({ className = 'h-[18px] w-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 22 22" aria-label="Verified" className={className}>
      <path
        fill="#1d9bf0"
        d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.017 1.276-.214 1.817-.569.54-.354.972-.853 1.245-1.439.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
      />
    </svg>
  )
}

export function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path
        fill="currentColor"
        d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2z"
      />
    </svg>
  )
}

export function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[21px] w-[21px]"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function VideoIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[21px] w-[21px]"
    >
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2.5" ry="2.5" />
    </svg>
  )
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6">
      <path
        fill="currentColor"
        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
      />
    </svg>
  )
}

export function MicWave() {
  return (
    <svg viewBox="0 0 28 24" className="h-5 w-7">
      <g fill="currentColor">
        <rect x="1" y="10" width="2" height="4" rx="1" />
        <rect x="5" y="7" width="2" height="10" rx="1" />
        <rect x="9" y="3" width="2" height="18" rx="1" />
        <rect x="13" y="6" width="2" height="12" rx="1" />
        <rect x="17" y="9" width="2" height="6" rx="1" />
        <rect x="21" y="5" width="2" height="14" rx="1" />
        <rect x="25" y="10" width="2" height="4" rx="1" />
      </g>
    </svg>
  )
}

export function CheckMark() {
  return (
    <svg viewBox="0 0 24 24" className="ml-1 inline-block h-[14px] w-[14px]">
      <path
        fill="currentColor"
        d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
      />
    </svg>
  )
}

/** iOS-style status bar right cluster: signal, wifi, battery.
 *  Battery fill scales to `batteryPct` and only turns red when actually low. */
export function StatusIcons({ batteryPct }: { batteryPct: number }) {
  const low = batteryPct <= 20
  return (
    <div className="flex items-center gap-[5px] text-black">
      {/* signal */}
      <svg viewBox="0 0 18 12" className="h-[11px] w-[17px]">
        <g fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5" width="3" height="7" rx="1" />
          <rect x="10" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" opacity="0.35" />
        </g>
      </svg>
      {/* wifi */}
      <svg viewBox="0 0 16 12" className="h-[11px] w-[16px]">
        <path
          fill="currentColor"
          d="M8 2.2c2.4 0 4.6.9 6.3 2.4.3.3.3.7.02 1L13.4 6.5c-.27.28-.7.28-.98.03A6.6 6.6 0 0 0 8 4.9a6.6 6.6 0 0 0-4.42 1.66c-.28.25-.71.25-.98-.03L1.68 5.6a.69.69 0 0 1 .02-1A9.36 9.36 0 0 1 8 2.2zm0 3.5c1.3 0 2.5.48 3.4 1.3.3.27.3.72.02 1l-.92.95c-.26.27-.68.28-.96.03A3 3 0 0 0 8 8.2c-.6 0-1.15.18-1.54.78-.28.25-.7.24-.96-.03l-.92-.95a.69.69 0 0 1 .02-1A5.1 5.1 0 0 1 8 5.7zm0 3.4c.66 0 1.2.54 1.2 1.2S8.66 11.5 8 11.5 6.8 10.96 6.8 10.3 7.34 9.1 8 9.1z"
        />
      </svg>
      {/* battery — fill width tracks level, red only when low */}
      <div className="relative flex items-center">
        <div className="h-[11px] w-[22px] rounded-[3px] border border-black/40 p-[1.5px]">
          <div
            className="h-full rounded-[1px]"
            style={{
              width: `${Math.max(8, Math.min(100, batteryPct))}%`,
              background: low ? '#ef4444' : '#0f1419',
            }}
          />
        </div>
        <div className="ml-[0.5px] h-[4px] w-[1.5px] rounded-r-sm bg-black/40" />
      </div>
    </div>
  )
}
