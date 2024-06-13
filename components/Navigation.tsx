'use client'

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { NavbarBrand } from '@nextui-org/navbar'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuList from '@/app/menu'

function MenuItem({link, text} : {link: string, text: string}) {
  return (
    <Link className={'text-lg font-medium'}
      style={{
        // textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
        color: 'white',
        textTransform: 'uppercase',
      }}
      href={link}
    >
      {text}
    </Link>
  )
}

export function Navigation(props: {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div
      className={
        'fixed z-50 w-full flex flex-col justify-center items-center pt-12 h-[80vh]'
      }
    >
      <img src={'/redlogo.svg'} className={'lg:max-w-[22vw] w-[70vw]'} />
      <div
        className={'flex flex-col items-center justify-center gap-4 pt-12'}
        style={
          {
            // filter: 'invert(1)',
            // mixBlendMode: 'difference'
          }
        }
      >
        {MenuList.map(menu => {
          return (
            <MenuItem link={menu.link} key={menu.link} text={menu.title} />
          )
        })}
      </div>
    </div>
    // <Navbar height={'4rem'} onMenuOpenChange={setIsMenuOpen}>
    //   <NavbarContent justify={'start'}>
    //     <NavbarMenuToggle
    //
    //       aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    //     />
    //   </NavbarContent>
    //   <NavbarContent justify="center">
    //     <NavbarBrand style={{ width: '150px' }}>
    //       <Link href={'/'}>
    //         <img src={'/logo33.png'} />
    //       </Link>
    //     </NavbarBrand>
    //     <NavbarItem>
    //       {/*<Button as={Link} color="primary" href="#" variant="flat">*/}
    //       {/*  Sign Up*/}
    //       {/*</Button>*/}
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify={'end'}></NavbarContent>
    //   <NavbarMenu>
    //     {MenuList.map((menuItem) => (
    //       <NavbarMenuItem key={menuItem.title}>
    //         <Link color={'primary'} className="w-full" href={menuItem.link}>
    //           {menuItem.title}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    // </Navbar>
  )
}
