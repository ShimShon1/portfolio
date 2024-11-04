import cw from "../assets/projectsSs/cw.webp";
import p from "../assets/projectsSs/p.webp";
import bs from "../assets/projectsSs/bs.webp";
import pf from "../assets/projectsSs/pf.webp";

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
    name: "PetFlex",
    para: "PetFlex is a fullstack social media app for pet sharing. It allowes users to post their pets and interact with others.",
    gitLink: "https://github.com/ShimShon1/petflex",
    liveLink: "https://petflex.vercel.app/",
    wasMade: "using React, Express, TypeScript and MongoDB",
    img: pf,
  },
  {
    id: 2,
    name: "CryptoWatch",
    para: "CryptoWatch allows you to view data about Crypto Coins and exchanges, using the coingecko api to receive the data.",
    gitLink: "https://github.com/ShimShon1/CryptoWatch",
    liveLink: "https://crypto-watch-eight.vercel.app/",
    wasMade: "using React, Tailwindcss and TypeScript",
    img: cw,
  },
  {
    id: 3,
    name: "Peeper",
    para: "Peeper is a social media app that allows the user to post and interact with the posts of others.",
    gitLink: "https://github.com/ShimShon1/peeper",
    liveLink: "https://peeper.vercel.app/",
    wasMade: "using Firebase, React and Tailwindcss",
    img: p,
  },

  {
    id: 4,
    name: "BattleShip",
    para: "A game of battleship written in Vanilla Javascript.",
    gitLink: "https://github.com/ShimShon1/BattleShip",
    liveLink: "https://shimshon1.github.io/BattleShip/",
    wasMade: "using Vanilla Javascript and Tailwindcss",
    img: bs,
  },
];
