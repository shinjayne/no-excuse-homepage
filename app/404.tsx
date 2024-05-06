import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function Custom404() {
  useEffect(() => {
    if (window.location.hostname === 'showroom.no-excuse.shop') {
      redirect('https://sixshop.com/no-excuse' + window.location.pathname)
    }
  })
  
  return <h1>404 - Page Not Found</h1>
}