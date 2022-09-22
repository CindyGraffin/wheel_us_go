import React, { useEffect, useState } from 'react'
import IUser from '../../../types/IUser';
import SearchForUserService from '../../../services/SearchForUserService';
import './SearchInput.css'

interface SearchInputProps {
    value: string;
    onChange?: React.ChangeEvent<HTMLInputElement>
}

const SearchInput: React.FC<SearchInputProps> = () => {
    const [userSearch, setUserSearch] = useState("");
    const [usersResearch, setUsersResearch] = useState<IUser[]>([])

    const handleChange = (event: { currentTarget: { value: React.SetStateAction<string> } }) => {
        setUserSearch(event.currentTarget.value)
    }

    useEffect(() => {
        SearchForUserService.getUserBySearch(userSearch).then((resp) => {
            setUsersResearch(resp.data);
            console.log(resp.data)
        })
    }, [userSearch]);

    const noUserFound = () => {
        if (userSearch.length > 0 && usersResearch.length === 0) {
            return <div> No User Found </div>
        } else if (userSearch.length === 0) {
            return <div> Recherchez un utilisateur </div>
        }
    }

    return (
        <>
            <div className='SearchUserPage'>

                <form className='searchBar'>
                    <p>Recherche : <input type="search" name="titlesearch" value={userSearch} onChange={handleChange} placeholder='Recherchez sur WUG' className='searchTerm' />  </p>
                </form>

                <p className='userList'>
                    <ul>
                        {userSearch.length > 0 && usersResearch.length != 0 ? usersResearch.map((user) =>
                        (
                            <li>
                                <div className='userFoundContainer'>
                                    <img className='userFoundPP' src={user.userImg} alt="visage de l'utilisateur" />
                                    <div className='userFoundNameBox'>
                                        <p className='userFoundName'> {user.firstname} {user.lastname} </p>
                                        <p className='userFoundInfos'> {user.city} </p>
                                    </div>
                                </div>
                            </li>
                        )) : (
                            <p className='noUserFound'>
                                {noUserFound()}

                            </p>
                        )}

                    </ul>
                </p>
            </div>
        </>
    );
}
export default SearchInput