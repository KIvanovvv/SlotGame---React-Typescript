import classes from "./App.module.css";
import { Reel } from "./components/Reel/Reel";
import { useMemo, useState } from "react";
import {
  reelSound,
  reelBg,
  thirdReelSound,
  winSound,
} from "./assets/sounds/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRotate,
  faTriangleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { loosingOutcome, symbols_data } from "./resultStore/store";
import BetPicker from "./components/BetPicker/BetPicker";
import oddsGenerator from "./utils/oddsGenerator";
import shuffleArray from "./utils/shuffle";
import InfoModal from "./components/InfoModal/InfoModal";

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
  const [insufficientCredits, setInsufficientCredits] = useState(false);
  const [bet, setBet] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [sound, setSound] = useState({
    reelSound,
    reelBg,
    thirdReelSound,
    winSound,
  });

  const betHandler = (bet: number) => {
    setBet(bet);
  };
  const startFirstReel = (
    playerWin: boolean,
    loosingIndex: number,

    outcome: {
      combination: string[][];
      winningLine: number[];
      payout: number;
    }
  ) => {
    setReelOneSpinning(true);
    setPayoutMessage("Good luck!");
    setReelOneSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelOneSymbols(outcome.combination[0]);
        setReelOneWinningLine(outcome.winningLine);
        setReelOnePayout(outcome.payout);
        new Audio(sound.reelSound).play();
        setReelOneSpinning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setReelOneSymbols(loosingOutcome[loosingIndex].combination[0]);
        setReelOneWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelOnePayout(loosingOutcome[loosingIndex].payout);
        new Audio(sound.reelSound).play();
        setReelOneSpinning(false);
      }, 1000);
    }
  };
  const startSecondReel = (
    playerWin: boolean,
    loosingIndex: number,
    outcome: {
      combination: string[][];
      winningLine: number[];
      payout: number;
    }
  ) => {
    setReelTwoSpinning(true);

    setReelTwoSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelTwoSymbols(outcome.combination[1]);
        setReelTwoWinningLine(outcome.winningLine);
        setReelTwoPayout(outcome.payout);
        new Audio(sound.reelSound).play();
        setReelTwoSpinning(false);
      }, 1500);
    } else {
      setTimeout(() => {
        setReelTwoSymbols(loosingOutcome[loosingIndex].combination[1]);
        setReelTwoWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelTwoPayout(loosingOutcome[loosingIndex].payout);
        new Audio(sound.reelSound).play();
        setReelTwoSpinning(false);
      }, 1500);
    }
  };

  const startThirdReel = (
    playerWin: boolean,
    loosingIndex: number,

    outcome: {
      combination: string[][];
      winningLine: number[];
      payout: number;
    }
  ) => {
    setReelThreeSpinning(true);
    setReelThreeSymbols(shuffleArray([...symbols_data]));
    if (playerWin) {
      setTimeout(() => {
        setReelThreeSymbols(outcome.combination[2]);
        setReelThreeWinningLine(outcome.winningLine);
        setReelThreePayout(outcome.payout);
        new Audio(sound.thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
        setTimeout(() => {
          setPayoutMessage("You won " + outcome.payout * bet + " coins!");

          new Audio(sound.winSound).play();
          setWinningClass(true);
          setCredits((curr) => curr + outcome.payout * bet);
        }, 500);
      }, 2000);
    } else {
      setTimeout(() => {
        setReelThreeSymbols(loosingOutcome[loosingIndex].combination[2]);
        setReelThreeWinningLine(loosingOutcome[loosingIndex].winningLine);
        setReelThreePayout(loosingOutcome[loosingIndex].payout);
        new Audio(sound.thirdReelSound).play();
        setReelThreeSpinning(false);
        setStartClicked(false);
        setPayoutMessage("Good luck!");
      }, 2000);
    }
  };
  const onStartHandler = () => {
    if (credits < bet) {
      setInsufficientCredits(true);
      setTimeout(() => {
        setInsufficientCredits(false);
      }, 1500);
      return;
    }
    setStartClicked(true);
    setCredits((curr) => curr - bet);
    setWinningClass(false);
    const { playerWin, loosingOutcomeIndex, outcome } = oddsGenerator();
    new Audio(sound.reelBg).play();
    startFirstReel(playerWin, loosingOutcomeIndex, outcome);
    startSecondReel(playerWin, loosingOutcomeIndex, outcome);
    startThirdReel(playerWin, loosingOutcomeIndex, outcome);
  };

  useMemo(() => {
    if (reelThreeSpinning) {
      setBtnDisabled(true);
    } else {
      setTimeout(() => {
        setBtnDisabled(false);
      }, 500);
    }
  }, [reelThreeSpinning]);

  const onInfoHandler = () => {
    setShowInfo(true);
  };

  return (
    <div className={classes.wrapper}>
      {showInfo && <InfoModal bet={bet} setShowInfo={setShowInfo} />}
      {insufficientCredits && (
        <div className={classes.no_credits}>
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className={classes.triangle_icon}
          />
          <p>Insufficient credits</p>{" "}
        </div>
      )}
      <div className={classes.app_display}>
        <div className={classes.header}>
          <div className={classes.payout_container}>
            <p className={classes.payout}>{payoutMessage}</p>
          </div>
          <div className={classes.info_container}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              className={classes.info}
              onClick={onInfoHandler}
            />
          </div>
        </div>
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
              disabled={btnDisabled}
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
