import { group } from "console";
import { useEffect, useState } from "react";
import {Users} from "../groupe/groupes.type"

const GroupesListes = () => {
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3001/users");
    const users = await res.json();
    return users;
  }

  const [users, setUsers] = useState<Users[]>([]);

  console.log(users);
  

  useEffect(() => {
    fetchUsers().then((users) => {
        setUsers(users)
    })
  }, [users])

  return (
    <div>
      <h2>Liste d'utilisateurs</h2>

      {/* {users.map((user) => (
        // <Users user={user} key={user.id} />
        <div>
            {user.groups.name}
            {console.log(user)
            }
            
            
        </div>
      ))} */}



    </div>
  );
};

export default GroupesListes;














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





