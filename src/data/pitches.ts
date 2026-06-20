import type { Pitch } from '../types'

/** The incoming (grey) DM from "Michael Truell". Real quotes + trend-bait. */
export const PITCHES: Pitch[] = [
  {
    id: 'series-b',
    label: 'Series B invite',
    bubbles: [
      "I'm one of the co-founders of Cursor (the AI code editor). We're raising a Series B round and I was wondering if you might be interested in investing?",
    ],
    time: '10:42',
  },
  {
    id: 'founding-engineer',
    label: 'Founding engineer offer',
    bubbles: [
      "Hey! I'm a big fan of your work. I'm building something new and would love to talk to you. Would you be interested in being a founding engineer at Cursor?",
    ],
    time: '14:08',
  },
  {
    id: 'mit-call',
    label: 'MIT — quick call?',
    bubbles: [
      "we're a group of four MIT '22s working on a new IDE built for pair-programming with AI",
      'any time for a quick call?',
    ],
    time: '12:53',
  },
  {
    id: 'feedback',
    label: 'Asking for feedback',
    bubbles: [
      'Hey! Do you use any tools to help your writing/creative process?',
      "I'm an MIT student working on cursor.so and looking for some feedback.",
    ],
    time: '14:42',
  },
  {
    id: 'devrel',
    label: 'DevRel role',
    bubbles: [
      "We're looking for someone to lead our DevRel/DA efforts. Would you be interested?",
    ],
    time: '15:26',
  },
  {
    id: 'hey',
    label: 'just "hey :)"',
    bubbles: ['hey :)'],
    time: '01:54',
  },
]

export const PITCH_BY_ID = Object.fromEntries(
  PITCHES.map((p) => [p.id, p]),
) as Record<string, Pitch>
