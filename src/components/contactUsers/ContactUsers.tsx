import React, { useEffect, useState } from "react";
import Contact from "../contact/contact";

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
    <>
      {/* <div>
        {" "}
        <Contact
          imgUrl="https://media-exp1.licdn.com/dms/image/C4E03AQGb3iwz2AsiqQ/profile-displayphoto-shrink_800_800/0/1634560045829?e=1664409600&v=beta&t=fIfVwYPtkMUFQ_zF2e-DPuNN6uAOqGYesr-mOl149lw"
          firstName="Cindy"
          lastName="Graffin"
        />{" "}
      </div>
      <div>
        {" "}
        <Contact
          imgUrl="https://image-uviadeo.journaldunet.com/image/450/1861935780/225010.jpg"
          firstName="Sofian"
          lastName="Mejeddar"
        />{" "}
      </div>
      <div>
        {" "}
        <Contact
          imgUrl="https://media-exp1.licdn.com/dms/image/C4D03AQEgomI9T6Ch4Q/profile-displayphoto-shrink_800_800/0/1603627779861?e=1664409600&v=beta&t=x6YWAER2xzxNbb77Ne3MzBWr45Yl9FnPgKTEAvxa-8s"
          firstName="Boubacar"
          lastName="Dembele"
        />{" "}
      </div>
      <div>
        {" "}
        <Contact imgUrl="" firstName="Cyriac" lastName="Leclercq" />{" "}
      </div>
      <div>
        {" "}
        <Contact imgUrl="" firstName="John" lastName="Doe" />{" "}
      </div>
      <div>
        {" "}
        <Contact imgUrl="" firstName="Camille" lastName="Delort" />{" "}
      </div>
      <div>
        {" "}
        <Contact imgUrl="" firstName="Julie" lastName="Dupont" />{" "}
      </div>
      <div>
        {" "}
        <Contact
          imgUrl="https://cdn2.boutique-jourdefete.com/imgs/8cf0827866dd5b341bf41052ec2e3a19/deguisement-homme-marquis-violet-taille-au-choix.jpg"
          firstName="Marquis"
          lastName="Defontaine"
        />{" "}
      </div>
      <div>
        {" "}
        <Contact
          imgUrl="https://media.istockphoto.com/photos/chicken-sunset-picture-id872646276?k=20&m=872646276&s=612x612&w=0&h=QBnntERnT1T1uZYbnMyVitpv4wJBXVxeSgbNqyxq9SI="
          firstName="Benoit"
          lastName="Routier"
        />{" "}
      </div>
      <div>
        {" "}
        <Contact
          imgUrl="https://media-exp1.licdn.com/dms/image/C4D03AQECL6OfV8C-Vg/profile-displayphoto-shrink_800_800/0/1652511835274?e=1664409600&v=beta&t=Vv6I1rpDRGOcoagyGQkZOjGq4w27R328g4Ywp-QRLpw"
          firstName="Anthony"
          lastName="Labesse"
        />{" "}
      </div> */}

      {users.map((user) => 
        <Contact key={user.firstname}  firstName={user.firstName} lastName={user.lastName}   />
      )}

    </>
  );
};

export default ContactUsers;
