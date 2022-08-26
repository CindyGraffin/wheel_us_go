import React from 'react'
import List from '../InputResearch/List';



interface SearchInputProps {
	value: string;
    onChange?: React.ChangeEvent<HTMLInputElement>
}

const SearchInput:React.FC<SearchInputProps> = () => {

        const [userSearch, setUserSearch] = React.useState(
            ""
        );
        
        const handleChange = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
            setUserSearch(event.currentTarget.value);
        };

        const resetForm = (event: { currentTarget: { value: React.SetStateAction<string>; }; }) => {
            setUserSearch("");    
        };

      return (
          <>
        <form action="../../form-result.php" method="get" target="_blank" >
        <p>User search: <input type="search" name="titlesearch" value={userSearch} onChange={handleChange} placeholder='Recherchez un User' /> </p>
     
        <p> <input  type="submit" value="Search"  /> </p>
        </form>

        <button onClick={resetForm}>Clear input field</button>
        
        <br />
        {/* <List/> */}


        </>
            );
}
export default SearchInput