'use client'

import { useWindowSize } from '@react-hooks-library/core'

import { NextUIProvider } from '@nextui-org/react'
import MobileV2 from '@/app/mobilev2'
import DesktopV5 from '@/app/desktopv5'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const windowSize = useWindowSize()

  useEffect(() => {
    if (window.location.hostname === 'showroom.no-excuse.shop') {
      redirect('https://sixshop.com/no-excuse' + window.location.pathname)
    }
  })

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
