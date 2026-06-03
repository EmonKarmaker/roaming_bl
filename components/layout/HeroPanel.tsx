import FeatureList from './FeatureList'

const HERO_BG = "url('/images/hero.png')"

export default function HeroPanel() {
  return (
    <div className="relative flex w-full lg:w-[57%] lg:flex-shrink-0 overflow-hidden bg-brand-deepest">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: HERO_BG }}
      >
        <div className="absolute inset-0 bg-brand-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-[400px] pl-14 pr-12 pt-11 pb-12">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rb-white.svg"
          alt="Roaming Bangladesh"
          width={210}
          height={66}
          className="w-[210px] h-auto"
        />
        {/* Tagline */}
        <p className="text-[13px] font-medium text-white uppercase tracking-[0.1em] mt-[14px]">
          B2B Travel Marketplace
        </p>

        {/* ~40px gap, then headline + subtext + features */}
        <div className="mt-10 max-w-[420px]">
          <h1 className="text-[36px] font-bold text-white leading-[1.15] mb-[14px] max-w-[440px]">
            Your Trusted Travel Business Partner
          </h1>
          <p className="text-[15px] font-normal text-white/85 leading-[1.6] max-w-[340px] mb-9">
            One platform, endless possibilities. Flights, Hotels, Visa, Tours &amp; Umrah — all in one place.
          </p>
          <FeatureList />
        </div>
      </div>
    </div>
  )
}
