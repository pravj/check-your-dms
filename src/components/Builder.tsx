import type { Meme } from '../types'
import { PITCHES } from '../data/pitches'
import { REPLIES } from '../data/replies'

type Props = {
  meme: Meme
  set: (patch: Partial<Meme>) => void
}

type Option = {
  id: string | null
  title: string
  snippet: string
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="mb-2 text-[12px] font-medium tracking-[0.06em] text-[var(--muted)] uppercase">
        {label}
      </div>
      {children}
    </div>
  )
}

function OptionRow({
  selected,
  title,
  snippet,
  onClick,
}: Option & { selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        'flex w-full items-center gap-3 border-l-2 px-3.5 py-2.5 text-left transition',
        selected
          ? 'border-[var(--accent)] bg-[var(--panel-2)]'
          : 'border-transparent hover:bg-[var(--panel-2)]',
      ].join(' ')}
    >
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-medium text-[var(--text)]">{title}</div>
        <div className="mt-0.5 truncate font-mono text-[12px] text-[var(--muted)]">
          {snippet}
        </div>
      </div>
      <span
        className={[
          'h-1.5 w-1.5 shrink-0 rounded-full transition',
          selected ? 'bg-[var(--accent)]' : 'bg-transparent',
        ].join(' ')}
      />
    </button>
  )
}

function OptionList({
  options,
  value,
  onSelect,
}: {
  options: Option[]
  value: string | null
  onSelect: (id: string | null) => void
}) {
  return (
    <div className="divide-y divide-[var(--border)] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--paper)]">
      {options.map((o) => (
        <OptionRow
          key={String(o.id)}
          {...o}
          selected={value === o.id}
          onClick={() => onSelect(o.id)}
        />
      ))}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-[14px] text-[var(--text)] outline-none transition focus:border-[var(--accent)]'

export function Builder({ meme, set }: Props) {
  const pitchOptions: Option[] = [
    ...PITCHES.map((p) => ({
      id: p.id,
      title: p.label,
      snippet: p.summary,
    })),
    {
      id: 'custom',
      title: 'Custom',
      snippet: 'Write your own incoming DM',
    },
  ]

  const replyOptions: Option[] = [
    { id: null, title: 'Leave on read', snippet: 'You left him on read' },
    { id: 'blocked', title: 'Blocked', snippet: 'You blocked him' },
    ...REPLIES.map((r) => ({ id: r.id, title: r.label, snippet: r.summary })),
    {
      id: 'custom',
      title: 'Custom',
      snippet: 'Write your own reply',
    },
  ]

  return (
    <div>
      <Field label="The pitch (from Michael)">
        <OptionList
          options={pitchOptions}
          value={meme.pitchId}
          onSelect={(id) => set({ pitchId: id as string })}
        />
        {meme.pitchId === 'custom' && (
          <textarea
            value={meme.customPitch}
            onChange={(e) => set({ customPitch: e.target.value })}
            placeholder="Type the incoming DM…"
            rows={3}
            className={`mt-2 ${inputClass}`}
          />
        )}
      </Field>

      <Field label="Your reply">
        <OptionList
          options={replyOptions}
          value={meme.replyId}
          onSelect={(id) => set({ replyId: id })}
        />
        {meme.replyId === 'custom' && (
          <textarea
            value={meme.customReply}
            onChange={(e) => set({ customReply: e.target.value })}
            placeholder="Type your regretful reply…"
            rows={2}
            className={`mt-2 ${inputClass}`}
          />
        )}
      </Field>
    </div>
  )
}
