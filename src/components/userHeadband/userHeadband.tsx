
import React, { FunctionComponent, ReactElement, useState } from 'react'
import { User } from './Models/User.type'
import { userInfo } from 'os'
import './UserHeadband.css';



type UserHeadbandProps = {
  users: User[],
  key: number
}

let userTable = require('../../db.json');

export default function UserHeadband() {
  const [userBand, setuserband] = useState<UserHeadbandProps>(userTable);

  return (
    <div>
      {userBand.users.map((user) =>
        <div key={user.mail} className='headband'>Le Bandeau profil

          <div className='headband__container'>Profile Pic
            <img className='headband-img' alt='' srcSet={user.userImg} />
            <span className=''>Premium {user.premium}</span>
          </div>
          <div className='headband-infos'>
            <span className='headband-name'> {user.firstName} & {user.lastName}</span>
            <span className='headband-location'> {user.city}</span>
          </div>
        </div>
      )}
    </div>
  )
};
