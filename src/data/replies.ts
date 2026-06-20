import type { Reply } from '../types'

/** Your (blue) reply. Regret-maximizing options + custom. "Leave on read"
 *  is represented by a null replyId in the Meme, not an entry here. */
export const REPLIES: Reply[] = [
  {
    id: 'marketplaces',
    label: 'only invest in marketplaces',
    summary: 'You only back marketplaces',
    text: 'Sorry, I only invest in marketplaces',
    time: '09:15',
  },
  {
    id: 'gpt4-wrapper',
    label: 'I can build this myself',
    summary: 'You say it is a GPT wrapper',
    text: 'tbh I can already build such a system myself quite trivially by connecting GPT-4 to my editor',
    time: '12:53',
  },
  {
    id: 'uno-reverse',
    label: 'Uno reverse',
    summary: 'You pitch him your thing instead',
    text: "We're looking for more users who would run their code with us. Would you be interested?",
    time: '15:32',
  },
]

export const REPLY_BY_ID = Object.fromEntries(
  REPLIES.map((r) => [r.id, r]),
) as Record<string, Reply>
