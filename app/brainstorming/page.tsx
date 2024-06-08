import { SIX_SHOP_LINKS } from '@/app/menu'
import { permanentRedirect } from 'next/navigation'

export default async function Page() {
  permanentRedirect(SIX_SHOP_LINKS.BRAINSTORMING)
}
