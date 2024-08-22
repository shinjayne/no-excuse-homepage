import { Metadata } from 'next'
import ogImage from '@/app/og-exhibition.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse-archive.com'),
  title: 'NO,EXCUSE EXHIBITION',
  description: 'NO,EXCUSE EXHIBITION',
  openGraph: {
    title: 'NO,EXCUSE EXHIBITION',
    type: 'website',
    url: 'https://www.no-excuse-archive.com/exhibition',
    siteName: 'NO, EXCUSE',
    description: 'NO,EXCUSE Original pieces',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: 'NO, EXCUSE EXHIBITION',
      },
    ],
  },
}

export default function Page() {
  return (
    <>
      <div
        style={{ width: '100%', marginTop: '-0.5vw' }}
        className={'flex flex-row justify-center'}
      >
        <img src={'/assets/noex2_black.png'} style={{ width: '95vw' }} />
      </div>
    </>
  )
}
