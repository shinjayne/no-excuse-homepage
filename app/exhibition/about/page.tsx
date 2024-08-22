import { ExhibitionTopBar } from '@/app/exhibition/ExhibitionTopBar'

export default function ExhibitionAboutPage() {
  return (
    <div>
      <ExhibitionTopBar />
      <div
        className={'px-6'}
        style={{
          fontFamily: 'RobotoMono',
          letterSpacing: '0.1rem',
          paddingTop: '200px',
          fontSize: '12px',
        }}
      >
        <div>
          In the collection, we delve into the destructive elements of our
          world—shattered bullets, crumbling buildings, and fractured
          sculptures. These fragments, born from violence, war, decay, or the
          simple passage of time, represent the dual nature of human creation
          and destruction. Yet, amid this chaos, we find resilience.
          <br />
          <br />
          This collection reimagines destruction not as an end, but as a
          transformative force. The damaged elements are intricately detailed
          with a “destroyer” aesthetic, and where pieces are broken, we replace
          them with new materials, symbolizing healing and rebirth.
          <br />
          <br />
          The forces that erode the things humans build—be it through violence,
          natural disasters, or the slow erosion of time—are acknowledged and
          reinterpreted here. Accidents and mistakes also play a role, reminding
          us of the fragility and unpredictability of life.
          <br />
          <br />
          We offers a new interpretation of these destructive forces, presenting
          designs that aim to heal and preserve the intrinsic value of what
          remains, even as time passes.
          <br />
          <br />
          The jewels used in this collection symbolize the enduring qualities of
          humanity and the pure beauty that can be found in even the most
          damaged forms. Each piece reflects a commitment to maintaining the
          essence of beauty and love, even in the face of inevitable
          destruction.
        </div>
      </div>
    </div>
  )
}
