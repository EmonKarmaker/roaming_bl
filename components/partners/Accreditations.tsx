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
    <div className="flex items-center w-full">
      <div className="whitespace-nowrap w-[200px] flex-shrink-0">
        <span className="text-[9px] font-semibold tracking-widest uppercase text-ink-heading leading-tight block">
          Our Accreditations
        </span>
        <span className="text-[9px] font-semibold tracking-widest uppercase text-ink-heading leading-tight block">
          &amp; Licences
        </span>
      </div>
      <div className="flex-1 flex items-center justify-between">
        {accreditations.map((a) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={a.src}
            src={a.src}
            alt={a.alt}
            className="h-[50px] w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
