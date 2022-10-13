import IUser from '../../../types/IUser'
import { GoLocation } from '../../../icons/index'

// import FriendRequest from '../friendRequest/FriendRequest'
// import { userService } from '../../../services/userService'
// import { useState } from 'react'
// import { friendService } from '../../../services/friendService'
// import useFetch from '../../../hooks/useFetch'
// import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// Affichage du User type depuis la recherche (PP + prénom + nom + Ville)

type UserItemProps = {
  contact: IUser
  currentUser: IUser
}


const UserFoundItem: React.FC<UserItemProps> = ({ contact, currentUser }) => {

  // const { userId } = useParams();
  // const { data: user, reFetch } = useFetch(`/users/${userId}`);

  // const [isFriend, setIsFriend] = useState<boolean>();


  // const verifyIfIsFriend = userService
  //   .getFriendsByUserId(currentUser?._id as string)
  //   .then((res) => {
  //     setIsFriend(
  //       friendService.getIsFriend(res.data.friendsId, contact._id as string)
  //     );
  //   });


  // const addFriend = async (
  //   userId: string,
  //   friendId: string
  // ): Promise<void> => {
  //   await friendService.addFriend(userId, friendId);
  // };

  // const removeFriend = async (
  //   userId: string,
  //   friendId: string
  // ): Promise<void> => {
  //   await friendService.delete(userId, friendId);
  // };





  return (
    <li>
      <div className='userFoundContainer'>
        <NavLink to={`/profile/${contact._id}`}>
          <img className='userFoundPP' src={contact.userImg} alt="visage de l'utilisateur" />
        </NavLink>
        
        <div className='userFoundNameBox'>
          <NavLink to={`/profile/${contact._id}`}>
            <div className='userFoundName'>
              {contact.firstname} {contact.lastname}
            </div>
          </NavLink>

          {/*  */}
          {/* <span>
            &nbsp; <FriendRequest
              isFriend={isFriend as boolean}
              addFriend={addFriend(currentUser._id as string, contact._id)}
              removeFriend={removeFriend(currentUser._id as string, contact._id)} />
          </span> */}

          <div className='userFoundInfos'>
            <GoLocation />&nbsp; {contact.city}
          </div>

        </div>
      </div>

    </li >
  )
}

export default UserFoundItem