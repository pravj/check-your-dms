export type Pitch = {
  id: string
  label: string
  /** One or more grey incoming bubbles, in order. */
  bubbles: string[]
  /** Timestamp under the last incoming bubble, e.g. "10:42". */
  time: string
}

export type Reply = {
  id: string
  label: string
  /** Blue outgoing bubble text. */
  text: string
  /** Timestamp under the reply, e.g. "09:15". */
  time: string
}

export type ExamplePreset = {
  id: string
  /** Who originally posted it — shown in the gallery. */
  credit: string
  pitchId: string
  /** null = leave on read (no reply bubble). */
  replyId: string | null
  caption: string
  /** Date separator above the pitch, e.g. "May 15, 2024". */
  pitchDate: string
  /** Date separator above the reply (only used when a reply exists). */
  replyDate: string
}

/** The single source of truth the mockup renders from. */
export type Meme = {
  pitchId: string
  customPitch: string
  replyId: string | null // null = leave on read
  customReply: string
  caption: string
  customCaption: string
  pitchDate: string
  replyDate: string
  /** Status-bar clock, e.g. "23:20". */
  statusTime: string
}
