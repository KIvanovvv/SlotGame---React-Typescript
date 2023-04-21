import { useMemo, useState } from "react";
import classes from "./SymbolCard.module.css";
import { motion } from "framer-motion";

export const SymbolCard: React.FC<{
  symbolPath: string;
  spinning: boolean;
  winMark: boolean;
  winningClass: boolean;
}> = (props) => {
  const [imgClass, setImgClass] = useState(classes.img);
  const [containerClass, setContainerClass] = useState(classes.container);

  const addingWinningClass = () => {
    if (props.winMark) {
      setContainerClass(
        `${classes.container} ${classes.winning} ${classes.spin}`
      );
    } else {
      setContainerClass(`${classes.container} ${classes.spin}`);
    }
  };
  useMemo(() => {
    if (props.winningClass) {
      addingWinningClass();
    }
  }, [props.winningClass]);

  const addingWinningClassImg = () => {
    if (props.winMark) {
      setImgClass(`${classes.img} ${classes.img_winning}`);
    } else {
      setImgClass(classes.img);
    }
  };
  useMemo(() => {
    if (props.winningClass) {
      addingWinningClassImg();
    }
  }, [props.winningClass]);

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
      className={containerClass}
    >
      <img src={props.symbolPath} alt="symbol" className={imgClass} />
    </motion.div>
  );
};
