import React, { ChangeEventHandler } from 'react'

interface SearchBarProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
    userSearch: string
}


const SearchBar: React.FC<SearchBarProps> = ({handleChange, userSearch}) => {

    return (
        <form className='searchBar'>
                    <p>Recherche :
                        <input
                            type="search"
                            name="titlesearch"
                            value={userSearch}
                            onChange={handleChange}
                            placeholder='Recherchez sur WUG'
                            className='searchTerm' />
                    </p>
                </form> 
    )
}

export default SearchBar