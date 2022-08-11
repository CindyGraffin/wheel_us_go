import React from 'react';
import "./contact.css";

interface ContactProps {
    firstName : string;
    lastName : string;
    userImg : string;
}


const Contact: React.FC<ContactProps>= ({firstName, lastName, userImg}) => {
  return (
    <>
        <div> 
          <p>  {firstName} {lastName}  </p> 
          <img src={userImg} alt="" />      
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






