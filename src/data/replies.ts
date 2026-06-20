import type { Reply } from '../types'

/** Your (blue) reply. Regret-maximizing options + custom. "Leave on read"
 *  is represented by a null replyId in the Meme, not an entry here. */
export const REPLIES: Reply[] = [
  {
    id: 'marketplaces',
    label: 'only invest in marketplaces',
    text: 'Sorry, I only invest in marketplaces',
    time: '09:15',
  },
  {
    id: 'gpt4-wrapper',
    label: 'you can build this yourself',
    text: 'tbh you can already build such a system yourself quite trivially by connecting GPT-4 to your editor',
    time: '12:53',
  },
  {
    id: 'happy-here',
    label: "happy where I am",
    text: "I'm happy where I am, but can recommend people if I meet someone great",
    time: '15:32',
  },
  {
    id: 'uno-reverse',
    label: 'Uno reverse',
    text: "We're looking for more users who would run their code with us. Would you be interested?",
    time: '15:32',
  },
]

export const REPLY_BY_ID = Object.fromEntries(
  REPLIES.map((r) => [r.id, r]),
) as Record<string, Reply>
