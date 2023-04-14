import { SymbolCard } from "../SymbolCard/SymbolCard";
import classes from "./Reel.module.css";

export const Reel: React.FC<{
  reelSpinning: boolean;
  symbols: string[];
  reelOrder: number;
}> = (props) => {
  const winningLine = [1, 2, 3, 4, 5];
  let winMark: boolean[];
  if (winningLine.includes(1)) {
    winMark = [true];
  }
  if (winningLine.includes(2)) {
    winMark = [true, true];
  }
  if (winningLine.includes(3)) {
    winMark = [true, true, true];
  }
  if (winningLine.includes(4)) {
    if (props.reelOrder === 0) winMark = [true];
    if (props.reelOrder === 1) winMark = [false, true];
    if (props.reelOrder === 2) winMark = [false, false, true];
  }
  if (winningLine.includes(5)) {
    if (props.reelOrder === 0) winMark = [false, false, true];
    if (props.reelOrder === 1) winMark = [false, true];
    if (props.reelOrder === 2) winMark = [true];
  }

  return (
    <div className={classes.main}>
      {props.symbols.map((symbol, i) => (
        <SymbolCard
          symbolPath={symbol}
          spinning={props.reelSpinning}
          key={Math.random() * 100}
          winMark={winMark[i] ? true : false}
        />
      ))}
    </div>
  );
};
