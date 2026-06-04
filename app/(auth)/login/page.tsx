import HeroPanel from '@/components/layout/HeroPanel'
import LoginCard from '@/components/auth/LoginCard'
import AirlinePartners from '@/components/partners/AirlinePartners'
import Accreditations from '@/components/partners/Accreditations'

export default function LoginPage() {
  return (
    /* Natural top-to-bottom flow: [hero + login split] then [partners bar].
       No forced 100vh, no overflow clipping — a little scroll is fine. */
    <>
      <main className="flex flex-col lg:flex-row w-full max-w-[1728px] mx-auto">
        <HeroPanel />
        <LoginCard />
      </main>

      {/* Partners bar — flows below the split, never overlapping it */}
      <section className="w-full bg-white border-t border-border-divider">
        <div className="max-w-[1728px] mx-auto px-4 py-3 lg:px-14 lg:py-2">
          <AirlinePartners />
        </div>
        <div className="border-t border-border-divider" />
        <div className="max-w-[1728px] mx-auto px-4 py-3 lg:px-14 lg:py-2">
          <Accreditations />
        </div>
      </section>
    </>
  )
}
