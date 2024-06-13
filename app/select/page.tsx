import Redirection from '@/components/Redirection'
import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse.shop'),
  title: 'SELECT',
  description: 'Selected casual pieces stocklist',
  openGraph: {
    title: 'SELECT',
    type: 'website',
    url: 'https://www.no-excuse.shop/select',
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
  return <Redirection link={'https://www.sixshop.com/no-excuse/select'} />
}
