'use client'

import { useState } from 'react'
import LanguageSelector from '@/components/ui/LanguageSelector'
import LoginTabs, { type LoginTab } from './LoginTabs'
import EmailLoginForm from './EmailLoginForm'
import OtpLoginForm from './OtpLoginForm'
import SsoButtons from './SsoButtons'
import Link from 'next/link'

const HERO_BG = "url('/images/hero.png')"

export default function LoginCard() {
  const [tab, setTab] = useState<LoginTab>('email')

  return (
    <div className="flex-1 lg:flex-none lg:w-[43%] flex flex-col bg-white min-h-screen lg:min-h-0 relative">
      {/* Mobile hero background */}
      <div
        className="lg:hidden absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: HERO_BG }}
      >
        <div className="absolute inset-0 bg-brand-primary/50" />
      </div>

      {/* Language selector — top right */}
      <div className="relative z-10 flex justify-end p-4 lg:p-6">
        <LanguageSelector />
      </div>

      {/* Mobile logo + greeting */}
      <div className="lg:hidden relative z-10 flex flex-col items-center gap-3 px-6 pb-6">
        <p className="text-[24px] font-bold text-white leading-tight tracking-tight">
          Roaming Bangladesh
        </p>
        <p className="text-[10px] tracking-widest uppercase text-white/75">
          B2B Travel Marketplace
        </p>
        <h2 className="text-[28px] font-bold text-white mt-2">Welcome Back!</h2>
        <p className="text-[13px] text-white/80 text-center">
          Login to your account and continue your journey.
        </p>
      </div>

      {/* Card form area */}
      <div className="relative z-10 flex-1 flex items-start lg:items-center justify-center px-6 pb-10 lg:px-0">
        <div className="w-full max-w-login-card bg-white rounded-card lg:rounded-none shadow-lg lg:shadow-none px-6 lg:px-[77px] py-8 lg:py-0">
          {/* Desktop heading */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-[40px] font-bold text-ink-heading leading-tight">
              Welcome Back!
            </h1>
            <p className="text-[13px] font-normal text-ink-body mt-2">
              Sign in to your Roaming Bangladesh B2B account
            </p>
          </div>

          <LoginTabs active={tab} onChange={setTab} />

          <div className="mt-6">
            {tab === 'email' ? <EmailLoginForm /> : <OtpLoginForm />}
          </div>

          <div className="mt-6">
            <SsoButtons />
          </div>

          <p className="mt-6 text-center text-[12px] text-ink-muted">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-ink-heading hover:underline">
              Register Now
            </Link>
          </p>
        </div>
      </div>

      {/* Mobile security bar */}
      <div className="lg:hidden relative z-10 bg-brand-deepest py-4 px-6 flex items-center justify-center gap-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
          <path
            d="M10 1.25L2.5 4.375v5.625c0 4.375 3.125 8.125 7.5 8.75 4.375-.625 7.5-4.375 7.5-8.75V4.375L10 1.25z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7 10l2 2 4-4"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[12px] text-white/90 text-center">
          Your data is protected with industry-standard security
        </span>
      </div>
    </div>
  )
}
