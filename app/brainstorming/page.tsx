import Redirection from '@/components/Redirection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BRAINSTORMING',
  description: 'Inspiration, background of NO,EXCUSE project',
  openGraph: {
    title: 'BRAINSTORMING',
    url: 'https://www.no-excuse.shop/brainstorming',
    description: 'Inspiration, background of NO,EXCUSE project',
  },
}

export default function Page() {
  return <Redirection link={'https://showroom.no-excuse.shop/brainstorming'} />
}
