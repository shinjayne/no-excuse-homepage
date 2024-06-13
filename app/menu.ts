export type MenuItem = {
  title: string
  link: string
  imageUrl: string
}

export const SELECT : MenuItem = {
  title : 'Shop/Select',
  link : 'https://showroom.no-excuse.shop/select',
  imageUrl : '/cuts/mp_m.jpg'
}

export const EXHIBITION :  MenuItem = {
  title: 'Shop/Exhibition',
  link : 'https://showroom.no-excuse.shop/exhibition',
  imageUrl : '/cuts/IMG_3736.jpg'
}
export const INSTAGRAM :  MenuItem = {
  title: 'Instagram',
  link : 'https://instagram.com/noexcuse_archive',
  imageUrl : '/brainstorming.jpeg'
}

export const BRAINSTORMING :  MenuItem = {
  title: 'Brainstorming',
  link : 'https://showroom.no-excuse.shop/brainstorming',
  imageUrl : '/brainstorming.jpeg'
}

export const FAQ :  MenuItem = {
  title: 'FAQ',
  link : 'https://showroom.no-excuse.shop/faq',
  imageUrl : '/cuts/IMG_3736.jpg'
}

export type StandingModelMenu = {
  imageUrl : string
  link : string
}

export const StandingModelMenuList: StandingModelMenu[] = [
  {
    imageUrl : '/standing/standing001.png',
    link : ''
  }
]


const MenuList: MenuItem[] = [
  SELECT,
  EXHIBITION,
  INSTAGRAM,
  BRAINSTORMING,
  FAQ
]

export default MenuList
