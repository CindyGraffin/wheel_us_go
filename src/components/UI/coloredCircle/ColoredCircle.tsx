import "./coloredCircle.css";

type ColoredCircleType = {
    color: string;
}

const ColoredCircle : React.FC<ColoredCircleType> = ({ color }) => {

    const styles = { backgroundColor: color };
  
    return color ? (
      <>
        <span className="colored-circle" style={styles} />
      </>
    ) : null;
  };
  
  export default ColoredCircle;