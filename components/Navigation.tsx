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

export function Navigation(props: {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <Navbar height={'2.5rem'} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify={'start'}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      <NavbarContent justify="center">
        <NavbarBrand style={{ width: '150px' }}>
          <Link href={'/'}>
            <img src={'/logo33.png'} />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          {/*<Button as={Link} color="primary" href="#" variant="flat">*/}
          {/*  Sign Up*/}
          {/*</Button>*/}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify={'end'}></NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem key={'shop'}>
          <Link color={'primary'} className="w-full" href="#">
            Exhibition
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={'about'}>
          <Link color={'primary'} className="w-full" href="#">
            Select
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem key={'notice'}>
          <Link color={'primary'} className="w-full" href="#">
            BrainStorming
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
