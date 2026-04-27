export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items]
  return (
    <div className="marquee no-print" aria-hidden="true">
      <div className="marquee__track">
        <span>
          {loop.map((item, i) => (
            <span key={i}>
              {item}
              <span className="marquee__sep"> ✦ </span>
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
