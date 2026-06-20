import { CheckMark } from './icons'

type Props = {
  text: string
  variant: 'incoming' | 'outgoing'
}

/** A single chat bubble. Incoming = grey, left-aligned. Outgoing = blue,
 *  right-aligned (this is "you" — no avatar/handle, matching X DMs). */
export function MessageBubble({ text, variant }: Props) {
  const incoming = variant === 'incoming'
  return (
    <div className={incoming ? 'flex justify-start' : 'flex justify-end'}>
      <div
        className={[
          'max-w-[78%] whitespace-pre-wrap break-words px-[14px] py-[9px] text-[15px] leading-[20px]',
          incoming
            ? 'rounded-[20px] rounded-bl-[5px] bg-[#eaecef] text-[#0f1419]'
            : 'rounded-[20px] rounded-br-[5px] bg-[#1d9bf0] text-white',
        ].join(' ')}
      >
        {text}
      </div>
    </div>
  )
}

/** Timestamp line under a group of bubbles. */
export function BubbleTime({
  time,
  align,
  showCheck = false,
}: {
  time: string
  align: 'left' | 'right'
  showCheck?: boolean
}) {
  return (
    <div
      className={[
        'mt-[2px] flex items-center text-[12px] text-[#536471]',
        align === 'right' ? 'justify-end' : 'justify-start',
      ].join(' ')}
    >
      <span>{time}</span>
      {showCheck && <CheckMark />}
    </div>
  )
}
