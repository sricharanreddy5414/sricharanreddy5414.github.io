export function CharacterLighting({ mobile }: { mobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.38} color="#c8c4cc" />
      <directionalLight position={[1.4, 2.2, 2.4]} intensity={2.4} color="#fff6ef" castShadow={!mobile} />
      <directionalLight position={[-2.4, 1.2, -1.2]} intensity={1.6} color="#9d1c32" />
      <directionalLight position={[0.2, 0.5, 3.2]} intensity={0.5} color="#f4f4f5" />
    </>
  )
}
