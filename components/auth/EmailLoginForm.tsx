'use client'

import { useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import FormInput from '@/components/ui/FormInput'
import PrimaryButton from '@/components/ui/PrimaryButton'
import Checkbox from '@/components/ui/Checkbox'

export default function EmailLoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    // STUBBED: simulates network delay + always fails with a friendly message
    await new Promise((r) => setTimeout(r, 800))
    setLoading(false)
    setError('Email/password login is not yet enabled. Please use Google or Microsoft to sign in.')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <FormInput
        label="Email Address"
        type="email"
        name="email"
        placeholder="agent@company.com"
        autoComplete="email"
        icon={<Mail size={16} />}
        required
      />
      <FormInput
        label="Password"
        type="password"
        name="password"
        placeholder="············"
        autoComplete="current-password"
        icon={<Lock size={16} />}
        required
      />

      <div className="flex items-center justify-between">
        <Checkbox id="remember-me" label="Remember me" />
        <a
          href="#"
          className="text-[12px] text-ink-muted hover:text-ink-heading transition-colors"
        >
          Forgot password?
        </a>
      </div>

      {error && (
        <p className="text-[12px] text-red-500 bg-red-50 border border-red-200 rounded-input px-3 py-2">
          {error}
        </p>
      )}

      <PrimaryButton type="submit" loading={loading}>
        Sign In
      </PrimaryButton>
    </form>
  )
}
