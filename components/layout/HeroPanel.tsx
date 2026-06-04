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
      <div className="relative z-10 flex flex-col px-5 pt-7 pb-10 lg:pl-14 lg:pr-12 lg:pt-11 lg:pb-12">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/rb-white.svg"
          alt="Roaming Bangladesh"
          width={210}
          height={66}
          className="w-[150px] lg:w-[210px] h-auto"
        />
        {/* Tagline */}
        <p className="text-[11px] lg:text-[13px] font-medium text-white uppercase tracking-[0.1em] mt-[8px] lg:mt-[14px]">
          B2B Travel Marketplace
        </p>

        {/* Headline + subtext + features — all screen sizes */}
        <div className="mt-6 lg:mt-10 lg:max-w-[420px]">
          <h1 className="text-[26px] lg:text-[36px] font-bold text-white leading-[1.15] mb-3 lg:mb-[14px]">
            Your Trusted Travel Business Partner
          </h1>
          <p className="text-[14px] lg:text-[15px] font-normal text-white/85 leading-[1.6] mb-6 lg:max-w-[340px] lg:mb-9">
            One platform, endless possibilities. Flights, Hotels, Visa, Tours &amp; Umrah — all in one place.
          </p>
          <FeatureList />
        </div>
      </div>
    </div>
  )
}
