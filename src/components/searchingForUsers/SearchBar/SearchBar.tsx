import React, { ChangeEventHandler } from 'react'

interface SearchBarProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    userSearch: string
}


const SearchBar: React.FC<SearchBarProps> = ({handleChange, userSearch}) => {

    return (
        <form className='searchBar'>
                    <p>Recherche :&nbsp; 
                        <input
                            type="search"
                            name="titlesearch"
                            value={userSearch}
                            onChange={handleChange}
                            placeholder='Rechercher sur Wheel Us Go'
                            className='searchTerm' />
                    </p>
                </form> 
    )
}

export default SearchBar