import FeatureList from './FeatureList'

const HERO_BG = "url('/images/hero.png')"

export default function HeroPanel() {
  return (
    <div className="relative flex w-full lg:w-[55%] lg:flex-shrink-0 overflow-hidden bg-brand-deepest">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: HERO_BG }}
      >
        <div className="absolute inset-0 bg-brand-primary/50" />
      </div>

      {/* Content — top-anchored with exact Figma margins */}
      <div className="relative z-10 flex-1 flex flex-col px-5 pt-7 pb-10 lg:pl-14 lg:pr-12 lg:pt-9 lg:pb-4">

        {/* Logo + tagline */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/rb-white.svg"
            alt="Roaming Bangladesh"
            width={210}
            height={66}
            className="w-[150px] lg:w-[210px] h-auto"
          />
          <p className="text-[11px] lg:text-[12px] font-medium text-white uppercase tracking-[0.1em] mt-[8px] lg:mt-[10px]">
            B2B Travel Marketplace
          </p>
        </div>

        {/* Headline + subtext + features */}
        <div className="mt-6 lg:mt-7 lg:max-w-[460px]">
          <h1 className="text-[26px] lg:text-[32px] font-bold text-white leading-[1.15] lg:leading-[1.2] mb-3 lg:mb-0">
            Your Trusted Travel Business Partner
          </h1>
          <p className="text-[14px] font-normal text-white/85 leading-[1.6] lg:leading-[1.55] mb-6 lg:mt-[12px] lg:max-w-[340px] lg:mb-6">
            One platform, endless possibilities. Flights, Hotels, Visa, Tours &amp; Umrah — all in one place.
          </p>
          <FeatureList />
        </div>
      </div>
    </div>
  )
}
