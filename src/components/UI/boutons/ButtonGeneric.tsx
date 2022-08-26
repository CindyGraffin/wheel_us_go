interface ButtonGenericProps {
  classname: string;
  type?: 'submit' | 'reset' | 'button';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  btnText: string;
}

const ButtonGeneric : React.FC<ButtonGenericProps> = ({classname, type, onClick, btnText}) => {
  return (
    <button className={classname} type={type} onClick = {onClick} >{btnText}</button>
  )
}

export default ButtonGeneric