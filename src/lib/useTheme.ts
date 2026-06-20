import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
/** What the user picked. "system" tracks the OS preference live. */
export type ThemePref = 'light' | 'dark' | 'system'

function getInitialPref(): ThemePref {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function systemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolve(pref: ThemePref): Theme {
  return pref === 'system' ? systemTheme() : pref
}

function apply(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

/** Three-way theme control (light / dark / system), persisted to localStorage.
 *  The initial class is also set by an inline script in index.html to avoid a
 *  flash before hydration. When the preference is "system" we live-track the OS
 *  setting via a media-query listener. */
export function useTheme() {
  const [pref, setPref] = useState<ThemePref>(getInitialPref)
  const [theme, setTheme] = useState<Theme>(() => resolve(getInitialPref()))

  // Persist + apply whenever the preference changes.
  useEffect(() => {
    localStorage.setItem('theme', pref)
    const next = resolve(pref)
    setTheme(next)
    apply(next)
  }, [pref])

  // While on "system", follow OS changes live.
  useEffect(() => {
    if (pref !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      const next = systemTheme()
      setTheme(next)
      apply(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [pref])

  const setPreference = useCallback((p: ThemePref) => setPref(p), [])

  return { theme, pref, setPreference }
}
