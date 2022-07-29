import React from 'react';

interface ContactProps {
    firstName : string;
    lastName : string;

}


const Contact: React.FC<ContactProps>= ({firstName, lastName}) => {
  return (
    <>
        <div> 
           
        {firstName} {lastName} 
    </div>

       
    </>
 
  )
}

export default Contact;



// // Exemple quand c'est optionnel
// interface ContactProps {
//     name?:string
// }


// const Contact: React.FC<ContactProps>= ({name}) => {
//   return (
//     <>
//     {name && (
//         <div> 
//         {name}
//     </div>
//     )}
       
//     </>
 
//   )
// }






