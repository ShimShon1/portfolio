import navLogo from "../assets/logoNav.png";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  return (
    <nav className="flex justify-between items-center w-full  md:m-auto">
      <a href="/">
        <img className="w-12 md:w-14" src={navLogo} alt="" />
      </a>

      <AiOutlineMenu className="md:hidden" size={"32px"} color="white" />

      <ul className="md:flex gap-4 lg:gap-5 text-gray-200 font-semibold hidden text-xl">
        <li>
          {" "}
          <a href="">About</a>{" "}
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
