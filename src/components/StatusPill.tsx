export function StatusPill({ available }: { available: boolean }) {
  return (
    <span className="status-pill">
      <span
        className="status-pill__dot"
        style={available ? undefined : { background: '#a1a1aa' }}
      />
      {available ? 'Available for work' : 'Not currently looking'}
    </span>
  )
}
