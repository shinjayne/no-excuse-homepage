import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SELECT',
  description: 'Selected casual pieces stocklist',
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/select'} />
}
