const accreditations = [
  { src: '/images/accreditations/group-49.svg', alt: 'IATA' },
  { src: '/images/accreditations/group-50.svg', alt: 'PATA' },
  { src: '/images/accreditations/group-51.svg', alt: 'ATAB' },
  { src: '/images/accreditations/rjsc.svg',     alt: 'RJSC' },
  { src: '/images/accreditations/caab.svg',     alt: 'CAAB' },
  { src: '/images/accreditations/dscc.svg',     alt: 'DSCC' },
]

export default function Accreditations() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-6">
      <div className="whitespace-nowrap sm:w-[180px] sm:flex-shrink-0">
        <span className="text-[11px] font-medium tracking-widest uppercase text-ink-heading leading-tight block">
          Our Accreditations
        </span>
        <span className="text-[11px] font-medium tracking-widest uppercase text-ink-heading leading-tight block">
          &amp; Licences
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-x-8 gap-y-4 sm:flex-1 sm:justify-between sm:flex-nowrap">
        {accreditations.map((a) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={a.src}
            src={a.src}
            alt={a.alt}
            className="h-[44px] lg:h-[26px] w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
