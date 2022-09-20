import React, { Fragment, useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ButtonGeneric from "../../UI/boutons/ButtonGeneric";
import GuestLogo from "../../UI/LogoCreateRoom/GuestLogo";
import LogoApero from "../../UI/LogoCreateRoom/LogoApero";
import LogoCalendar from "../../UI/LogoCreateRoom/LogoCalendar";
import LogoDressCode from "../../UI/LogoCreateRoom/LogoDressCode";
import LogoLocation from "../../UI/LogoCreateRoom/LogoLocation";
import AddPeople from "./componentForm/AddPeople/AddPeople";
import { AuthContext } from "../../../context/AuthContext";
import { userService } from "../../../services/userService";
import IUser from "../../../types/IUser";
import SearchBarGuest from "./componentForm/searchBarGuest/SearchBarGuest";
import ToggleSwitch from "../../UI/ToggleSwitch/ToggleSwitch";
import './form.css'

const FormRender: React.FC<unknown> = () => {
  const [list, setList] = useState<IUser[]>([]);
  const { state } = useContext(AuthContext);
  const idUser = state.user?._id;

  useEffect(() => {
    const fetchFriendList = async () => {
      if (true) {
        const listFriends = await userService.getFriendsByUserId(idUser!);
        setList(listFriends.data.friendsId);
      } else {
        throw new Error("Id utilisateur non trouvé ! ");
      }
    };
    // appel du service qui récupère la liste d'amis dans la db
    fetchFriendList();
  }, [idUser]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ mode: "onChange" });

  const [dataRooms, setDataRooms] = useState("");
  const placeNameField = register("placeName", { required: true });
  const adressField = register("address", { required: true });
  const dateField = register("date", { required: true });
  const partIdsField = register("partsIds", { required: true });
  const aperoWheel = register("aperoWheel", { required: true });
  const dresscode = register("dresscode", { required: true });

  const [friendsIdSelected, setFriendsIdSelected] = useState<string[]>([]);
  //const [copyFriends, setCopyFriends] = useState<IUser[]>([]);

  const handleChangeSearchBarGuest = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //TODO
    const friendSelected = (e.target as HTMLSelectElement).value;
    setFriendsIdSelected([...friendsIdSelected, friendSelected]);
    setValue("partsIdField", [...friendsIdSelected, friendSelected]);
  };

  const handleAperoWheel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("aperoWheel", e.target.checked);
  };

  const handleDressCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("dresscode", e.target.checked);
  };

  const handleBackToChoice = () => {
    console.log("handleBackToChoice");
  };

  const reset = () => {
    console.log("reset");
  };

  const onSubmit = () => {
    setDataRooms(getValues)
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LogoLocation />
        <h3>Lieu : </h3>
        <input
          {...placeNameField}
          placeholder="Le nom de votre restaurant"
          type="text"
        />
        <input
          {...adressField}
          placeholder="L'adresse de votre restaurant"
          type="text"
          name="address"
        />
        <ButtonGeneric
          classname=""
          type="button"
          onClick={handleBackToChoice}
          btnText="Revenir aux choix"
        />
        <LogoCalendar />
        <h3>Date et heure : </h3>
        <input type="date" {...dateField} />
        <GuestLogo />
        <AddPeople listFriends={list} />
        <SearchBarGuest
          {...partIdsField}
          friends={list}
          friendsIdSelected={friendsIdSelected}
          onChange={handleChangeSearchBarGuest}
        />
        <h2>Options Supplémentaires</h2>
        <LogoApero />
        <ToggleSwitch
          label="aperoWheel"
          {...aperoWheel}
          onChange={handleAperoWheel}
        />
        <LogoDressCode />
        <ToggleSwitch
          label="Dresscode"
          {...dresscode}
          onChange={handleDressCode}
        />
        <h3>Dresscode</h3>
        <textarea/>
        <ButtonGeneric
          classname=""
          type="reset"
          onClick={reset}
          btnText="Annuler"
        />
        <button type="submit">Envoyer</button>
      </form>
    </Fragment>
  );
};

export default FormRender;
