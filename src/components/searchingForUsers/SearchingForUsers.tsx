import './SearchingForUsers.css'
import React, { useEffect, useState } from 'react'
import IUser from './../../types/IUser';
import SearchForUserService from '../../services/SearchForUserService';
import UserFoundItem from './SearchResult/UserFoundItem';
import NoUserFoundItem from './SearchResult/NoUserFoundItem';
import SearchBar from './SearchBar/SearchBar';


const SearchingForUsersComponent: React.FC<unknown> = () => {
    const [userSearch, setUserSearch] = useState<string>("");
    const [usersResearch, setUsersResearch] = useState<IUser[]>([])


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
        <>
            <div className='SearchUserPage'>
                {/* Barre de recherche  */}
                <SearchBar handleChange={handleChange} userSearch={userSearch} />

                {/* Résultat de la recherche : UserFoundItem & NoUserFound() */}
                <p className='userList'>
                    <ul>
                        {userSearch.length > 0 && usersResearch.length != 0 ?
                            (usersResearch.map((user) => <UserFoundItem user={user} key={user._id} />)) :
                            // (<p className='noUserFound'> {noUserFound()} </p>)}
                            <NoUserFoundItem userSearch={userSearch} usersResearch={usersResearch} />}
                    </ul>
                </p>
            </div>
        </>
    );
}



export default SearchingForUsersComponent 