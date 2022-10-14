import React from 'react'
import IUser from '../../../types/IUser'
import sadChicken from './../assets/sadChicken.png'
import rechercherUser from './../assets/rechercherUsers.png'


interface NoUserFoundProps {
    userSearch: string;
    usersResearch: IUser[]
}

const NoUserFoundItem: React.FC<NoUserFoundProps> = ({ userSearch, usersResearch }) => {

    return (
        <div className='beforeResearch'>
            {(userSearch.length === 0) && (
                <div className='beforeResearch'>
                    <img src={rechercherUser} alt="Seek a chicken" /> <br />
                </div>
            )}
            {(userSearch.length > 0 && usersResearch.length === 0) && (
                <div className='noUserFound'>
                    <img src={sadChicken} alt="Désolé, votre poulet n'est pas encore inscrit au poulailler" />
                    <p id='noUserFoundText' >Désolé, votre poulet n'est pas inscrit au poulailler</p>
                </div>
            )}
        </div>
    )
}

export default NoUserFoundItem