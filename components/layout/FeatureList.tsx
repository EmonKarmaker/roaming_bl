const features = [
  {
    src:         '/icons/feature-airlines.svg',
    alt:         'Airlines icon',
    title:       '500+ Airlines',
    description: 'Global inventory with best negotiated fares',
  },
  {
    src:         '/icons/feature-hotels.svg',
    alt:         'Hotels icon',
    title:       '1M+ Hotels',
    description: 'Worldwide hotels with exclusive rates',
  },
  {
    src:         '/icons/feature-visa.svg',
    alt:         'Visa icon',
    title:       'Visa Solutions',
    description: 'Fast & reliable visa processing',
  },
  {
    src:         '/icons/feature-support.svg',
    alt:         'Support icon',
    title:       '24/7 Support',
    description: 'Our team is always here to help you',
  },
]

export default function FeatureList() {
  return (
    <ul className="flex flex-col gap-5">
      {features.map((f) => (
        <li key={f.title} className="flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={f.src}
            alt={f.alt}
            width={56}
            height={56}
            className="flex-shrink-0 w-[56px] h-[56px]"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[18px] font-bold text-white leading-snug">{f.title}</span>
            <span className="text-[14px] font-normal text-white/75 leading-relaxed max-w-[200px]">{f.description}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
