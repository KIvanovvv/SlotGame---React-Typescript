import classes from "./App.module.css";
import { Reel } from "./components/Reel/Reel";
import { useState } from "react";
import {
  reelSound,
  reelBg,
  thirdReelSound,
  winSound,
} from "./assets/sounds/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import {
  loosingOutcome,
  symbols_data,
  winningOutcome,
} from "./resultStore/store";
import BetPicker from "./components/BetPicker/BetPicker";

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
  const [reelOneWinningLine, setReelOneWinningLine] = useState([0]);
  const [reelTwoWinningLine, setReelTwoWinningLine] = useState([0]);
  const [reelThreeWinningLine, setReelThreeWinningLine] = useState([0]);
  const [reelOnePayout, setReelOnePayout] = useState(0);
  const [reelTwoPayout, setReelTwoPayout] = useState(0);
  const [reelThreePayout, setReelThreePayout] = useState(0);
  const [reelOneSpinning, setReelOneSpinning] = useState(false);
  const [reelTwoSpinning, setReelTwoSpinning] = useState(false);
  const [reelThreeSpinning, setReelThreeSpinning] = useState(false);
  const [startClicked, setStartClicked] = useState(false);
  const [payoutMessage, setPayoutMessage] = useState("Spin the reels");
  const [winningClass, setWinningClass] = useState(false);
  const [credits, setCredits] = useState(1000);
  const [bet, setBet] = useState(1);

  const betHandler = (bet: number) => {
    setBet(bet);
  };

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
    setPayoutMessage("Good luck!");
    setReelOneSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelOneSymbols(winningOutcome[winningIndex].combination[0]);
        setReelOneWinningLine(winningOutcome[winningIndex].winningLine);
        setReelOnePayout(winningOutcome[winningIndex].payout);
        new Audio(reelSound).play();
        setReelOneSpinning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setReelOneSymbols(loosingOutcome[loosingIndex].combination[0]);
        setReelOneWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelOnePayout(loosingOutcome[loosingIndex].payout);
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
        setReelTwoWinningLine(winningOutcome[winningIndex].winningLine);
        setReelTwoPayout(winningOutcome[winningIndex].payout);
        new Audio(reelSound).play();
        setReelTwoSpinning(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setReelTwoSymbols(loosingOutcome[loosingIndex].combination[1]);
        setReelTwoWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelTwoPayout(loosingOutcome[loosingIndex].payout);
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
        setReelThreeWinningLine(winningOutcome[winningIndex].winningLine);
        setReelThreePayout(winningOutcome[winningIndex].payout);
        new Audio(thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
        setTimeout(() => {
          setPayoutMessage(
            "You won " + winningOutcome[winningIndex].payout * bet + " coins!"
          );

          new Audio(winSound).play();
          setWinningClass(true);
          setCredits(
            (curr) => curr + winningOutcome[winningIndex].payout * bet
          );
        }, 500);
      }, 2000);
    } else {
      setTimeout(() => {
        setReelThreeSymbols(loosingOutcome[loosingIndex].combination[2]);
        setReelThreeWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelThreePayout(loosingOutcome[loosingIndex].payout);
        new Audio(thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
        setPayoutMessage("Good luck!");
      }, 2000);
    }
  };
  const onStartHandler = () => {
    setStartClicked(true);
    setCredits((curr) => curr - bet);
    setWinningClass(false);
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
    <div className={classes.wrapper}>
      <div className={classes.app_display}>
        <p className={classes.payout}>{payoutMessage}</p>
        <div className={classes.app}>
          <div className={classes.container}>
            <Reel
              reelSpinning={reelOneSpinning}
              symbols={reelOneSymbols}
              reelOrder={0}
              winningLine={reelOneWinningLine}
              payout={reelOnePayout}
              winningClass={winningClass}
            />
            <Reel
              reelSpinning={reelTwoSpinning}
              symbols={reelTwoSymbols}
              reelOrder={1}
              winningLine={reelTwoWinningLine}
              payout={reelTwoPayout}
              winningClass={winningClass}
            />
            <Reel
              reelSpinning={reelThreeSpinning}
              symbols={reelThreeSymbols}
              reelOrder={2}
              winningLine={reelThreeWinningLine}
              payout={reelThreePayout}
              winningClass={winningClass}
            />
          </div>
          <div className={classes.actions}>
            <BetPicker betHandler={betHandler} bet={bet} />
            <button
              className={classes.btn_start}
              onClick={onStartHandler}
              disabled={reelThreeSpinning ? true : false}
            >
              <FontAwesomeIcon
                icon={faRotate}
                className={
                  startClicked ? classes.icon_spin_active : classes.icon_spin
                }
                size="5x"
              />
            </button>
            <div className={classes.credits_container}>
              <p className={classes.credits_headline}>Credits</p>
              <p className={classes.credits_sum}>{credits}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
