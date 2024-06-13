'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  link: string
}

export default function Redirection({ link }: Props) {
  const { replace } = useRouter()

  useEffect(() => {
    replace(link)
  }, [])

  return (
    <div
      className={
        'w-screen h-screen bg-black text-white flex items-center justify-center'
      }
    >
      <h1>REDIRECTING...</h1>
    </div>
  )
}
