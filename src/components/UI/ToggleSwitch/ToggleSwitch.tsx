import { Fragment } from "react";
import "./toggleSwitch.css";

type ToggleSwitchProps = {
  label: string;
  onChange:  React.ChangeEventHandler<HTMLInputElement>;
  nameField: Object;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, nameField, onChange}) => {
return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          {...nameField}
          onChange={onChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
