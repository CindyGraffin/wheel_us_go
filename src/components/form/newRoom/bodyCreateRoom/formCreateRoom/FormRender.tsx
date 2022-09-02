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
import Calendar from "../calendar/calendar";
import InputAdressRestaurant from "../InputAdressRestaurant/InputAdressRestaurant";
import InputNameRestaurant from "../InputNameRestaurant/InputNameRestaurant";
import AddPeople from "../AddPeople/AddPeople";
import { UserFriends } from "../../../../../pages";
import { FriendsType } from "../../../../../types/Friends";
import { AuthContext } from "../../../../../context/AuthContext";


const FormRender: React.FC<unknown> = () => {

  const [list, setList] = useState<FriendsType[]>([])
  const {state} = useContext(AuthContext);

  useEffect(() => {
    console.log(state)
    // call service qui récupère la liste d'amis dans la db
    //.then((liste) => setList(liste)).then(() => listeAInviter = [...liste])
  
  }, [])
  

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

  const handleChoice = (friend: FriendsType) => {
    // faire en sorte que le friend sélectionné soit dans la liste d'amis sélectionnés et plus dans la liste d'amis à inviter
  }



  return (
    <form onSubmit={handleSubmit((data) => setDataRooms(JSON.stringify(data)))}>
      <LogoLocation />
      <h3>Lieu : </h3>
      <InputNameRestaurant
        placeholder="Le nom de votre restaurant"
        type="text"
      />
      <InputAdressRestaurant
        placeholder="L'adresse de votre restaurant"
        type="text"
      />
      <ButtonGeneric
        classname=""
        type="button"
        onClick={handleBackToChoice}
        btnText="Revenir aux choix"
      />
      <LogoCalendar />
      <h3>Date et heure : </h3>
      <Calendar type="date" />
      <GuestLogo />
      <AddPeople/>
      <h2>Options Supplémentaires</h2>
      <LogoApero />
      <h3>Roue de l'apéro</h3>
      {/* <RadioButton />
      <RadioButton /> */}
      <LogoDressCode />
      <h3>Dresscode</h3>
   {/*    <RadioButton />
      <RadioButton /> */}
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
