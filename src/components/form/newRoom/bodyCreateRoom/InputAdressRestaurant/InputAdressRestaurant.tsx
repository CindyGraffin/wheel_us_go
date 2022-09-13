import { HTMLInputTypeAttribute } from "../../../../../types/HTMLInputTypeAttribute";

type InputAdressRestaurantType = {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  name: string;
};

const InputAdressRestaurant: React.FC<InputAdressRestaurantType> = ({
  placeholder,
  type,
  name,
}) => {
  return (
    <label>
      Adresse du restaurant
      <input placeholder={placeholder} type={type} name={name} />
    </label>
  );
};

export default InputAdressRestaurant;
