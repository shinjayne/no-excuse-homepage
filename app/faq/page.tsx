import Redirection from '@/components/Redirection'
import { Metadata } from 'next'
import ogImage from '@/app/opengraph-image.png'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.no-excuse.shop'),
  title: 'FAQ',
  description: 'Frequently asked question',
  openGraph: {
    title: 'FAQ',
    type: 'website',
    url: 'https://www.no-excuse.shop/faq',
    siteName: 'NO, EXCUSE',
    description: 'Frequently asked question',
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
  return <Redirection link={'https://showroom.no-excuse.shop/fqa'} />
}
