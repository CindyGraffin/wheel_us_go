import React from 'react'
import IUser from '../../../types/IUser'


interface noUserFoundProps {
    userSearch: string ;
    usersResearch: IUser[]
}

const NoUserFoundItem: React.FC<noUserFoundProps> = ({ userSearch, usersResearch } ) => {

    const noUserFound = () => {

        if (userSearch.length > 0 && usersResearch.length === 0) {
            return <div> No User Found Component </div>
        } else if (userSearch.length === 0) {
            return <div> Recherchez un utilisateur Component </div>
        }
    }
    return (<p className='noUserFound'> {noUserFound()} </p>)
}

export default NoUserFoundItem