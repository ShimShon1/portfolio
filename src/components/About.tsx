import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import AboutIcon from "./AboutIcon";

export default function () {
  return (
    <section
      aria-label="About"
      className=" flex min-h-[50vh] flex-col items-center  text-center  md:flex-row md:justify-between   "
      id={"about"}
    >
      <div
        className={`mb-4 h-64 w-64 border-spacing-6 rounded-full border-4 border-double border-blue-500   bg-my-image bg-cover bg-center md:order-last lg:h-72 lg:w-72`}
      ></div>
      <div className=" w-3/4 space-y-5 md:w-2/4 md:text-left ">
        <header>
          <div className=" tracking-wider">
            <h1 className=" lora mb-0 text-5xl lg:text-6xl 2xl:text-7xl">
              Dean Effi
            </h1>
            <h2 className=" text-lg font-extralight lg:text-2xl ">
              Building Websites
            </h2>
          </div>
        </header>
        <p className="mt-2 text-lg  leading-loose lg:text-xl">
          I am an inquisitive and a passionate <b>Web developer </b>{" "}
          who is always eager to learn{" "}
        </p>
        <div className="flex items-center justify-between pt-4 lg:justify-start lg:gap-8 lg:pr-8">
          <a
            href="#contact"
            className="name font-leg rounded-full border-none bg-sky-700 p-2 px-6 text-lg 
          font-semibold uppercase tracking-wide text-gray-50  hover:bg-sky-800 active:bg-sky-400 lg:px-7 lg:tracking-wider"
          >
            Contact
          </a>

          <div className="flex gap-4 ">
            <AboutIcon
              link={"https://github.com/ShimShon1"}
              label="github"
            >
              <AiOutlineGithub size={32} />
            </AboutIcon>

            <AboutIcon
              link={"https://twitter.com/CaptainBourbon"}
              label="twitter"
            >
              <AiOutlineTwitter size={32} />
            </AboutIcon>

            <AboutIcon
              link={
                "https://www.linkedin.com/in/dean-effi-249145271/"
              }
              label="linkedin"
            >
              <AiOutlineLinkedin size={32} />
            </AboutIcon>
          </div>
        </div>
      </div>
    </section>
  );
}
