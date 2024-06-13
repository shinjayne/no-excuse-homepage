import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked question',
  openGraph: {
    title: 'FAQ',
    type: 'website',
    url: 'https://www.no-excuse.shop/faq',
    siteName: 'NO, EXCUSE',
    description: 'Frequently asked question',
  },
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/fqa'} />
}
