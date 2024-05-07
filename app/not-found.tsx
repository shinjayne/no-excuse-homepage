'use client'

import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function NotFound() {
  useEffect(() => {
    if (window.location.hostname === 'showroom.no-excuse.shop') {
      redirect('https://sixshop.com/no-excuse' + window.location.pathname)
    }
  })

  return (
    <div
      className={
        'flex h-screen w-screen justify-center items-center bg-black text-[#C60000]'
      }
    >
      Not Found
    </div>
  )
}