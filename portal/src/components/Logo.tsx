export function Logo() {
  return (
    <span className="text-xl font-bold tracking-tight text-navy">
      <span
        className="inline-block w-5 h-5 bg-navy mr-1.5 align-middle"
        style={{
          clipPath:
            'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
        }}
      />
      GameForge
    </span>
  )
}
