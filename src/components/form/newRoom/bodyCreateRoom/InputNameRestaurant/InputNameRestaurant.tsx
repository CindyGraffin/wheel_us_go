import { HTMLInputTypeAttribute } from "react";

type InputNameRestaurantType = {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
};

const InputNameRestaurant: React.FC<InputNameRestaurantType> = ({
  placeholder,
  type,
  name
}) => {
  return (
    <label>
      Nom du restaurant
      <input placeholder={placeholder} type={type} name={name} />
    </label>
  );
};

export default InputNameRestaurant;
