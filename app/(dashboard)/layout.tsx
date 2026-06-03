import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session?.user) redirect('/login')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard nav placeholder */}
      <header className="h-16 bg-brand-primary flex items-center px-6">
        <span className="text-white font-bold text-lg">Roaming Bangladesh B2B</span>
        <span className="ml-4 text-white/60 text-sm">| {session.user.email}</span>
      </header>
      <main className="p-6">{children}</main>
    </div>
  )
}
