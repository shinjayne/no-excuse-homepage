export type MenuItem = {
  title: string
  link: string
  imageUrl: string
}

export const SELECT : MenuItem = {
  title : 'Shop/Select',
  link : 'https://www.sixshop.com/no-excuse/select',
  imageUrl : '/cuts/sturd_jacket_full_001.jpg'
}

export const EXHIBITION :  MenuItem = {
  title: 'Shop/Exhibition',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : '/cuts/biker_pants_001.jpg'
}
export const BRAINSTORMING :  MenuItem = {
  title: 'Brainstorming',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : '/kanye.JPG'
}

export const FAQ :  MenuItem = {
  title: 'FAQ',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : ''
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
  BRAINSTORMING,
  FAQ
]

export default MenuList
