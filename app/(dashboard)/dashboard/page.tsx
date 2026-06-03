import { auth } from '@/lib/auth'

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-ink-heading">Dashboard</h1>
      <p className="text-ink-body">
        Welcome, <span className="font-semibold">{session?.user?.name ?? session?.user?.email}</span>.
        Your B2B portal is ready.
      </p>
      <div className="mt-4 p-6 bg-white rounded-lg border border-border-input text-sm text-ink-muted">
        Dashboard content coming soon.
      </div>
    </div>
  )
}
