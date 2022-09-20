import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputNameRestaurantType = {
  placeholder: string;
  type: HTMLInputTypeAttribute;
};

const InputNameRestaurant: React.FC<InputNameRestaurantType> = ({
  placeholder,
  type
}) => {
  return (
    <label>
      Nom du restaurant
      <input placeholder={placeholder} type={type}></input>
    </label>
  );
};

export default InputNameRestaurant;
