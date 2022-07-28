import React from 'react'
import NavbarItem from '../navbar-item/NavbarItem';

type NavBarProps = {
  links: any[];
}

const Navbar = ({links}: NavBarProps) => {
  return (
    <nav>
      {
        links.map((link)=><NavbarItem key={link.key} path={link.path} icon={link.icon}></NavbarItem>)
      }
    </nav>
  )
}

export default Navbar