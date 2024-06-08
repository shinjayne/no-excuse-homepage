export type MenuItem = {
  title: string
  link: string
  imageUrl: string
}

export const SIX_SHOP_LINKS = {
  SELECT: 'https://showroom.no-excuse.shop/select',
  EXHIBITION: 'https://showroom.no-excuse.shop/exhibition',
  BRAINSTORMING: 'https://showroom.no-excuse.shop/brainstorming',
  FAQ: 'https://showroom.no-excuse.shop/faq',
}

export const SELECT: MenuItem = {
  title: 'Shop/Page',
  link: '/select',
  imageUrl: '/cuts/mp_m.jpg',
}

export const EXHIBITION: MenuItem = {
  title: 'Shop/Exhibition',
  link: '/exhibition',
  imageUrl: '/cuts/IMG_3736.jpg',
}
export const INSTAGRAM: MenuItem = {
  title: 'Instagram',
  link: 'https://instagram.com/noexcuse_archive',
  imageUrl: '/brainstorming.jpeg',
}

export const BRAINSTORMING: MenuItem = {
  title: 'Brainstorming',
  link: '/brainstorming',
  imageUrl: '/brainstorming.jpeg',
}

export const FAQ: MenuItem = {
  title: 'FAQ',
  link: '/faq',
  imageUrl: '/cuts/IMG_3736.jpg',
}

export type StandingModelMenu = {
  imageUrl: string
  link: string
}

export const StandingModelMenuList: StandingModelMenu[] = [
  {
    imageUrl: '/standing/standing001.png',
    link: '',
  },
]

const MenuList: MenuItem[] = [SELECT, EXHIBITION, INSTAGRAM, BRAINSTORMING, FAQ]

export default MenuList
