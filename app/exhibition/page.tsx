import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EXHIBITION',
  description: 'NO,EXCUSE Original pieces stocklist',
  openGraph: {
    title: 'EXHIBITION',
    type: 'website',
    url: 'https://www.no-excuse.shop/exhibition',
    siteName: 'NO, EXCUSE',
    description: 'NO,EXCUSE Original pieces stocklist',
  },
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/exhibition'} />
}
