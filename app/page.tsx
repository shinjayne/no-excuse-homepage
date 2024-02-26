'use client'

import { useWindowSize } from '@react-hooks-library/core'
import DesktopHome from '@/app/desktop'
import MobileHome from '@/app/mobile'

import { NextUIProvider } from '@nextui-org/react'

export default function Home() {
  const windowSize = useWindowSize()

  if (windowSize.width > 640) {
    console.log('desktop loaded')
    return (
      <NextUIProvider>
        <DesktopHome />
      </NextUIProvider>
    )
  } else {
    console.log('mobile loaded')
    return (
      <NextUIProvider>
        <MobileHome />
      </NextUIProvider>
    )
  }
}
