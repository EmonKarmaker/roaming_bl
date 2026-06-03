'use client'

export type LoginTab = 'email' | 'otp'

interface LoginTabsProps {
  active: LoginTab
  onChange: (tab: LoginTab) => void
}

interface TabDef {
  id: LoginTab
  label: string
  icon?: string
}

const tabs: TabDef[] = [
  { id: 'email', label: 'Email Login' },
  { id: 'otp',   label: 'OTP Login', icon: '/icons/phone-otp.svg' },
]

export default function LoginTabs({ active, onChange }: LoginTabsProps) {
  return (
    <div className="grid grid-cols-2 border-b border-border-tab">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={[
            'py-3 text-[15px] font-medium flex items-center justify-center gap-2 transition-colors',
            active === tab.id
              ? 'text-ink-heading border-b-2 border-brand-primary -mb-px'
              : 'text-ink-muted hover:text-ink-body',
          ].join(' ')}
        >
          {tab.icon && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={tab.icon} alt="" width={18} height={18} className="w-[18px] h-[18px] flex-shrink-0" />
          )}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
