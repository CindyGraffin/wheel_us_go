import React, { useEffect, useState } from "react";
import Contact from "../contact/contact";
import "./contactUsers.css"

const ContactUsers = () => {
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();
    return users;
  };

  const [users, setUsers] = useState<any[]>([]);
  
  useEffect(() => {
    fetchUsers().then((users)=> {
        setUsers(users)
    })   
  }, [])
   

  console.log(users);
  return (

    <div>
      <div> <h1> Mes Contacts </h1> </div>
    <>
      {users.map((user) => 
        <Contact key={user.firstname}  firstName={user.firstName} lastName={user.lastName}  userImg={user.userImg} />
      )}

    </>

        <div className="button" > <button> + </button> </div>

    </div>
  );
  
};


export default ContactUsers;
