import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  loading?: boolean
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
}

export default function PrimaryButton({
  children,
  loading = false,
  variant = 'primary',
  fullWidth = true,
  className = '',
  disabled,
  ...props
}: PrimaryButtonProps) {
  const base =
    'h-btn-lg rounded-btn text-[15px] font-semibold transition-opacity flex items-center justify-center gap-2 select-none'
  const variants = {
    primary: 'bg-brand-button text-white hover:opacity-90 disabled:opacity-50',
    outline: 'border border-border-input bg-white text-ink-heading hover:bg-gray-50 disabled:opacity-50',
  }

  return (
    <button
      disabled={disabled || loading}
      className={[
        base,
        variants[variant],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
      ) : (
        children
      )}
    </button>
  )
}
