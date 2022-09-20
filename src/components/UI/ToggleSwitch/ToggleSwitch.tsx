import React, { useState } from "react";
import "./toggleSwitch.css";

type ToggleSwitchProps = {
  label: string;
  name: string;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, name }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container">
      {name}{" "}
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name={label}
          id={label}
          onChange={(e) => setToggle((prevCheck) => !prevCheck)}
		  value={toggle.toString()}
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
