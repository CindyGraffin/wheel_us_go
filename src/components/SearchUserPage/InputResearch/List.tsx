import React from 'react'
import Data from '../../../../db.json'

interface Data {
    "id": number,
    "firstName": string,
    "lastName": string,
    "mail": string,
    "birthday": string,
    "password": string,
    "city": string,
    "userImg": string,
    "outingNumber": number,
    "tableCreations": number,
    "tablesId": string,
    "friends": string,
    "groups": string
}



const List:React.FC<unknown> = () => {

     
  return (
    <div> {
        Data.map((user:Data, []) => (
            <div key={user.id}>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
        </div>
      ))}
    </div>
  )
}

export default List