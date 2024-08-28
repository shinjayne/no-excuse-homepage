'use client'

import { useWindowSize } from '@react-hooks-library/core'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import NewHomeDesktop from '@/app/newhome_desktop'

export default function Home() {
  const windowSize = useWindowSize()

  useEffect(() => {
    if (
      window.location.hostname === 'showroom.no-excuse.shop' ||
      window.location.hostname === 'showroom.no-excuse-archive.com'
    ) {
      redirect('https://no9excuse.com' + window.location.pathname)
    }
  })

  return <NewHomeDesktop />
  // if (windowSize.width > 640) {
  //   console.log('desktop loaded')
  //   return (
  //     <NextUIProvider>
  //       <Desktop />
  //     </NextUIProvider>
  //   )
  // } else {
  //   console.log('mobile loaded')
  //   return (
  //     <NextUIProvider>
  //       <Mobile />
  //     </NextUIProvider>
  //   )
  // }
}
