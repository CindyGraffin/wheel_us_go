import { HTMLInputTypeAttribute } from "react";

type CalendarType = {
  type: HTMLInputTypeAttribute;
  name: string;
  //handleChange: React.FormEvent<HTMLInputElement>;
};

const Calendar: React.FC<CalendarType> = ({ type, name }) => {
  return (
    <input
      name={name}
      type={type}
      //value={ moment(this.state.item.requested_order_ship_date).format("DD-MMM-YYYY") }
      className="form-calendar"
    />
  );
};

export default Calendar;
