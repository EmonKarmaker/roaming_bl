'use client'

import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  icon?: ReactNode
  error?: string
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, icon, error, type, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === 'password'
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label className="text-[13px] font-medium text-ink-heading">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-4 flex items-center text-ink-muted pointer-events-none">
              {icon}
            </span>
          )}
          <input
            ref={ref}
            type={inputType}
            className={[
              'w-full h-input rounded-input border border-border-input bg-surface-input',
              'px-4 text-[12px] text-ink-heading placeholder:text-ink-muted',
              'outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-colors',
              icon ? 'pl-11' : '',
              isPassword ? 'pr-11' : '',
              error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
              className,
            ]
              .filter(Boolean)
              .join(' ')}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-4 flex items-center text-ink-muted hover:text-ink-body transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-[12px] text-red-500">{error}</p>
        )}
      </div>
    )
  }
)
FormInput.displayName = 'FormInput'

export default FormInput
