import Redirection from '@/components/Redirection'
import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse-archive.com'),
  title: 'BRAINSTORMING',
  description: 'Inspiration, background of NO,EXCUSE project',
  openGraph: {
    title: 'BRAINSTORMING',
    type: 'website',
    url: 'https://www.no-excuse-archive.com/brainstorming',
    siteName: 'NO, EXCUSE',
    description: 'Inspiration, background of NO,EXCUSE project',
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
  return <Redirection link={'https://no9excuse.com/brainstorming'} />
}
