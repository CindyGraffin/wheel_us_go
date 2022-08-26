import { HTMLInputTypeAttribute } from "../../../../../types/HTMLInputTypeAttribute"

type InputAdressRestaurantType = {
  placeholder: string,
  type : HTMLInputTypeAttribute
}

const InputAdressRestaurant : React.FC<InputAdressRestaurantType> = ({placeholder, type}) => {
  return (
    <label>
      Adresse du restaurant
      <input placeholder={placeholder} type={type} />
    </label>
  )
}

export default InputAdressRestaurant