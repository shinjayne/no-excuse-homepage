import { Metadata } from 'next'
import ogImage from '@/app/og-exhibition.png'
import Link from 'next/link'

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
      <div
        style={{
          width: '100%',
          // marginTop: '-0.5vw',
          position: 'fixed',
          top: '-0.5vw',
        }}
        className={'flex flex-col items-center justify-start'}
      >
        <img src={'/assets/noex2_black.png'} style={{ width: '95vw' }} />
        <div className={'flex justify-center gap-44 mt-8 '}>
          <Link href={'/exhibition/shop'} className={'text-[16px]'}>
            SHOP
          </Link>
          <Link
            href={'https://instagram.com/no__ex2'}
            className={'text-[16px]'}
          >
            INSTAGRAM
          </Link>
          <Link href={'/archive/project01'} className={'text-[16px]'}>
            ARCHIVE CENTER
          </Link>
        </div>
      </div>
      {/*  top bar end */}

      {/* body start */}
      <div
        className={
          'flex flex-col justify-center sm:justify-end w-full h-screen '
        }
      >
        <img src={'/exhibition/photos/DSC04559.jpg'} className={'w-full '} />
        {/*<div*/}
        {/*  style={{*/}
        {/*    width: '100%',*/}
        {/*    height: '70vh',*/}
        {/*    backgroundImage: 'url("/exhibition/photos/DSC04559.jpg")',*/}
        {/*    backgroundSize: 'cover',*/}
        {/*    backgroundPosition: 'center',*/}
        {/*  }}*/}
        {/*></div>*/}
      </div>
    </>
  )
}
