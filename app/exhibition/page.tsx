import { Metadata } from 'next'
import ogImage from '@/app/og-exhibition.png'
import { ExhibitionTopBar } from '@/app/exhibition/ExhibitionTopBar'

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
      {/* top bar start */}
      <ExhibitionTopBar />
      {/*  top bar end */}

      {/* body start */}
      <div
        className={
          'flex flex-col justify-center sm:justify-end w-full h-screen '
        }
      >
        <img src={'/exhibition/photos/DSC04559.jpg'} className={'w-full '} />
      </div>
    </>
  )
}
