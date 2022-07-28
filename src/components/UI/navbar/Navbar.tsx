import React from 'react'
import NavbarItem from '../navbar-item/NavbarItem';

type NavBarProps = {
  links: any[];
}

const Navbar = ({links}: NavBarProps) => {
  return (
    <nav>
      {
        links.map((link)=><NavbarItem href={link.href} alt={link.alt} imgUrl={link.imgUrl}></NavbarItem>)
      }
    </nav>
  )
}

export default Navbar