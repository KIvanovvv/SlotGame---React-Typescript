import { SymbolCard } from "../SymbolCard/SymbolCard";
import classes from "./Reel.module.css";

export const Reel: React.FC<{ reelSpinning: boolean; symbols: string[] }> = (
  props
) => {
  return (
    <div className={classes.main}>
      {props.symbols.map((symbol) => (
        <SymbolCard
          symbolPath={symbol}
          spinning={props.reelSpinning}
          key={Math.random() * 100}
        />
      ))}
    </div>
  );
};
