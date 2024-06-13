import Redirection from '@/components/Redirection'
import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse.shop'),
  title: 'EXHIBITION',
  description: 'NO,EXCUSE Original pieces stocklist',
  openGraph: {
    title: 'EXHIBITION',
    type: 'website',
    url: 'https://www.no-excuse.shop/exhibition',
    siteName: 'NO, EXCUSE',
    description: 'NO,EXCUSE Original pieces stocklist',
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
  return <Redirection link={'https://showroom.no-excuse.shop/exhibition'} />
}
