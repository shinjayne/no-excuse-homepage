'use client'

import { useWindowSize } from '@react-hooks-library/core'
import MobileHome from '@/app/mobile'

import { NextUIProvider } from '@nextui-org/react'
import DesktopV2 from '@/app/desktopv2'

export default function Home() {
  const windowSize = useWindowSize()

  if (windowSize.width > 640) {
    console.log('desktop loaded')
    return (
      <NextUIProvider>
        <DesktopV2 />
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
