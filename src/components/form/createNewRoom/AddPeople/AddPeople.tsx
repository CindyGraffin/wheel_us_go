import React, { useState } from "react";
import IUser from "../../../../types/IUser";

type AddPeopleProps = {
  friendsList: IUser[];
};

const AddPeople = ({ friendsList }: AddPeopleProps) => {
   return (
    <div>
      <h3>Sélectionner les invités</h3>
    </div>
  );
};

export default AddPeople;
