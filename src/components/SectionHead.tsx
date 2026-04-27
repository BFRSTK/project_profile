export function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="section__head">
      <span className="section__head-num">{num}</span>
      <span>{title}</span>
      <span className="section__head-rule" />
    </div>
  )
}
