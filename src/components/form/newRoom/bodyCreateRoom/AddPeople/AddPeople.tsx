import React, { useState } from "react";
import { FriendsType } from "../../../../../types/Friends";
import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";
import SearchBarGuest from "../searchBarGuest/SearchBarGuest";

const AddPeople = () => {
    const options = [
        {
          pseudo: "Bouba",
        },
        {
          pseudo: "BoubaCAre",
        },
        {
          pseudo: "BoubaKAR",
        },
        {
          pseudo: "BoubaQuart",
        },
      ];
  const [friends, setFriends] = useState<FriendsType[]>(options);
  const [listFriendsSelected, setListFriendsSelected] = useState<FriendsType[]>(
    []
  );



  return (
    <div>
      <h3>Sélectionner les invités</h3>
      <SearchBarGuest friends={friends} setFriends={setFriends} />
      <h3>Personnes invitées</h3>
      <ListPeopleInvited
        listFriendsSelected={listFriendsSelected}
        setListFriendsSelected={setListFriendsSelected}
      />
    </div>
  );
};

export default AddPeople;
