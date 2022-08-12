import react, { useEffect, useState } from "react";
import {Users} from "../groupe/groupes.type"

const listGroupes : React.FC<unknown> = () => {   

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
  {users.map((user) => {
    return (
        <div>

            {user.id}

            <>
            {user.groups.map((group)=> {
                return <div> {group.name} </div>;
            })}
            </>
        </div>
        
    );
  })}
  </div>)
};


export default listGroupes;

 
 


  















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





