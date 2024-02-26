export default function Space({ x = 0, y = 0 }: { x?: number; y?: number }) {
  return <div style={{minWidth: x, minHeight: y}}></div>
}
