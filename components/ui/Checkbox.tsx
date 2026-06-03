'use client'

import { type InputHTMLAttributes } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export default function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  return (
    <label htmlFor={id} className={`flex items-center gap-2 cursor-pointer select-none ${className}`}>
      <input
        id={id}
        type="checkbox"
        className="h-4 w-4 rounded border-border-input accent-brand-primary cursor-pointer"
        {...props}
      />
      <span className="text-[12px] text-ink-body">{label}</span>
    </label>
  )
}
