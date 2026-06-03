'use client'

import { useState, type ReactNode } from 'react'
import { signIn } from 'next-auth/react'

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M19.6 10.23c0-.68-.06-1.36-.17-2H10v3.79h5.4a4.62 4.62 0 0 1-2 3.03v2.5h3.24c1.9-1.75 3-4.33 3-7.32Z" fill="#4285F4"/>
      <path d="M10 20c2.7 0 4.96-.9 6.61-2.45l-3.24-2.5c-.9.6-2.04.96-3.37.96-2.59 0-4.79-1.75-5.57-4.1H1.1v2.57A10 10 0 0 0 10 20Z" fill="#34A853"/>
      <path d="M4.43 11.91A5.97 5.97 0 0 1 4.12 10c0-.66.11-1.3.31-1.91V5.52H1.1A10 10 0 0 0 0 10c0 1.61.39 3.13 1.1 4.48l3.33-2.57Z" fill="#FBBC05"/>
      <path d="M10 3.98c1.46 0 2.77.5 3.8 1.49l2.85-2.85A9.94 9.94 0 0 0 10 0 10 10 0 0 0 1.1 5.52l3.33 2.57C5.21 5.73 7.41 3.98 10 3.98Z" fill="#EA4335"/>
    </svg>
  )
}

function MicrosoftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <rect x="1"  y="1"  width="8.5" height="8.5" fill="#F25022"/>
      <rect x="10.5" y="1"  width="8.5" height="8.5" fill="#7FBA00"/>
      <rect x="1"  y="10.5" width="8.5" height="8.5" fill="#00A4EF"/>
      <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#FFB900"/>
    </svg>
  )
}

interface SsoButtonProps {
  provider: 'google' | 'microsoft-entra-id'
  label: string
  icon: ReactNode
}

function SsoButton({ provider, label, icon }: SsoButtonProps) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    await signIn(provider, { callbackUrl: '/dashboard' })
    setLoading(false)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      className="flex-1 h-btn-lg rounded-btn border border-border-input bg-white flex items-center justify-center gap-2.5 text-[15px] font-semibold text-ink-heading hover:bg-gray-50 disabled:opacity-60 transition-colors"
    >
      {loading ? (
        <span className="h-4 w-4 rounded-full border-2 border-ink-muted/30 border-t-ink-body animate-spin" />
      ) : (
        icon
      )}
      {label}
    </button>
  )
}

export default function SsoButtons() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-border-divider" />
        <span className="text-[12px] text-ink-muted whitespace-nowrap">Or continue with</span>
        <div className="flex-1 h-px bg-border-divider" />
      </div>
      <div className="flex gap-3">
        <SsoButton provider="google"             label="Google"    icon={<GoogleIcon />}    />
        <SsoButton provider="microsoft-entra-id" label="Microsoft" icon={<MicrosoftIcon />} />
      </div>
    </div>
  )
}
