import React, { useState } from "react";
import IUser from "../../../../../types/IUser";

type AddPeopleProps = {
  listFriends: IUser[];
};

const AddPeople = ({ listFriends }: AddPeopleProps) => {
   return (
    <div>
      <h3>Sélectionner les invités</h3>
    </div>
  );
};

export default AddPeople;
