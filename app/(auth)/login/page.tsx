import HeroPanel from '@/components/layout/HeroPanel'
import LoginCard from '@/components/auth/LoginCard'
import AirlinePartners from '@/components/partners/AirlinePartners'
import Accreditations from '@/components/partners/Accreditations'

export default function LoginPage() {
  return (
    <>
      <main className="flex flex-col lg:flex-row w-full overflow-hidden max-w-[1728px] mx-auto">
        <HeroPanel />
        <LoginCard />
      </main>

      {/* Partners & accreditations bar — full width below the hero/login split */}
      <section className="w-full bg-white border-t border-border-divider">
        <div className="max-w-[1728px] mx-auto px-4 py-5 lg:px-14 lg:py-6">
          <AirlinePartners />
        </div>
        <div className="border-t border-border-divider" />
        <div className="max-w-[1728px] mx-auto px-4 py-5 lg:px-14 lg:py-6">
          <Accreditations />
        </div>
      </section>
    </>
  )
}
