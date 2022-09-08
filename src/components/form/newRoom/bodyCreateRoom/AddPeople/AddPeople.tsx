import React, { useState } from "react";
import IUser from "../../../../../types/IUser";
//import ListPeopleInvited from "../ListPeopleInvited/ListPeopleInvited";
import SearchBarGuest from "../searchBarGuest/SearchBarGuest";

type AddPeopleProps = {
  listFriends: IUser[];
};

const AddPeople = ({ listFriends }: AddPeopleProps) => {
  return (
    <div>
      <h3>Sélectionner les invités</h3>
      <SearchBarGuest friends={listFriends} />
      <h3>Personnes invitées</h3>
    </div>
  );
};

export default AddPeople;
