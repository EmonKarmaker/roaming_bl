'use client'

import { useState } from 'react'
import { Phone } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import PrimaryButton from '@/components/ui/PrimaryButton'

export default function OtpLoginForm() {
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSendOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    // STUBBED: show OTP entry step but never completes auth
    setStep('otp')
  }

  async function handleVerifyOtp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setError('OTP login is not yet enabled. Please use Google or Microsoft to sign in.')
  }

  if (step === 'otp') {
    return (
      <form onSubmit={handleVerifyOtp} className="flex flex-col gap-5" noValidate>
        <FormInput
          label="Enter OTP"
          type="text"
          name="otp"
          placeholder="6-digit code"
          inputMode="numeric"
          maxLength={6}
          autoComplete="one-time-code"
          required
        />
        {error && (
          <p className="text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-input px-3 py-2">
            {error}
          </p>
        )}
        <PrimaryButton type="submit" loading={loading}>
          Verify OTP
        </PrimaryButton>
        <button
          type="button"
          onClick={() => { setStep('phone'); setError('') }}
          className="text-[12px] text-ink-muted hover:text-ink-heading transition-colors text-center"
        >
          ← Change number
        </button>
      </form>
    )
  }

  return (
    <form onSubmit={handleSendOtp} className="flex flex-col gap-5" noValidate>
      <FormInput
        label="Mobile Number"
        type="tel"
        name="phone"
        placeholder="+880 1XXX XXXXXX"
        autoComplete="tel"
        icon={<Phone size={16} />}
        required
      />
      {error && (
        <p className="text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-input px-3 py-2">
          {error}
        </p>
      )}
      <PrimaryButton type="submit" loading={loading}>
        Send OTP
      </PrimaryButton>
    </form>
  )
}
