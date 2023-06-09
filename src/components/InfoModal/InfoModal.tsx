import classes from "./InfoModal.module.css";
import collection from "../../assets/";
import lines from "../../assets/lines/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
const { firstLine, secondLine, thirdLine, fourthLine, fifthLine } = lines;
const { banana, berries, plum, hat, crown, diamond } = collection;
const data = [
  {
    name: "plum",
    img: plum,
    multiplier: 4,
  },
  {
    name: "banana",
    img: banana,
    multiplier: 4,
  },
  {
    name: "berries",
    img: berries,
    multiplier: 4,
  },
  {
    name: "hat",
    img: hat,
    multiplier: 20,
  },
  {
    name: "crown",
    img: crown,
    multiplier: 50,
  },
  {
    name: "diamond",
    img: diamond,
    multiplier: 100,
  },
];
const InfoModal: React.FC<{
  bet: number;
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.backdrop}
        onClick={() => props.setShowInfo(false)}
      ></div>
      <div className={classes.main}>
        <div className={classes.main_body}>
          <div className={classes.left_side}>
            <p className={classes.headline}>Payouts</p>
            <div className={classes.paytable_container}>
              {data.map((symbol) => {
                return (
                  <div className={classes.card_symbol}>
                    <img
                      src={symbol.img}
                      alt={symbol.name}
                      className={classes.symbol_img}
                    />
                    <img
                      src={symbol.img}
                      alt={symbol.name}
                      className={classes.symbol_img}
                    />
                    <img
                      src={symbol.img}
                      alt={symbol.name}
                      className={classes.symbol_img}
                    />
                    <p className={classes.symbol_info}>
                      = {symbol.multiplier * props.bet} credits
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={classes.right_side}>
            <p className={classes.headline}>Winning lines</p>
            <div className={classes.lines_container}>
              <img
                src={firstLine}
                alt="winning line"
                className={classes.line}
              />
              <img
                src={secondLine}
                alt="winning line"
                className={classes.line}
              />
              <img
                src={thirdLine}
                alt="winning line"
                className={classes.line}
              />
              <img
                src={fourthLine}
                alt="winning line"
                className={classes.line}
              />
              <img
                src={fifthLine}
                alt="winning line"
                className={classes.line}
              />
            </div>
          </div>
        </div>
        <div className={classes.footer_container}>
          <FontAwesomeIcon
            icon={faLeftLong}
            className={classes.back_icon}
            size="2x"
            onClick={() => props.setShowInfo(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
