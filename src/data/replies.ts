import type { Reply } from '../types'

/** Your (blue) reply. Each option carries a POOL of texts; a random one is shown
 *  per selection so the same option doesn't always read identically. "Leave on
 *  read" (null) and "Blocked" are handled in the mockup, not here. */
export const REPLIES: Reply[] = [
  {
    id: 'vc-pass',
    label: 'not a right fit',
    summary: 'You pass like a tier-1 VC',
    texts: [
      'Sorry, I only invest in marketplaces',
      "I don't see the moat here, we're going to pass",
      'feels like a feature, not a company',
      'not enough synergy with the rest of the portfolio',
      "TAM feels capped, it's a pass from us",
      "what's the moat once the models get good?",
      "love the team, wrong thesis fit. let's reconnect at Series C",
    ],
    time: '09:15',
  },
  {
    id: 'gpt4-wrapper',
    label: 'I can build this myself',
    summary: 'You say it is a GPT wrapper',
    texts: [
      'tbh I can already build this myself by wiring GPT-4 into my editor',
      "isn't this just a thin wrapper over GPT-4?",
      'Copilot already does this for free, no?',
      "neat demo, I'd just call the API directly",
      'this is a weekend project honestly',
    ],
    time: '12:53',
  },
  {
    id: 'uno-reverse',
    label: 'Uno reverse',
    summary: 'You pitch him your thing instead',
    texts: [
      "funny you ask, I'm building something too. want to invest?",
      'before that, can I tell you about MY startup real quick',
      "actually we're hiring, any interest in joining us instead?",
      "I'll do it if you come on my podcast first",
      'happy to chat, if you try my product first',
    ],
    time: '15:32',
  },
]

export const REPLY_BY_ID = Object.fromEntries(
  REPLIES.map((r) => [r.id, r]),
) as Record<string, Reply>

/** Pick a random blue-bubble text for a reply option. Returns '' for options
 *  with no pool (leave on read / blocked / custom). */
export function randomReplyText(id: string | null): string {
  if (!id) return ''
  const r = REPLY_BY_ID[id]
  if (!r) return ''
  return r.texts[Math.floor(Math.random() * r.texts.length)]
}
