import React from 'react'
import { Link } from 'react-router-dom';
import LinkTypes from '../../../router/Links.type';


const NavbarItem : React.FC<Omit<LinkTypes, "element">> = ({href, imgUrl, alt}) => {
  return (
    <span>
        <Link to={href}>
          <div className="navbar-item">
            <img src={imgUrl} alt={alt} />
          </div>
        </Link>
    </span>
  )
}

export default NavbarItem