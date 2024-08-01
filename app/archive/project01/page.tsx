import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'
import Redirection from '@/components/Redirection'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse.shop'),
  title: 'BRAINSTORMING',
  description: 'Inspiration, background of NO,EXCUSE project',
  openGraph: {
    title: 'Project 01. Self-Consciousness',
    type: 'website',
    url: 'https://www.no-excuse.shop/archive/project01',
    siteName: 'NO, EXCUSE',
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
          'flex flex-col items-center justify-center bg-black text-white h-[100vh]'
        }
      >
        <div className={'mb-2 text-xl font-black'}>
          Project 01. Self-Consciousness
        </div>
        <div className={'mb-10'}>Coming Soon</div>
        <video
          style={{ width: '50%' }}
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
