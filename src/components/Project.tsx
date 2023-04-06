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
        <h3 className="lora text-lg font-bold lg:text-xl">{data.name}</h3>
        <p className=" text-sm  leading-5 md:leading-7 lg:text-lg">
          {data.para}
        </p>
        <span className=" text-sm font-light lg:text-base">
          <hr />
          Was made {data.wasMade}
        </span>
        <div className="mt-4 flex space-x-4 self-center lg:text-lg">
          <a
            className="flex w-fit  items-center gap-1 rounded-sm  bg-sky-800 px-2 py-1  text-gray-50"
            href={data.gitLink}
          >
            Code <FiGithub />
          </a>
          <a
            className="flex  w-fit items-center gap-1 rounded-sm bg-gray-200 px-2 py-1 "
            href={data.liveLink}
          >
            Live <FiExternalLink />
          </a>
        </div>
      </div>

      {/* project display */}

      <div className={` ${reversed && "md:order-first"}   p-3 md:col-span-2`}>
        <img
          className=" w-full border   shadow-md lg:h-96"
          src={data.img}
          alt=""
        />
      </div>
    </div>
  );
}
