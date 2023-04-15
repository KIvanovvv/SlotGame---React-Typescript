import hat from "../assets/hat.png";
import plum from "../assets/plum.png";
import berries from "../assets/berries.png";
import diamond from "../assets/diamond.png";
import banana from "../assets/banana.png";
import crown from "../assets/crown.png";
export const symbols_data = [
  banana,
  banana,
  banana,
  banana,
  banana,
  berries,
  berries,
  berries,
  berries,
  berries,
  crown,
  crown,
  crown,
  diamond,
  hat,
  hat,
  hat,
  plum,
  plum,
  plum,
  plum,
  plum,
];

export const loosingOutcome = [
  {
    combination: [
      [hat, plum, berries, hat, plum, berries, hat, plum, berries],
      [diamond, berries, hat, plum, berries, hat, plum, berries, hat],
      [banana, plum, berries, hat, plum, berries, hat, plum, berries],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [banana, plum, berries, hat, plum, diamond, hat, berries, plum],
      [crown, hat, diamond, plum, hat, berries, plum, banana, diamond],
      [diamond, berries, plum, crown, berries, hat, plum, diamond, hat],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [plum, hat, crown, crown, hat, plum, diamond, berries, hat],
      [diamond, berries, hat, plum, berries, crown, hat, plum, banana],
      [banana, plum, crown, hat, plum, diamond, berries, hat, diamond],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [berries, hat, diamond, plum, hat, crown, plum, diamond, banana],
      [plum, diamond, hat, berries, diamond, plum, hat, crown, berries],
      [hat, berries, crown, plum, diamond, hat, plum, banana, hat],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [berries, hat, plum, diamond, hat, plum, diamond, berries, hat],
      [crown, plum, diamond, hat, berries, plum, hat, diamond, berries],
      [diamond, berries, plum, hat, plum, crown, hat, banana, hat],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [hat, plum, berries, diamond, hat, plum, berries, hat, diamond],
      [plum, crown, hat, berries, diamond, hat, plum, berries, hat],
      [diamond, hat, berries, plum, hat, diamond, berries, crown, plum],
    ],
    payout: 0,
    winningLine: [0],
  },
  {
    combination: [
      [berries, plum, hat, crown, hat, diamond, plum, diamond, hat],
      [plum, diamond, berries, hat, plum, crown, hat, berries, diamond],
      [hat, berries, plum, diamond, hat, plum, hat, crown, banana],
    ],
    payout: 0,
    winningLine: [0],
  },
];

export const winningOutcome = [
  {
    combination: [
      [plum, banana, plum, berries, plum, diamond, hat, plum, crown],
      [diamond, hat, plum, crown, berries, plum, diamond, hat, plum],
      [berries, hat, plum, diamond, crown, hat, berries, diamond, hat],
    ],
    payout: 4,
    winningLine: [3],
  },
  {
    combination: [
      [plum, diamond, crown, plum, crown, hat, berries, plum, diamond],
      [plum, crown, hat, berries, plum, diamond, hat, crown, berries],
      [plum, berries, plum, hat, diamond, crown, berries, plum, hat],
    ],
    payout: 4,
    winningLine: [1],
  },
  {
    combination: [
      [diamond, plum, plum, plum, hat, diamond, berries, crown, hat],
      [plum, plum, plum, crown, berries, plum, diamond, crown, hat],
      [berries, plum, plum, hat, diamond, berries, hat, crown, banana],
    ],
    payout: 8,
    winningLine: [2, 3],
  },
  {
    combination: [
      [plum, berries, diamond, crown, hat, plum, berries, diamond, hat],
      [hat, plum, plum, berries, diamond, crown, berries, hat, plum],
      [diamond, crown, plum, plum, hat, diamond, berries, crown, hat],
    ],
    payout: 4,
    winningLine: [4],
  },
  {
    combination: [
      [berries, plum, plum, plum, hat, crown, plum, diamond, hat],
      [plum, plum, crown, berries, diamond, plum, hat, crown, diamond],
      [plum, diamond, hat, berries, crown, hat, plum, diamond, berries],
    ],
    payout: 4,
    winningLine: [5],
  },
  {
    combination: [
      [plum, plum, plum, plum, hat, crown, plum, diamond, hat],
      [plum, plum, crown, berries, diamond, plum, hat, crown, diamond],
      [plum, plum, plum, berries, crown, hat, plum, diamond, berries],
    ],
    payout: 16,
    winningLine: [1,2,4,5],
  },
  {
    combination: [
      [plum, plum, plum, plum, hat, crown, plum, diamond, hat],
      [plum, plum, plum, berries, diamond, plum, hat, crown, diamond],
      [plum, plum, plum, berries, crown, hat, plum, diamond, berries],
    ],
    payout: 20,
    winningLine: [1,2,3,4,5],
  },
];
