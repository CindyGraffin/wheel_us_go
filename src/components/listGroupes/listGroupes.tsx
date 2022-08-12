import react, { useEffect, useState } from "react";
import {Users} from "../groupe/groupes.type"

const ListGroupes : React.FC<unknown> = () => {   
const [users, setUsers] = useState<Users[]>([]);
const fetchUsers = async () => {
        const res = await fetch("http://localhost:3001/users");
        const users = await res.json();
        setUsers(users);
        return users;
    };
    
  useEffect(() => {
    fetchUsers()
  }, []);

 return(
    <div>
        <div>  <h1> Mes Groupes </h1> </div>
       

  {users.map((user) => {
    return (
        <div > 
        

           <h3> user : {user.id} {user.firstName} </h3> 

            <> 
            {user.groups.map((group)=> {
                return (
                    <div > 
                       <img src={group.groupImg} alt="" /> 
        
                   <p>  {group.name} </p>  
                   <p> {group.users} </p>
                
                </div>
                
                )
            })};
            </>
        </div>
        
    );
  })};
  </div>);


};


export default ListGroupes;

 


// const [listes, setListes] = useState<any[]>([]);

// useEffect(()=> {
//     fetchListes().then((listes)=> {
//         setListes(listes)
//     })
// }, [])

// return(
//     <>
//     {
//         listes.map((liste)=>
//         <Groupes  key={liste} name={liste.name} users={liste.groups.users}  groupImg={liste.groups.groupImg} />
//         )}
//     </>
// )

// };

// export default GroupesListes;





