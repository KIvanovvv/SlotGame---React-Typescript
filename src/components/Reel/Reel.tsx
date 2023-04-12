import { SymbolCard } from "../SymbolCard/SymbolCard";
import classes from "./Reel.module.css";
import banana from "../../assets/banana.png";
import berries from "../../assets/berries.png";
import crown from "../../assets/crown.png";
import diamond from "../../assets/diamond.png";
import hat from "../../assets/hat.png";
import plum from "../../assets/plum.png";

const symbols = [
  banana,
  berries,
  crown,
  diamond,
  hat,
  plum,
  banana,
  berries,
  crown,
  diamond,
  hat,
  plum,
  banana,
  berries,
  crown,
  diamond,
  hat,
  plum,
  banana,
  berries,
  crown,
  diamond,
  hat,
  plum,
];

export const Reel: React.FC<{ reelSpinning: boolean }> = (props) => {
  return (
    <div className={classes.main}>
      {symbols.map((symbol) => (
        <SymbolCard symbolPath={symbol} spinning={props.reelSpinning} />
      ))}
    </div>
  );
};
