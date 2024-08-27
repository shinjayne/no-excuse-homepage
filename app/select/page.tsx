import Redirection from '@/components/Redirection'
import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse-archive.com'),
  title: 'SELECT',
  description: 'Selected casual pieces stocklist',
  openGraph: {
    title: 'SELECT',
    type: 'website',
    url: 'https://www.no-excuse-archive.com/select',
    siteName: 'NO, EXCUSE',
    description: 'Selected casual pieces stocklist',
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
  return <Redirection link={'https://no9excuse.com/select'} />
}
