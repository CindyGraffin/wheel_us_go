import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
import { UserFriends } from "../../../../../pages";
import { AuthContext } from "../../../../../context/AuthContext";
import { userService } from "../../../../../services/userService";
import IUser from "../../../../../types/IUser";

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
  } = useForm<FormRenderValues>({ mode: "onChange" });

  const [dataRooms, setDataRooms] = useState("");

  const placeNameField = register("placeName", { required: true });
  const adressField = register("address", { required: true });
  const dateField = register("date", { required: true });
  const partIdsField = register("partsIds", { required: true });
  const themeField = register("theme", { required: true });
  const aperoWheel = register("aperoWheel", { required: true });
  const dresscode = register("dresscode", { required: true });

  const handleBackToChoice = () => {
    console.log("handleBackToChoice");
  };

  const submit = () => {
    console.log("submit");
  };

  const reset = () => {
    console.log("reset");
  };
  const onChangeApero = ()=> {
    console.log("test")
  }
  
  const onChangeDresscode = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit((data) => setDataRooms(JSON.stringify(data)))}>
      <LogoLocation />
      <h3>Lieu : </h3>
      <InputNameRestaurant
        placeholder="Le nom de votre restaurant"
        type="text"
        name="placeName"
      />
      <InputAdressRestaurant
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
      <Calendar type="date" name="date" />
      <GuestLogo />
      <AddPeople listFriends={list} />
      <h2>Options Supplémentaires</h2>
      <LogoApero />
      <h3>Roue de l'apéro</h3>
      <RadioButton onChange={onChangeApero} value="Oui" name="aperoWheel" />
      <RadioButton onChange={onChangeApero} value="Non" name="aperoWheel" />
      <LogoDressCode />
      <h3>Dresscode</h3>
      <RadioButton onChange={onChangeDresscode} value="Oui" name="dresscode" />
      <RadioButton onChange={onChangeDresscode} value="Non" name="dresscode" />
      <InputDressCode />
      <ButtonGeneric
        classname=""
        type="reset"
        onClick={reset}
        btnText="Annuler"
      />
      <ButtonGeneric
        classname=""
        type="submit"
        onClick={submit}
        btnText="Envoyer"
      />
    </form>
  );
};

export default FormRender;
