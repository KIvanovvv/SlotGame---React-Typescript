import classes from "./BetPicker.module.css";
const Multiplier: React.FC<{
  active: boolean;
  name: string;
  handleMultipliers: (current: string) => void;
}> = (props) => {
  const btnClass = props.active
    ? `${classes.multiplier} ${classes.clicked}`
    : classes.multiplier;
  const multiClicked = () => {
    props.handleMultipliers(props.name);
  };
  return (
    <button className={btnClass} onClick={multiClicked}>
      {props.name}
    </button>
  );
};

export default Multiplier;
