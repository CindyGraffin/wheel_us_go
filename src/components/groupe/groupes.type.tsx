export type Users = {
    id : number;
    groups : Groups,
   
}

export type  Groups = {
    name: string,
      users: string,
      groupImg: string,
}















// import React from "react";
// import "./groupes.css";

// interface GroupesProps {
//     id: number;
//     firstName: string;
//     lastName: string;
//     groups: {
//             name: string;
//             users: string;
//             groupImg: string;
// }
// }

// const Groupes : React.FC<GroupesProps>= ({id, groups}) => {
//     return (
//         <>
//         <div>
//         <p> {id} {groups.name} {groups.users} </p>
//         <img src={groups.groupImg} alt="" />
//         </div>
//         </>
//     )
// }

// export default Groupes;





