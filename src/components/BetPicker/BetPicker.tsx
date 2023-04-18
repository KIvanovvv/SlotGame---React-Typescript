import { useState } from "react";
import classes from "./BetPicker.module.css";
import Multiplier from "./Multiplier";

const betMultiplierData = [1, 2, 5, 10, 20, 100];

const BetPicker: React.FC<{
  betHandler: (bet: number) => void;
  bet: number;
}> = (props) => {
  const [x1, setX1] = useState(true);
  const [x2, setX2] = useState(false);
  const [x5, setX5] = useState(false);
  const [x10, setX10] = useState(false);
  const [x20, setX20] = useState(false);
  const [x100, setX100] = useState(false);
  // const [bet, setBet] = useState(1);

  const handleMultipliers = (current: string) => {
    if (current === "x1") {
      setX1(true);
      setX2(false);
      setX5(false);
      setX10(false);
      setX20(false);
      setX100(false);
      props.betHandler(1);
    }
    if (current === "x2") {
      setX1(false);
      setX2(true);
      setX5(false);
      setX10(false);
      setX20(false);
      setX100(false);
      props.betHandler(2);
    }
    if (current === "x5") {
      setX1(false);
      setX2(false);
      setX5(true);
      setX10(false);
      setX20(false);
      setX100(false);
      props.betHandler(5);
    }
    if (current === "x10") {
      setX1(false);
      setX2(false);
      setX5(false);
      setX10(true);
      setX20(false);
      setX100(false);
      props.betHandler(10);
    }
    if (current === "x20") {
      setX1(false);
      setX2(false);
      setX5(false);
      setX10(false);
      setX20(true);
      setX100(false);
      props.betHandler(20);
    }
    if (current === "x100") {
      setX1(false);
      setX2(false);
      setX5(false);
      setX10(false);
      setX20(false);
      setX100(true);
      props.betHandler(100);
    }
  };

  return (
    <div className={classes.container}>
      <Multiplier handleMultipliers={handleMultipliers} name="x1" active={x1} />
      <Multiplier handleMultipliers={handleMultipliers} name="x2" active={x2} />
      <Multiplier handleMultipliers={handleMultipliers} name="x5" active={x5} />
      <Multiplier
        handleMultipliers={handleMultipliers}
        name="x10"
        active={x10}
      />
      <Multiplier
        handleMultipliers={handleMultipliers}
        name="x20"
        active={x20}
      />
      <Multiplier
        handleMultipliers={handleMultipliers}
        name="x100"
        active={x100}
      />
      <p className={classes.credit}>1 spin = {props.bet} credit</p>
    </div>
  );
};

export default BetPicker;
