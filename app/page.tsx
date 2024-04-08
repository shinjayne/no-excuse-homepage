'use client'

import { useWindowSize } from '@react-hooks-library/core'

import { NextUIProvider } from '@nextui-org/react'
import DesktopV3 from '@/app/desktopv3'
import MobileV2 from '@/app/mobilev2'
import DesktopV4 from '@/app/desktopv4'
import DesktopV5 from '@/app/desktopv5'

export default function Home() {
  const windowSize = useWindowSize()

  if (windowSize.width > 640) {
    console.log('desktop loaded')
    return (
      <NextUIProvider>
        <DesktopV5 />
      </NextUIProvider>
    )
  } else {
    console.log('mobile loaded')
    return (
      <NextUIProvider>
        <MobileV2 />
      </NextUIProvider>
    )
  }
}
