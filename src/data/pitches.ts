import type { Pitch } from '../types'

/** The incoming (grey) DM from "Michael Truell". Real quotes + trend-bait. */
export const PITCHES: Pitch[] = [
  {
    id: 'founding-engineer',
    label: 'Founding engineer offer',
    summary: 'Offering you a founding engineer seat',
    bubbles: [
      "Hey! I'm a big fan of your work. I'm building something new and would love to talk to you. Would you be interested in being a founding engineer at Cursor?",
    ],
    time: '14:08',
  },
  {
    id: 'series-b',
    label: 'Series B invite',
    summary: 'Wants you in on the Series B round',
    bubbles: [
      "I'm one of the co-founders of Cursor (the AI code editor). We're raising a Series B round and I was wondering if you might be interested in investing?",
    ],
    time: '10:42',
  },
  {
    id: 'mit-call',
    label: 'Quick call?',
    summary: 'Four MIT grads building an AI IDE, wants a call',
    bubbles: [
      "we're a group of four MIT '22s working on a new IDE built for pair-programming with AI",
      'any time for a quick call?',
    ],
    time: '12:53',
  },
  {
    id: 'feedback',
    label: 'Asking for feedback',
    summary: 'MIT student wants feedback on cursor.so',
    bubbles: [
      'Hey! Do you use any tools to help your writing/creative process?',
      "I'm an MIT student working on cursor.so and looking for some feedback.",
    ],
    time: '14:42',
  },
]

export const PITCH_BY_ID = Object.fromEntries(
  PITCHES.map((p) => [p.id, p]),
) as Record<string, Pitch>
