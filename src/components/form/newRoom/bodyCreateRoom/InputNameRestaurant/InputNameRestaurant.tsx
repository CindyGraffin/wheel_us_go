import { HTMLInputTypeAttribute } from "react";

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
      <input placeholder={placeholder} type={type} />
    </label>
  );
};

export default InputNameRestaurant;
