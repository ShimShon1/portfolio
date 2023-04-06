import navLogo from "../assets/logoNav.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className="flex w-full items-center justify-between  md:m-auto">
      <a href="/">
        <img className="w-12 md:w-14" src={navLogo} alt="" />
      </a>

      <AiOutlineMenu className="md:hidden" size={"32px"} color="white" />

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
