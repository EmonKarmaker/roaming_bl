import { Globe, ChevronDown } from 'lucide-react'

export default function LanguageSelector() {
  return (
    <button
      type="button"
      className="flex items-center gap-1.5 px-3 py-2 rounded-pill border border-border-input bg-white text-[12px] text-ink-body hover:bg-gray-50 transition-colors"
    >
      <Globe size={14} className="text-ink-muted" />
      <span>English</span>
      <ChevronDown size={12} className="text-ink-muted" />
    </button>
  )
}
