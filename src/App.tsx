import classes from "./App.module.css";
import { Reel } from "./components/Reel/Reel";
import { useState } from "react";
import banana from "./assets/banana.png";
import berries from "./assets/berries.png";
import crown from "./assets/crown.png";
import diamond from "./assets/diamond.png";
import hat from "./assets/hat.png";
import plum from "./assets/plum.png";
import {
  loosingOutcome,
  symbols_data,
  winningOutcome,
} from "./resultStore/store";

function App() {
  const [reelOneSymbols, setReelOneSymbols] = useState(
    shuffleArray([...symbols_data])
  );
  const [reelTwoSymbols, setReelTwoSymbols] = useState(
    shuffleArray([...symbols_data])
  );
  const [reelThreeSymbols, setReelThreeSymbols] = useState(
    shuffleArray([...symbols_data])
  );
  const [reelOneSpinning, setReelOneSpinning] = useState(false);
  const [reelTwoSpinning, setReelTwoSpinning] = useState(false);
  const [reelThreeSpinning, setReelThreeSpinning] = useState(false);

  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const startFirstReel = (
    playerWin: boolean,
    loosingIndex: number,
    winningIndex: number
  ) => {
    setReelOneSpinning(true);
    setReelOneSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelOneSymbols(winningOutcome[winningIndex].combination[0]);
        setReelOneSpinning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setReelOneSymbols(loosingOutcome[loosingIndex].combination[0]);
        setReelOneSpinning(false);
      }, 1000);
    }
  };
  const startSecondReel = (
    playerWin: boolean,
    loosingIndex: number,
    winningIndex: number
  ) => {
    setReelTwoSpinning(true);
    setReelTwoSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelTwoSymbols(winningOutcome[winningIndex].combination[1]);
        setReelTwoSpinning(false);
      }, 1700);
    } else {
      setTimeout(() => {
        setReelTwoSymbols(loosingOutcome[loosingIndex].combination[1]);
        setReelTwoSpinning(false);
      }, 1700);
    }
  };

  const startThirdReel = (
    playerWin: boolean,
    loosingIndex: number,
    winningIndex: number
  ) => {
    setReelThreeSpinning(true);
    setReelThreeSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelThreeSymbols(winningOutcome[winningIndex].combination[2]);
        setReelThreeSpinning(false);
      }, 2200);
    } else {
      setTimeout(() => {
        setReelThreeSymbols(loosingOutcome[loosingIndex].combination[2]);
        setReelThreeSpinning(false);
      }, 2200);
    }
  };

  const onStartHandler = () => {
    const winOdd = Math.trunc(Math.random() * 3);
    let playerWin = false;
    let loosingOutcomeIndex = 0;
    let winningOutcomeIndex = 0;
    if (winOdd === 1) {
      playerWin = true;
      winningOutcomeIndex = Math.trunc(Math.random() * winningOutcome.length);
    }
    if (!playerWin) {
      loosingOutcomeIndex = Math.trunc(Math.random() * loosingOutcome.length);
    }

    startFirstReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
    startSecondReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
    startThirdReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
    // setReelOneSymbols((data) => shuffleArray([...data]));
    // console.log(reelOneSymbols);

    setReelTwoSymbols((data) => shuffleArray([...data]));
    setReelThreeSymbols((data) => shuffleArray([...data]));
  };

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Reel reelSpinning={reelOneSpinning} symbols={reelOneSymbols} />
        <Reel reelSpinning={reelTwoSpinning} symbols={reelTwoSymbols} />
        <Reel reelSpinning={reelThreeSpinning} symbols={reelThreeSymbols} />
      </div>
      <button className={classes.btn_start} onClick={onStartHandler}>
        Start
      </button>
    </div>
  );
}

export default App;
