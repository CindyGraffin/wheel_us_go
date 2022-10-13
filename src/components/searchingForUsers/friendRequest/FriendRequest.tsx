import { Button } from '../../UI';
import React from 'react'
// import { useParams } from 'react-router-dom';
// import useFetch from '../../../../hooks/useFetch';
// import  { useContext, useState } from 'react'
// import { AuthContext } from '../../../../context/AuthContext';
// import { friendService } from '../../../../services/friendService';
// import { userService } from '../../../../services/userService';
// import IUser from '../../../../types/IUser';


interface FriendRequestProps {
  addFriend:Promise<void>;
  removeFriend:Promise<void>;
  isFriend: boolean
}


const FriendRequest: React.FC<FriendRequestProps> = ({addFriend, removeFriend, isFriend}) => {
// const { userId } = useParams();
// const { data: user, reFetch } = useFetch(`/users/${userId}`);



return (

<div className="addFriendsButton">
                        {!isFriend ? (
                            <Button
                                onClick={()=> addFriend}>
                                Ajouter ami 
                            </Button>
                        ) : (
                            <Button
                                color="black_red"
                                onClick={()=> removeFriend}
                            >
                                Delete
                            </Button>
                        )}
                    </div>
)
}
export default FriendRequest









  