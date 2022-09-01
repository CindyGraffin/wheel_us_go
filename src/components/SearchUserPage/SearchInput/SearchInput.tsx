import React from 'react'


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
        <form action="../../form-result.php" method="post" target="_blank">
        <p>User search: <input type="text" name="titlesearch" value={userSearch} onChange={handleChange}/></p>
        <p> <input type="submit" value="Search" /> </p>
        </form>

          <button onClick={resetForm}>Clear input field</button>
        </>
            );
}

export default SearchInput

// class SearchInput extends React.Component {

//     constructor(props : any) {

//       super(props);
//       this.state = {value: ''}  ;
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event :any) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event :any) {
//         /* Affichage du résultat de la recherche à intégrer */
//       alert('Le nom a été soumis : ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Recherche :
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   }