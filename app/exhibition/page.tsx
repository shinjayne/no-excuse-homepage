import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EXHIBITION',
  description: 'NO,EXCUSE Original pieces stocklist',
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/exhibition'} />
}
