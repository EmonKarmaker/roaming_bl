const airlines = [
  { src: '/images/airlines/emirates.svg',  alt: 'Emirates'          },
  { src: '/images/airlines/qatar.svg',      alt: 'Qatar Airways'     },
  { src: '/images/airlines/us-bangla.svg', alt: 'US-Bangla Airlines' },
  { src: '/images/airlines/gulf-air.svg',  alt: 'Gulf Air'          },
  { src: '/images/airlines/turkish.svg',   alt: 'Turkish Airlines'  },
]

export default function AirlinePartners() {
  return (
    <div className="flex items-center w-full">
      <span className="text-[9px] font-semibold tracking-widest uppercase text-ink-heading whitespace-nowrap w-[200px] flex-shrink-0">
        Our Airline Partners
      </span>
      <div className="flex-1 flex items-center justify-between">
        {airlines.map((a) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={a.src}
            src={a.src}
            alt={a.alt}
            className="h-10 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  )
}
