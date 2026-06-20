/** Inline SVGs so the export has no external requests and stays crisp at 3x. */

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
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]">
      <path
        fill="currentColor"
        d="M19.13 21.974c-1.766 0-4.027-.65-6.6-2.135-2.95-1.704-5.27-3.32-7.45-6.46C2.96 10.265 2.026 7.7 2.026 5.85c0-1.39.84-2.62 2.13-3.13l1.49-.59c.61-.24 1.31-.01 1.66.55l1.74 2.83c.36.59.21 1.36-.35 1.77l-1.06.77c-.2.15-.27.42-.16.65.42.91 1.1 1.93 1.99 2.82.89.89 1.91 1.57 2.82 1.99.23.11.5.04.65-.16l.77-1.06c.41-.56 1.18-.71 1.77-.35l2.83 1.74c.56.35.79 1.05.55 1.66l-.59 1.49c-.51 1.29-1.74 2.13-3.13 2.13z"
      />
    </svg>
  )
}

export function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]">
      <path
        fill="currentColor"
        d="M5 4.5h9c1.1 0 2 .9 2 2v2.2l3.3-2.1c.66-.42 1.52.05 1.52.84v9.12c0 .79-.86 1.26-1.52.84L16 15.3v2.2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-11c0-1.1.9-2 2-2z"
      />
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

/** iOS-style status bar right cluster: signal, wifi, low battery. */
export function StatusIcons() {
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
      {/* battery (low / red) */}
      <div className="relative flex items-center">
        <div className="h-[11px] w-[22px] rounded-[3px] border border-black/40 p-[1.5px]">
          <div className="h-full w-[28%] rounded-[1px] bg-red-500" />
        </div>
        <div className="ml-[0.5px] h-[4px] w-[1.5px] rounded-r-sm bg-black/40" />
      </div>
    </div>
  )
}
