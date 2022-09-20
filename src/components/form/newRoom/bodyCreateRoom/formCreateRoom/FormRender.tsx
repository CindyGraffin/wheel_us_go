import React, { useContext, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormRenderValues } from "../../../../../types/FormRenderValues";
import ButtonGeneric from "../../../../UI/boutons/ButtonGeneric";
import RadioButton from "../../../../UI/boutons/RadioButton";
import GuestLogo from "../../../../UI/LogoCreateRoom/GuestLogo";
import LogoApero from "../../../../UI/LogoCreateRoom/LogoApero";
import LogoCalendar from "../../../../UI/LogoCreateRoom/LogoCalendar";
import LogoDressCode from "../../../../UI/LogoCreateRoom/LogoDressCode";
import LogoLocation from "../../../../UI/LogoCreateRoom/LogoLocation";
import InputDressCode from "../../options/InputDressCode/InputDressCode";
import Calendar from "../Calendar/Calendar";
import InputAdressRestaurant from "../InputAdressRestaurant/InputAdressRestaurant";
import InputNameRestaurant from "../InputNameRestaurant/InputNameRestaurant";
import AddPeople from "../AddPeople/AddPeople";
import { AuthContext } from "../../../../../context/AuthContext";
import { userService } from "../../../../../services/userService";
import IUser from "../../../../../types/IUser";
import SearchBarGuest from "../searchBarGuest/SearchBarGuest";
import ToggleSwitch from "../../../../UI/ToggleSwitch/ToggleSwitch";

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
  const [copyFriends, setCopyFriends] = useState<IUser[]>([]);

  const defaultOption = useRef<HTMLOptionElement>(null);

  const handleChangeSearchBarGuest = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //TODO
    const friendSelected = (e.target as HTMLSelectElement).value;
    // Contrôle affiche REFACTO
    setFriendsIdSelected([...friendsIdSelected, friendSelected]);
    setValue("partsIdField", [...friendsIdSelected, friendSelected]);
  };


  const handleBackToChoice = () => {
    console.log("handleBackToChoice");
  };

  const reset = () => {
    console.log("reset");
  };

  const onSubmit = () => {
  
  //setDataRooms(JSON.stringify(data))
  };

  const onChangeDresscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
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
      <ToggleSwitch label="aperoWheel'" {...aperoWheel} />
      <LogoDressCode />
      <ToggleSwitch label="Dresscode" {...dresscode} />
      <h3>Dresscode</h3>
      <InputDressCode />
      <ButtonGeneric
        classname=""
        type="reset"
        onClick={reset}
        btnText="Annuler"
      />
      <button type="submit">Benjamin</button>
      <button type="button" onClick={() => console.log(getValues())}>
        Debug
      </button>
    </form>
  );
};

export default FormRender;
