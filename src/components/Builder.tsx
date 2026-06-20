import type { Meme } from '../types'
import { PITCHES } from '../data/pitches'
import { REPLIES } from '../data/replies'

type Props = {
  meme: Meme
  set: (patch: Partial<Meme>) => void
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <div className="mb-2 text-[13px] font-semibold tracking-wide text-neutral-500 uppercase">
        {label}
      </div>
      {children}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full border px-3 py-[6px] text-[13px] font-medium transition',
        active
          ? 'border-black bg-black text-white'
          : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export function Builder({ meme, set }: Props) {
  return (
    <div>
      <Field label="The pitch (from Michael)">
        <div className="flex flex-wrap gap-2">
          {PITCHES.map((p) => (
            <Chip
              key={p.id}
              active={meme.pitchId === p.id}
              onClick={() => set({ pitchId: p.id })}
            >
              {p.label}
            </Chip>
          ))}
          <Chip
            active={meme.pitchId === 'custom'}
            onClick={() => set({ pitchId: 'custom' })}
          >
            ✏️ Custom
          </Chip>
        </div>
        {meme.pitchId === 'custom' && (
          <textarea
            value={meme.customPitch}
            onChange={(e) => set({ customPitch: e.target.value })}
            placeholder="Type the incoming DM…"
            rows={3}
            className="mt-2 w-full rounded-lg border border-neutral-300 p-2 text-[14px] outline-none focus:border-neutral-500"
          />
        )}
      </Field>

      <Field label="Your reply">
        <div className="flex flex-wrap gap-2">
          <Chip
            active={meme.replyId === null}
            onClick={() => set({ replyId: null })}
          >
            🫥 Leave on read
          </Chip>
          {REPLIES.map((r) => (
            <Chip
              key={r.id}
              active={meme.replyId === r.id}
              onClick={() => set({ replyId: r.id })}
            >
              {r.label}
            </Chip>
          ))}
          <Chip
            active={meme.replyId === 'custom'}
            onClick={() => set({ replyId: 'custom' })}
          >
            ✏️ Custom
          </Chip>
        </div>
        {meme.replyId === 'custom' && (
          <textarea
            value={meme.customReply}
            onChange={(e) => set({ customReply: e.target.value })}
            placeholder="Type your regretful reply…"
            rows={2}
            className="mt-2 w-full rounded-lg border border-neutral-300 p-2 text-[14px] outline-none focus:border-neutral-500"
          />
        )}
      </Field>

    </div>
  )
}
