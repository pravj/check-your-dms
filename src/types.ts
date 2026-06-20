export type Pitch = {
  id: string
  label: string
  /** Short, plain-language gist shown under the title in the picker. */
  summary: string
  /** One or more grey incoming bubbles, in order. */
  bubbles: string[]
  /** Timestamp under the last incoming bubble, e.g. "10:42". */
  time: string
}

export type Reply = {
  id: string
  label: string
  /** Short, plain-language gist shown under the title in the picker. */
  summary: string
  /** Pool of possible blue outgoing bubble texts; one is chosen at random. */
  texts: string[]
  /** Timestamp under the reply, e.g. "09:15". */
  time: string
}

/** The single source of truth the mockup renders from. */
export type Meme = {
  pitchId: string
  customPitch: string
  replyId: string | null // null = leave on read
  customReply: string
  /** The randomly-chosen blue-bubble text for the current pooled reply. */
  replyText: string
  pitchDate: string
  replyDate: string
  /** Status-bar clock, e.g. "23:20". */
  statusTime: string
  /** Status-bar battery level, 0–100. */
  batteryPct: number
}
