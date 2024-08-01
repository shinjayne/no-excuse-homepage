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
  return <>project 01. Self-Consciousness</>
}
