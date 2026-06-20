import { forwardRef } from 'react'
import avatar from '../assets/mntruell.png'
import type { Meme } from '../types'
import { PITCH_BY_ID } from '../data/pitches'
import { REPLY_BY_ID } from '../data/replies'
import { MessageBubble, BubbleTime } from './MessageBubble'
import {
  BackArrow,
  PhoneIcon,
  VideoIcon,
  PlusIcon,
  MicWave,
  VerifiedBadge,
  StatusIcons,
} from './icons'

function resolvePitch(meme: Meme) {
  if (meme.pitchId === 'custom') {
    return { bubbles: [meme.customPitch || ' '], time: meme.statusTime }
  }
  const p = PITCH_BY_ID[meme.pitchId]
  return { bubbles: p.bubbles, time: p.time }
}

type ReplyState =
  | { kind: 'reply'; text: string; time: string }
  | { kind: 'none' } // left on read
  | { kind: 'blocked' }

function resolveReply(meme: Meme): ReplyState {
  if (meme.replyId === null) return { kind: 'none' }
  if (meme.replyId === 'blocked') return { kind: 'blocked' }
  if (meme.replyId === 'custom') {
    return { kind: 'reply', text: meme.customReply || ' ', time: '09:15' }
  }
  const r = REPLY_BY_ID[meme.replyId]
  return { kind: 'reply', text: meme.replyText || r.texts[0], time: r.time }
}

export const PhoneMockup = forwardRef<HTMLDivElement, { meme: Meme }>(
  function PhoneMockup({ meme }, ref) {
    const pitch = resolvePitch(meme)
    const reply = resolveReply(meme)
    const sameDay = meme.pitchDate === meme.replyDate

    return (
      <div
        ref={ref}
        className="mockup-font flex h-[760px] w-[390px] flex-col bg-white text-[#0f1419] select-none"
      >
        {/* Status bar */}
        <div className="flex shrink-0 items-center justify-between px-6 pt-3 pb-1">
          <span className="text-[15px] font-semibold tracking-tight text-black">
            {meme.statusTime}
          </span>
          <StatusIcons batteryPct={meme.batteryPct} />
        </div>

        {/* DM header */}
        <div className="flex shrink-0 items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3 text-[#0f1419]">
            <BackArrow />
            <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            <div className="flex items-center gap-1">
              <span className="text-[17px] font-bold">Michael Truell</span>
              <VerifiedBadge />
            </div>
          </div>
          <div className="flex items-center gap-5 text-[#0f1419]">
            <PhoneIcon />
            <VideoIcon />
          </div>
        </div>

        {/* Profile card */}
        <div className="flex shrink-0 flex-col items-center px-4 pt-5 pb-3">
          <img
            src={avatar}
            alt=""
            className="h-[68px] w-[68px] rounded-full object-cover"
          />
          <div className="mt-3 flex items-center gap-1">
            <span className="text-[19px] font-extrabold">Michael Truell</span>
            <VerifiedBadge />
          </div>
          <div className="text-[15px] text-[#536471]">@mntruell</div>
          <div className="text-[15px] text-[#536471]">Joined August 2014</div>
          <button className="mt-3 rounded-full bg-[#0f1419] px-4 py-[7px] text-[14px] font-bold text-white">
            View Profile
          </button>
        </div>

        {/* Thread — flex-1 so the card height stays fixed regardless of whether
            there's a reply. Content is top-anchored with trailing whitespace,
            like a real short DM thread. */}
        <div className="min-h-0 flex-1 overflow-hidden px-4 pb-2">
          {/* pitch date */}
          <div className="py-3 text-center text-[13px] font-semibold text-[#536471]">
            {meme.pitchDate}
          </div>

          <div className="space-y-[3px]">
            {pitch.bubbles.map((b, i) => (
              <MessageBubble key={i} text={b} variant="incoming" />
            ))}
          </div>
          <BubbleTime time={pitch.time} align="left" />

          {reply.kind === 'reply' && (
            <>
              {!sameDay && (
                <div className="py-3 text-center text-[13px] font-semibold text-[#536471]">
                  {meme.replyDate}
                </div>
              )}
              <div className={sameDay ? 'mt-4' : ''}>
                <MessageBubble text={reply.text} variant="outgoing" />
              </div>
              <BubbleTime time={reply.time} align="right" showCheck />
            </>
          )}

          {reply.kind === 'blocked' && (
            <div className="mt-5 text-center text-[13px] text-[#536471]">
              You blocked this account
            </div>
          )}
        </div>

        {/* Message input bar */}
        <div className="flex shrink-0 items-center gap-3 px-4 py-3">
          <div className="text-[#1d9bf0]">
            <PlusIcon />
          </div>
          <div className="flex-1 rounded-full bg-[#eaecef] px-4 py-[9px] text-[15px] text-[#536471]">
            Message
          </div>
          <div className="text-[#536471]">
            <MicWave />
          </div>
        </div>
      </div>
    )
  },
)
