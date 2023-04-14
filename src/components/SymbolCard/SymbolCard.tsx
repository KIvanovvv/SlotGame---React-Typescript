import { useState } from "react";
import classes from "./SymbolCard.module.css";
import { motion } from "framer-motion";

export const SymbolCard: React.FC<{
  symbolPath: string;
  spinning: boolean;
  winMark: boolean;
}> = (props) => {
  const [imgClass, setImgClass] = useState(classes.img);

  const addingWinningClass = () => {
    if (props.winMark) {
      setImgClass(`${classes.img} ${classes.winning}`);
    } else {
      setImgClass(classes.img);
    }
  };
  setTimeout(() => {
    addingWinningClass();
  }, 1000);
  return (
    <motion.div
      animate={props.spinning ? { y: [-600, -200] } : { y: 0 }}
      transition={
        props.spinning
          ? {
              duration: 0.2,
              repeat: Infinity,
              repeatType: "loop",
              stiffness: 0,
            }
          : { stiffness: 0 }
      }
      className={`${classes.container} ${classes.spin} `}
    >
      <img src={props.symbolPath} alt="symbol" className={imgClass} />
    </motion.div>
  );
};
