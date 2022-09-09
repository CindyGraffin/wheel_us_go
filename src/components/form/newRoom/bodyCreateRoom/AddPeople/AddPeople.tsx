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
    </div>
  );
};

export default AddPeople;
