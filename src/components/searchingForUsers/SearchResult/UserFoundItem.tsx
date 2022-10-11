import IUser from '../../../types/IUser'
import { GoLocation } from '../../../icons/index'

import FriendRequest from '../inputs/friendRequest/FriendRequest'

// Affichage du User type depuis la recherche (PP + prénom + nom + Ville)

type UserItemProps = {
  user: IUser
}


const UserFoundItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <li>
      <div className='userFoundContainer'>
        <img className='userFoundPP' src={user.userImg} alt="visage de l'utilisateur" />

        <div className='userFoundNameBox'>
          <div className='userFoundName'> {user.firstname} {user.lastname} 
            <span>
            &nbsp; <FriendRequest friend={user} />
            
            </span>
          </div>


          <p className='userFoundInfos'> <GoLocation />&nbsp; {user.city}  </p>

        </div>
      </div>
    </li>
  )
}

export default UserFoundItem