import React from 'react'
import IUser from '../../../types/IUser'


interface NoUserFoundProps {
    userSearch: string;
    usersResearch: IUser[]
}

const NoUserFoundItem: React.FC<NoUserFoundProps> = ({ userSearch, usersResearch }) => {

    return (
        <div className='noUserFound'>
            {(userSearch.length > 0 && usersResearch.length === 0) && (
                <div className='noUserFound'>Pas d'utilisateurs correspondant à la recherche </div>
            )}
            {(userSearch.length === 0) && (
                <div className='noUserFound'> Recherchez un utilisateur </div>
            )}
        </div>
    )
}

export default NoUserFoundItem