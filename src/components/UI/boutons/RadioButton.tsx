import React from 'react'

interface RadioGenericProps {
  onChange: React.FormEventHandler<HTMLDivElement>;
  value : string;
  name: string;
}

const RadioButton : React.FC<RadioGenericProps> = ( {onChange, value, name}) => {
  return (
    <div onChange={onChange}>
        <input type="radio" value={value} name={name} /> {value}
      </div>
  )
}

export default RadioButton