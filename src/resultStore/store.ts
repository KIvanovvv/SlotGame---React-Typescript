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
//plum,banana,berries,hat,crown,diamond
export const loosingOutcome = (symb1, symb2, symb3, symb4, symb5, symb6) => {
  return [
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
        [banana, diamond, crown, berries, diamond, hat, banana, berries, crown],
        [hat, crown, diamond, banana, diamond, berries, banana, crown, berries],
        [diamond, berries, hat, crown, banana, plum, diamond, hat, plum],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [plum, crown, diamond, berries, hat, plum, diamond, berries, crown],
        [berries, crown, diamond, hat, diamond, plum, banana, berries, hat],
        [diamond, hat, berries, crown, banana, plum, diamond, hat, plum],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [berries, hat, diamond, plum, berries, crown, hat, plum, banana],
        [hat, berries, crown, banana, hat, diamond, berries, plum, hat],
        [diamond, plum, hat, crown, berries, hat, banana, berries, plum],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, berries, plum, diamond, crown, diamond, crown, diamond, crown],
        [berries, plum, hat, diamond, crown, diamond, crown, diamond, crown],
        [diamond, hat, berries, plum, crown, diamond, crown, diamond, crown],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [berries, hat, plum, diamond, crown, diamond, crown, diamond, crown],
        [hat, berries, plum, diamond, crown, diamond, crown, diamond, crown],
        [crown, diamond, hat, berries, plum, diamond, crown, diamond, crown],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [berries, plum, hat, diamond, crown, diamond, crown, diamond, crown],
        [plum, hat, berries, diamond, crown, diamond, crown, diamond, crown],
        [crown, diamond, berries, hat, plum, diamond, crown, diamond, crown],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [berries, hat, plum, diamond, crown, diamond, crown, diamond, crown],
        [crown, berries, hat, diamond, crown, diamond, crown, diamond, crown],
        [crown, diamond, hat, plum, berries, diamond, crown, diamond, crown],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [plum, plum, berries, hat, plum, berries, hat, plum, berries],
        [plum, berries, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, plum, berries, hat, plum, berries, hat, plum, berries],
        [hat, berries, hat, plum, berries, hat, plum, berries, hat],
        [banana, hat, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, plum, berries, hat, plum, berries, hat, plum, berries],
        [diamond, hat, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [diamond, plum, berries, hat, plum, berries, hat, plum, berries],
        [diamond, berries, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, diamond, berries, hat, plum, berries, hat, plum, berries],
        [diamond, berries, hat, plum, berries, hat, plum, berries, hat],
        [diamond, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, berries, berries, hat, plum, berries, hat, plum, berries],
        [diamond, berries, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
        [diamond, berries, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, crown, berries, hat, plum, berries, hat, plum, berries],
        [diamond, crown, hat, plum, berries, hat, plum, berries, hat],
        [banana, plum, crown, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [hat, plum, crown, hat, plum, berries, hat, plum, berries],
        [diamond, crown, hat, plum, berries, hat, plum, berries, hat],
        [banana, crown, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [crown, diamond, banana, hat, plum, berries, hat, plum, berries],
        [crown, diamond, hat, plum, berries, hat, plum, berries, hat],
        [diamond, crown, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [plum, plum, plum, hat, plum, berries, hat, plum, berries],
        [plum, plum, plum, plum, berries, hat, plum, berries, hat],
        [diamond, crown, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [berries, berries, berries, hat, plum, berries, hat, plum, berries],
        [berries, berries, berries, plum, berries, hat, plum, berries, hat],
        [diamond, crown, hat, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [crown, diamond, banana, hat, plum, berries, hat, plum, berries],
        [crown, diamond, hat, plum, berries, hat, plum, berries, hat],
        [diamond, crown, berries, hat, plum, berries, hat, plum, berries],
      ],
      payout: 0,
      winningLine: [0],
    },
    {
      combination: [
        [banana, banana, banana, hat, plum, berries, hat, plum, berries],
        [banana, diamond, hat, plum, berries, hat, plum, berries, hat],
        [diamond, banana, banana, hat, plum, berries, hat, plum, berries],
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
};

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
      [diamond, banana, berries, berries, plum, diamond, hat, plum, crown],
      [crown, diamond, plum, crown, berries, plum, diamond, hat, plum],
      [berries, hat, diamond, diamond, crown, hat, berries, diamond, hat],
    ],
    payout: 100,
    winningLine: [4],
  },
  {
    combination: [
      [crown, banana, plum, berries, plum, diamond, hat, plum, crown],
      [crown, banana, plum, crown, berries, plum, diamond, hat, plum],
      [crown, hat, diamond, diamond, crown, hat, berries, diamond, hat],
    ],
    payout: 50,
    winningLine: [1],
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
      [berries, hat, hat, plum, crown, hat, berries, plum, diamond],
      [plum, hat, hat, berries, plum, diamond, hat, crown, berries],
      [plum, berries, hat, hat, diamond, crown, berries, plum, hat],
    ],
    payout: 20,
    winningLine: [3],
  },
  {
    combination: [
      [diamond, hat, hat, plum, crown, hat, berries, plum, diamond],
      [plum, hat, banana, berries, plum, diamond, hat, crown, berries],
      [hat, berries, plum, hat, diamond, crown, berries, plum, hat],
    ],
    payout: 20,
    winningLine: [5],
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
      [hat, berries, hat, plum, hat, diamond, berries, crown, hat],
      [hat, plum, hat, crown, berries, plum, diamond, crown, hat],
      [hat, crown, hat, hat, diamond, berries, hat, crown, banana],
    ],
    payout: 40,
    winningLine: [1, 3],
  },
  {
    combination: [
      [diamond, banana, banana, plum, hat, diamond, berries, crown, hat],
      [plum, banana, plum, crown, berries, plum, diamond, crown, hat],
      [banana, banana, plum, hat, diamond, berries, hat, crown, banana],
    ],
    payout: 8,
    winningLine: [2, 5],
  },
  {
    combination: [
      [banana, plum, plum, plum, hat, diamond, berries, crown, hat],
      [banana, plum, plum, crown, berries, plum, diamond, crown, hat],
      [banana, plum, plum, hat, diamond, berries, hat, crown, banana],
    ],
    payout: 12,
    winningLine: [1, 2, 3],
  },
  {
    combination: [
      [berries, plum, banana, plum, hat, diamond, berries, crown, hat],
      [berries, plum, banana, crown, berries, plum, diamond, crown, hat],
      [berries, plum, banana, hat, diamond, berries, hat, crown, banana],
    ],
    payout: 12,
    winningLine: [1, 2, 3],
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
    winningLine: [1, 2, 4, 5],
  },
  {
    combination: [
      [plum, plum, plum, plum, hat, crown, plum, diamond, hat],
      [plum, plum, plum, berries, diamond, plum, hat, crown, diamond],
      [plum, plum, plum, berries, crown, hat, plum, diamond, berries],
    ],
    payout: 20,
    winningLine: [1, 2, 3, 4, 5],
  },
];
