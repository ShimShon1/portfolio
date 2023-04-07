import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectDataType } from "../data/projectsData";
export default function Project({
  data,
  reversed,
}: {
  data: projectDataType;
  reversed: boolean;
}) {
  return (
    <div className="  rounded-md border-t bg-gray-100 text-left shadow-md  shadow-sky-800 md:grid md:grid-cols-4">
      {/* project details */}

      <div className="col-span-2 grid  p-4">
        <h1 className="lora self-center text-lg font-bold lg:text-xl xl:text-2xl">
          {data.name}
        </h1>

        <p className="  mb-2  text-sm leading-7 md:mb-0 xl:text-lg">
          {data.para}
        </p>
        <span className=" text-sm font-light xl:text-base">
          <hr />
          Was made {data.wasMade}
        </span>
        <div className="mt-4 flex space-x-4 self-center xl:text-lg">
          <a
            className="flex w-fit  items-center gap-1 rounded-sm  bg-sky-800 px-2 py-1 text-gray-50  hover:bg-sky-700"
            href={data.gitLink}
            target={"_blank"}
          >
            Code <FiGithub />
          </a>
          <a
            className="py-  flex  w-fit items-center gap-1 rounded-sm bg-gray-200 px-2 hover:bg-gray-300 "
            href={data.liveLink}
            target={"_blank"}
          >
            Live <FiExternalLink />
          </a>
        </div>
      </div>

      {/* project display */}

      <div
        className={` ${
          reversed && "md:order-first"
        }   self-center p-3 md:col-span-2`}
      >
        <a
          href={data.liveLink}
          target={"_blank"}
          aria-label={data.name + " live"}
        >
          {" "}
          <img
            className="  border object-contain  shadow-md "
            src={data.img}
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
