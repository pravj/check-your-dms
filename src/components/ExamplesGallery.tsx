import { EXAMPLES } from '../data/examples'
import type { ExamplePreset } from '../types'

type Props = {
  onPick: (preset: ExamplePreset) => void
  activeId: string | null
}

/** The real viral tweets, as one-tap starting points + social proof. */
export function ExamplesGallery({ onPick, activeId }: Props) {
  return (
    <div>
      <div className="mb-2 text-[13px] font-semibold tracking-wide text-neutral-500 uppercase">
        Start from a real one
      </div>
      <div className="flex flex-wrap gap-2">
        {EXAMPLES.map((ex) => (
          <button
            key={ex.id}
            onClick={() => onPick(ex)}
            className={[
              'rounded-xl border px-3 py-2 text-left text-[13px] transition',
              activeId === ex.id
                ? 'border-black bg-neutral-50'
                : 'border-neutral-200 bg-white hover:border-neutral-400',
            ].join(' ')}
          >
            <div className="font-semibold text-neutral-800">{ex.credit}</div>
            <div className="max-w-[160px] truncate text-neutral-500">
              {ex.caption}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
