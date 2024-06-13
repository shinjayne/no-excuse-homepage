import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import ogImage from './opengraph-image.png'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NO, EXCUSE',
  description: 'NO, EXCUSE',
  openGraph: {
    title: 'NO, EXCUSE',
    type: 'website',
    url: 'https://www.no-excuse.shop',
    siteName: 'NO, EXCUSE',
    description: 'DARE TO STAND OUT. NO,EXCUSE',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: 'NO, EXCUSE',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="naver-site-verification"
          content="277c753d354cbf1917220136bb1cd5e6a851fb03"
        />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
