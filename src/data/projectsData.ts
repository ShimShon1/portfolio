import cw from "../assets/projectsSs/cw.webp";
import p from "../assets/projectsSs/p.webp";
import cs from "../assets/projectsSs/cs.webp";
import bs from "../assets/projectsSs/bs.webp";

export type projectDataType = {
  id: number;
  name: string;
  para: string;
  gitLink: string;
  liveLink: string;
  wasMade: string;
  img: string;
};

export let projectsData: projectDataType[] = [
  {
    id: 1,
    name: "CryptoWatch",
    para: "CryptoWatch allows you to view data about CryptoCurrency Coins and exchanges, using the coingecko api to receive the data.",
    gitLink: "https://github.com/ShimShon1/CryptoWatch",
    liveLink: "https://crypto-watch-eight.vercel.app/",
    wasMade: "using React, Tailwindcss and TypeScript",
    img: cw,
  },
  {
    id: 2,
    name: "Peeper",
    para: "Peeper is a social media app that allows the user to post and interact with the posts of others. .",
    gitLink: "https://github.com/ShimShon1/peeper",
    liveLink: "https://peeper.vercel.app/",
    wasMade: "using Firebase, React and Tailwindcss",
    img: p,
  },
  {
    id: 3,
    name: "Clothing Shop",
    para: "A Clothing Shop site, the user can browse, filter and add clothings to the cart",
    gitLink: "https://github.com/ShimShon1/Clothing-Shop",
    liveLink: "https://clothing-shop-nu.vercel.app/",
    wasMade: "using React and Tailwindcss ",
    img: cs,
  },
  {
    id: 4,
    name: "BattleShip",
    para: "A game of battleship written in Vanilla Javascript",
    gitLink: "https://github.com/ShimShon1/BattleShip",
    liveLink: "https://shimshon1.github.io/BattleShip/",
    wasMade: "using Vanilla Javascript and Tailwindcss",
    img: bs,
  },
];
