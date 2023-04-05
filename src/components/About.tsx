import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function () {
  return (
    <section className=" flex min-h-[50vh] flex-col items-center  text-center  md:flex-row md:justify-between   ">
      <div
        className={`mb-4 h-64 w-64 border-spacing-6 rounded-full border-4 border-double border-blue-500  bg-my-image bg-cover bg-center md:order-last lg:h-72 lg:w-72`}
      ></div>

      <div className=" w-3/4 space-y-5 md:w-2/4 md:text-left ">
        <div className=" tracking-wider">
          <h1 className=" lora mb-0 text-5xl lg:text-6xl 2xl:text-7xl">
            Dean Effi
          </h1>
          <h3 className=" text-lg font-extralight lg:text-2xl ">
            Building Websites
          </h3>
        </div>
        <p className="mt-2 text-lg  leading-loose lg:text-xl">
          I am an inquisitive and a passionate <b>Front-End developer </b> who
          is always eager to learn{" "}
        </p>
        <div className="flex items-center justify-between pt-4 lg:justify-start lg:gap-8 lg:pr-8">
          <button className="name font-leg rounded-full border-none bg-sky-900 p-2 px-6 text-lg font-semibold tracking-wide text-gray-50 hover:bg-sky-700 lg:px-7 lg:tracking-wider">
            Contact
          </button>
          <div className="flex gap-4 ">
            <AiOutlineGithub size={32} />
            <AiOutlineLinkedin size={32} />
            <AiOutlineTwitter size={32} />
          </div>
        </div>
      </div>
    </section>
  );
}
