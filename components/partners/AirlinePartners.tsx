const airlines = [
  { src: '/images/airlines/emirates.svg',  alt: 'Emirates'          },
  { src: '/images/airlines/qatar.svg',      alt: 'Qatar Airways'     },
  { src: '/images/airlines/us-bangla.svg', alt: 'US-Bangla Airlines' },
  { src: '/images/airlines/gulf-air.svg',  alt: 'Gulf Air'          },
  { src: '/images/airlines/turkish.svg',   alt: 'Turkish Airlines'  },
]

export default function AirlinePartners() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center w-full gap-4 sm:gap-6">
      <span className="text-[9px] font-semibold tracking-widest uppercase text-ink-heading whitespace-nowrap sm:w-[200px] sm:flex-shrink-0">
        Our Airline Partners
      </span>
      <div className="flex items-center flex-wrap gap-x-8 gap-y-4 sm:flex-1 sm:justify-between sm:flex-nowrap">
        {airlines.map((a) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={a.src}
            src={a.src}
            alt={a.alt}
            className="h-9 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
