import IUser from '../../../types/IUser'

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
          <p className='userFoundName'> {user.firstname} {user.lastname} </p>
          <p className='userFoundInfos'> {user.city}  </p>
        </div>
      </div>
    </li>
  )
}

export default UserFoundItem