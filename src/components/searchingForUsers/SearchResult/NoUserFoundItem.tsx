import React from 'react'
import IUser from '../../../types/IUser'
import sadChicken from './../assets/sadChicken.png'
import rechercherUser from './../assets/rechercherUsers.png'
import './../assets/styles.css'


interface NoUserFoundProps {
    userSearch: string;
    usersResearch: IUser[]
}

const NoUserFoundItem: React.FC<NoUserFoundProps> = ({ userSearch, usersResearch }) => {

    return (
        <div className='noUserFound'>
            {(userSearch.length === 0) && (
                <div className='UserToSearch'>
                    <img src={rechercherUser} alt="Seek a chicken" /> <br />
                </div>
            )}
            {(userSearch.length > 0 && usersResearch.length === 0) && (
                <div className='SryNoUserFound'>
                    <img src={sadChicken} alt='Chickens Png vectors by Lovepik.com' />
                    <p>Désolé, votre poulet n'est pas encore inscrit au poulailler</p>


                </div>
            )}
        </div>
    )
}

export default NoUserFoundItem