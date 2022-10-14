import React, { useContext, useEffect, useState } from 'react'
import IUser from './../../types/IUser';
import SearchForUserService from '../../services/SearchForUserService';
import UserFoundItem from './SearchResult/UserFoundItem';
import NoUserFoundItem from './SearchResult/NoUserFoundItem';
import SearchBar from './SearchBar/SearchBar';
import { AuthContext } from '../../context/AuthContext';


const SearchingForUsersComponent: React.FC<unknown> = () => {
    const [userSearch, setUserSearch] = useState<string>("");
    const [usersResearch, setUsersResearch] = useState<IUser[]>([])
    const { state } = useContext(AuthContext);


    const handleChange = (event: { currentTarget: { value: React.SetStateAction<string> } }) => {
        setUserSearch(event.currentTarget.value)
    }

    // Appel de la recherche via la SearchBar
    useEffect(() => {
        SearchForUserService.getUserBySearch(userSearch).then((resp) => {
            setUsersResearch(resp.data);
        })
    }, [userSearch]);


    return (
            <div className='SearchUserPage'>
                <SearchBar handleChange={handleChange} userSearch={userSearch} />                

                {/* Résultat de la recherche : UserFoundItem & NoUserFound */}
                <div className='userList'>
                    <ul>
                        {userSearch.length > 0 && usersResearch.length !== 0 ?
                            (usersResearch.map((user, key) => <UserFoundItem contact={user} key={key} currentUser={state.user as IUser} />)) :
                            <NoUserFoundItem userSearch={userSearch} usersResearch={usersResearch} />}
                    </ul>
                </div>
            </div>
    );
}



export default SearchingForUsersComponent 