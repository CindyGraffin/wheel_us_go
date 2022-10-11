import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import { IoPersonAdd, GiChicken } from '../../../../icons/index'
import { userService } from '../../../../services/userService';
import IUser from '../../../../types/IUser';


type UserItemProps = {
  friend: IUser

}

const FriendRequest: React.FC<UserItemProps> = ({ friend }) => {

  const [friendRequest, setFriendRequest] = useState<string>('');


  const { state } = useContext(AuthContext);
  const userAuth = state.user?._id;


  const addFriend = async () => {
    await setFriendRequest(friend._id)
    console.log(friendRequest)
  }

  const getFriends = async (userAuth: string) => {
    await userService.getFriendsByUserId(userAuth)
  }

  const [isFriend, setIsFriend] = useState<boolean>();

  const verifyIfIsFriend = userService
    .getFriendsByUserId(state.user?._id as string)
    .then((res) => {
      setIsFriend(
        friendService.getIsFriend(res.data.friendsId, userId as string)
      );
    });
    
  getIsFriend = (data: IUser[], currentUser: string) => {
    return data.map((friend: any) => friend._id).includes(currentUser);
  };







  return (
    <>
      <button id='addButton' onClick={() => addFriend()} > Follow
        <span id='addIcon' className='buttonIcon'> <IoPersonAdd /> </span>
      </button>
      {/* <button id='addButton' onClick={() => deleteFriend()} > Follow
        <span id='friendsIcon' className='buttonIcon'>  <GiChicken /></span>
      </button> */}



    </>

  )
}
export default FriendRequest