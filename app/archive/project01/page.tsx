import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'
import Link from 'next/link'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse-archive.com'),
  title: 'ARCHIVE CENTER',
  description: 'Inspiration, background of NO,EXCUSE project',
  openGraph: {
    title: 'Project 01. Self-Consciousness',
    type: 'website',
    url: 'https://www.no-excuse-archive.com/archive/project01',
    siteName: 'NO, EXCUSE ARCHIVE CENTER',
    description: 'Project 01. Self-Consciousness',
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

export default function Page() {
  return (
    <>
      <div
        className={
          'flex flex-col items-center justify-center bg-black text-white pt-4 pb-60'
        }
      >
        <img
          src={'/assets/arch-logo.svg'}
          alt={'no,excuse'}
          className={'w-[80px] invert brightness-0 mb-2'}
        />
        <div className={'mb-10 text-small font-medium'}>
          Project 01. Self-Consciousness
        </div>
        <div className={'mb-10 text-[12px] font-light'}>
          Opens in few days. Follow our instagram to get noticed!
        </div>
        <Link
          className={'mb-4 text-xs text-[#C60000] cursor-pointer'}
          href={'https://instagram.com/noexcuse_archive'}
        >
          Go Instagram
        </Link>
        <Link
          className={'mb-10 text-xs text-[#C60000] cursor-pointer'}
          href={'/'}
        >
          Go Website
        </Link>

        <video
          style={{ width: '70%' }}
          className="media-video__video"
          poster="/project01/preview_poster.PNG"
          autoPlay={true}
          playsInline={true}
          loop={true}
          muted={true}
          controls={false}
        >
          <img
            className="media-video__poster"
            src="/project01/preview_poster.PNG"
            alt=""
          />
          <source type="video/mp4" src="/project01/preview.mp4" />
        </video>
      </div>
    </>
  )
}
