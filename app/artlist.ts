import { useState } from 'react'

const ArtList = [
  '/art/main1.jpeg',
  '/art/main2.jpeg',
  '/art/main3.jpeg',
  '/art/main4.jpeg',
  '/art/main5.jpeg',
  '/art/main6.png',
  '/art/main7.jpeg',
  '/art/main8.jpeg',
  '/art/main9.jpeg',
  '/art/main10.jpeg',
  '/art/main11.jpeg',
  '/art/main12.jpeg',
]

function pickRandomArt(): string {
  const randomIndex = Math.round(Math.random() * 100) % 12
  const result = ArtList[randomIndex]
  console.log(`pickRandomArt : [${randomIndex}] ${result}`)
  return result
}

function usePickRandomArt(): [string, () => void] {
  const [currentArt, setCurrentArt] = useState(pickRandomArt())

  const changeArt = () => {
    setCurrentArt(pickRandomArt())
  }

  return [currentArt, changeArt]
}

export default usePickRandomArt
