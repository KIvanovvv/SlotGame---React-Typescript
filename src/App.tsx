import classes from "./App.module.css";
import { Reel } from "./components/Reel/Reel";
import { useState } from "react";
import reelSound from "./assets/sounds/reelSound.wav";
import thirdReelSound from "./assets/sounds/3rdreel.wav";
import reelBg from "./assets/sounds/reelBg.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
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
  const [startClicked, setStartClicked] = useState(false);

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
        new Audio(reelSound).play();
        setReelOneSpinning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setReelOneSymbols(loosingOutcome[loosingIndex].combination[0]);
        new Audio(reelSound).play();
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
        new Audio(reelSound).play();
        setReelTwoSpinning(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setReelTwoSymbols(loosingOutcome[loosingIndex].combination[1]);
        new Audio(reelSound).play();
        setReelTwoSpinning(false);
      }, 1500);
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
        new Audio(thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setReelThreeSymbols(loosingOutcome[loosingIndex].combination[2]);
        new Audio(thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
      }, 2000);
    }
  };
  //[1,2,3...100]
  const onStartHandler = () => {
    setStartClicked(true);
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
    new Audio(reelBg).play();
    startFirstReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
    startSecondReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
    startThirdReel(playerWin, loosingOutcomeIndex, winningOutcomeIndex);
  };

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Reel
          reelSpinning={reelOneSpinning}
          symbols={reelOneSymbols}
          reelOrder={0}
        />
        <Reel
          reelSpinning={reelTwoSpinning}
          symbols={reelTwoSymbols}
          reelOrder={1}
        />
        <Reel
          reelSpinning={reelThreeSpinning}
          symbols={reelThreeSymbols}
          reelOrder={2}
        />
      </div>
      <button className={classes.btn_start} onClick={onStartHandler}>
        <FontAwesomeIcon
          icon={faRotate}
          className={
            startClicked ? classes.icon_spin_active : classes.icon_spin
          }
          size="5x"
        />
      </button>
    </div>
  );
}

export default App;
