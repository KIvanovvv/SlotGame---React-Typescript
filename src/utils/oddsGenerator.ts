import { winningOutcome, loosingOutcome } from "../resultStore/store";

const oddsGenerator = () => {
  let playerWin = false;
  let loosingOutcomeIndex = 0;
  let winningOutcomeIndex = 0;
  let outcome: {
    combination: string[][];
    winningLine: number[];
    payout: number;
  } = {
    combination: [],
    winningLine: [0],
    payout: 0,
  };
  const winOdd = Math.trunc(Math.random() * 8000);
  if (winOdd <= 500 || winOdd > 1000) {
    playerWin = false;
    loosingOutcomeIndex = Math.trunc(Math.random() * loosingOutcome.length);
  } else if (winOdd >= 501 && winOdd <= 700) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout === 4
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  } else if (winOdd >= 701 && winOdd <= 800) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout === 8
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  } else if (winOdd >= 801 && winOdd <= 900) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout >= 12 && item.payout <= 20
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  } else if (winOdd >= 901 && winOdd <= 950) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout > 20 && item.payout <= 40
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  } else if (winOdd >= 951 && winOdd <= 980) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout === 50
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  } else if (winOdd > 981 && winOdd <= 1000) {
    playerWin = true;
    const winningCombinations = winningOutcome.filter(
      (item) => item.payout === 100
    );
    winningOutcomeIndex = Math.trunc(
      Math.random() * winningCombinations.length
    );
    outcome = winningCombinations[winningOutcomeIndex];
  }
  console.log(winOdd);
  return { playerWin, loosingOutcomeIndex, winningOutcomeIndex, outcome };
};

export default oddsGenerator;
