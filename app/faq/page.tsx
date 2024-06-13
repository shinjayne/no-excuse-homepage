import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked question',
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/fqa'} />
}
