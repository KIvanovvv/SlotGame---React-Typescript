import { SymbolCard } from "../SymbolCard/SymbolCard";
import classes from "./Reel.module.css";

export const Reel: React.FC<{
  reelSpinning: boolean;
  symbols: string[];
  reelOrder: number;
  winningLine: number[];
  payout: number;
  winningClass: boolean;
}> = (props) => {
  const winMark: boolean[] = [false, false, false];
  if (props.winningLine.includes(1)) {
    winMark.splice(0, 0, true);
  }
  if (props.winningLine.includes(2)) {
    winMark.splice(1, 0, true);
  }
  if (props.winningLine.includes(3)) {
    winMark.splice(2, 0, true);
  }
  if (props.winningLine.includes(4)) {
    if (props.reelOrder === 0) winMark.splice(0, 1, true);
    if (props.reelOrder === 1) winMark.splice(1, 1, true);
    if (props.reelOrder === 2) winMark.splice(2, 1, true);
  }
  if (props.winningLine.includes(5)) {
    if (props.reelOrder === 0) winMark.splice(2, 1, true);
    if (props.reelOrder === 1) winMark.splice(1, 1, true);
    if (props.reelOrder === 2) winMark.splice(0, 1, true);
  }

  return (
    <div className={classes.main}>
      {props.symbols.map((symbol, i) => (
        <SymbolCard
          symbolPath={symbol}
          spinning={props.reelSpinning}
          key={Math.random() * 100}
          winMark={winMark[i] ? true : false}
          winningClass={props.winningClass}
        />
      ))}
    </div>
  );
};
