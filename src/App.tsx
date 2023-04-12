import classes from "./App.module.css";
import { Reel } from "./components/Reel/Reel";
import { useState } from "react";
function App() {
  const [reelOneSpinning, setReelOneSpinning] = useState(false);
  const [reelTwoSpinning, setReelTwoSpinning] = useState(false);
  const [reelThreeSpinning, setReelThreeSpinning] = useState(false);
  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Reel reelSpinning={reelOneSpinning} />
        <Reel reelSpinning={reelTwoSpinning} />
        <Reel reelSpinning={reelThreeSpinning} />
      </div>
      <button className={classes.btn_start}>Start</button>
    </div>
  );
}

export default App;
