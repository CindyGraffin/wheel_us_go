import React from 'react'
import { Link } from 'react-router-dom';
import LinkTypes from '../../../router/Links.type';
import './NavbarItem.css';


const NavbarItem : React.FC<Omit<LinkTypes, "element">> = ({path, icon}) => {
  return (
    <div>
        <Link to={path}>
          <div className="navbar-item">
            <span>{icon}</span>
          </div>
        </Link>
    </div>
  )
}

export default NavbarItem