import cw1 from "../assets/projectsSs/cw1.png";
import p1 from "../assets/projectsSs/p1.png";
import cs1 from "../assets/projectsSs/cs1.png";
import bs1 from "../assets/projectsSs/bs1.png";

export type projectDataType = {
  name: string;
  reversed: boolean;
  para: string;
  gitLink: string;
  liveLink: string;
  wasMade: string;
  img: string;
};

export let projectsData: projectDataType[] = [
  {
    name: "CryptoWatch",
    reversed: false,
    para: "CryptoWatch allows you to view data about CryptoCurrency Coins and exchanges, using the coingecko api to receive the data.",
    gitLink: "https://github.com/ShimShon1/CryptoWatch",
    liveLink: "https://crypto-watch-eight.vercel.app/",
    wasMade: "using React, Tailwindcss and TypeScript",
    img: cw1,
  },
  {
    name: "Peeper",
    reversed: false,
    para: "Peeper is a social media app that allows the user to post and interact with the posts of others. .",
    gitLink: "https://github.com/ShimShon1/peeper",
    liveLink: "https://peeper.vercel.app/",
    wasMade: "using Firebase, React and Tailwindcss",
    img: p1,
  },
  {
    name: "Clothing Shop",
    reversed: false,
    para: "A Clothing Shop site, the user can browse, filter and add clothings to the cart",
    gitLink: "https://github.com/ShimShon1/Clothing-Shop",
    liveLink: "https://clothing-shop-nu.vercel.app/",
    wasMade: "using React and Tailwindcss ",
    img: cs1,
  },
  {
    name: "BattleShip",
    reversed: false,
    para: "A game of battleship!",
    gitLink: "https://github.com/ShimShon1/BattleShip",
    liveLink: "https://shimshon1.github.io/BattleShip/",
    wasMade: "using Vanilla Javascript and Tailwindcss",
    img: bs1,
  },
];
