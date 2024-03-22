export type MenuItem = {
  title: string
  link: string
  imageUrl: string
}

export const SELECT : MenuItem = {
  title : 'Shop/Select',
  link : 'https://www.sixshop.com/no-excuse/select',
  imageUrl : '/post/theme5.jpg'
}

export const EXHIBITION :  MenuItem = {
  title: 'Shop/Exhibition',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : '/post/theme1.jpeg'
}
export const BRAINSTORMING :  MenuItem = {
  title: 'Brainstorming',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : '/post/theme6.jpg'
}

export const FAQ :  MenuItem = {
  title: 'FAQ',
  link : 'https://www.sixshop.com/no-excuse/exhibition',
  imageUrl : ''
}


const MenuList: MenuItem[] = [
  SELECT,
  EXHIBITION,
  BRAINSTORMING,
  FAQ
]

export default MenuList
