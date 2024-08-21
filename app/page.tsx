'use client'

import { useWindowSize } from '@react-hooks-library/core'

import { NextUIProvider } from '@nextui-org/react'
import Mobile from '@/app/mobile'
import Desktop from '@/app/desktop'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const windowSize = useWindowSize()

  useEffect(() => {
    if (
      window.location.hostname === 'showroom.no-excuse.shop' ||
      window.location.hostname === 'showroom.no-excuse-archive.com'
    ) {
      redirect('https://sixshop.com/no-excuse' + window.location.pathname)
    }
  })

  if (windowSize.width > 640) {
    console.log('desktop loaded')
    return (
      <NextUIProvider>
        <Desktop />
      </NextUIProvider>
    )
  } else {
    console.log('mobile loaded')
    return (
      <NextUIProvider>
        <Mobile />
      </NextUIProvider>
    )
  }
}
