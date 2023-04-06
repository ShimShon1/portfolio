import navLogo from "../assets/logoNav.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Nav() {
  let [collapsed, setCollapsed] = useState(false);
  return (
    <nav className="flex w-full items-center justify-between  md:m-auto">
      <a href="/">
        <img className="w-12 md:w-14" src={navLogo} alt="" />
      </a>

      <AiOutlineMenu
        onClick={() => setCollapsed(!collapsed)}
        className="md:hidden"
        size={"32px"}
        color="white"
      />

      {/* collapseable */}
      {collapsed === true && (
        <ul
          className=" absolute left-0 top-0 flex h-screen w-screen flex-col gap-12 bg-sky-700 bg-opacity-90   p-20 text-center text-4xl text-gray-50"
          onClick={() => setCollapsed(!collapsed)}
        >
          <li>
            {" "}
            <a href="#about">About</a>{" "}
          </li>
          <hr />
          <li>
            <a href="#projects">Projects</a>
          </li>
          <hr />
          <li>
            <a href="#contact">Contact</a>
          </li>
          <hr />
        </ul>
      )}

      <ul className="hidden gap-4 text-xl font-semibold text-gray-50 md:flex lg:gap-5">
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
