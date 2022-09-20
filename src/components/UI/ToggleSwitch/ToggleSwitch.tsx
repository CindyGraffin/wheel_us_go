import { Fragment } from "react";
import "./toggleSwitch.css";

type ToggleSwitchProps = {
  label: string;
  name: string;
  onChange:  React.ChangeEventHandler<HTMLInputElement>
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, name, onChange}) => {
return (
  <Fragment>
    <div className="container">
      {name}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onChange={onChange}
        />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
    </Fragment>
  );
};

export default ToggleSwitch;
