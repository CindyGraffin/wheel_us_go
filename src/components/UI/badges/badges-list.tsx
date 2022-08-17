import React from 'react'
import BadgeItem from './badge-item'
import './badges.css'

const BadgesList = () => {
  return (
    <div>
        <h2>Liste des badges</h2>
        <div className='badges_container'>
            <ul>
                <BadgeItem/>
            </ul>
        </div>
    </div>
  )
}

export default BadgesList