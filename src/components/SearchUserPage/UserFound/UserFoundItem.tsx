import IUser from '../../../types/IUser'

// Affichage du User type depuis la recherche (PP + prénom + nom)

interface UserFoundProps {
  userFound: IUser
}

const UserFoundItem = ({ userFound }: UserFoundProps) => {
  return (
    <li key={userFound._id}>
      <p>{userFound.userImg}</p>
      <p>{userFound.firstname}</p>
      <p>{userFound.lastname}</p>
    </li>
  )
}

export default UserFoundItem