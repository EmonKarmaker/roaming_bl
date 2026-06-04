'use client'

import { useState } from 'react'
import LanguageSelector from '@/components/ui/LanguageSelector'
import LoginTabs, { type LoginTab } from './LoginTabs'
import EmailLoginForm from './EmailLoginForm'
import OtpLoginForm from './OtpLoginForm'
import SsoButtons from './SsoButtons'
import Link from 'next/link'

export default function LoginCard() {
  const [tab, setTab] = useState<LoginTab>('email')

  return (
    /* On mobile: white card with rounded top corners sitting below the hero panel.
       On desktop: plain white right column, no radius. */
    <div className="flex-1 lg:flex-none lg:w-[45%] flex flex-col bg-white lg:min-h-0 relative rounded-t-2xl lg:rounded-none">

      {/* Language selector — top right */}
      <div className="relative z-10 flex justify-end p-4 lg:p-4">
        <LanguageSelector />
      </div>

      {/* Card form area — centered on desktop so both tabs stay balanced (no bottom void);
          top-anchored on mobile for the normal scrollable stack. */}
      <div className="relative z-10 flex-1 flex items-start lg:items-center justify-center px-5 pb-8 lg:px-0 lg:pb-4">
        <div className="w-full max-w-login-card bg-white px-0 lg:px-12">

          {/* Heading */}
          <div className="mb-4 lg:mb-5">
            <h1 className="text-[28px] lg:text-[32px] font-bold text-ink-heading leading-tight">
              Welcome Back!
            </h1>
            <p className="text-[14px] font-normal text-ink-body mt-1">
              Sign in to your Roaming Bangladesh B2B account
            </p>
          </div>

          <LoginTabs active={tab} onChange={setTab} />

          <div className="mt-5 lg:mt-4">
            {tab === 'email' ? <EmailLoginForm /> : <OtpLoginForm />}
          </div>

          <div className="mt-5 lg:mt-[14px]">
            <SsoButtons />
          </div>

          <p className="mt-5 lg:mt-[14px] text-center text-[12px] text-ink-muted pb-6 lg:pb-0">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-ink-heading hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
