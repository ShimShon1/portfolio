import Project from "./Project";
import { projectsData, projectDataType } from "../data/projectsData";
import Title from "./Title";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  let projectElms: JSX.Element[] = [];

  for (let i = 0; i < projectsData.length; i++) {
    let notReversed = i % 2 == 0;
    projectElms.push(
      <Project
        key={projectsData[i].id}
        data={projectsData[i]}
        reversed={!notReversed}
      />
    );
  }
  return (
    <section
      className="space-y-6 lg:space-y-10"
      id="projects"
      aria-labelledby="projects-title"
    >
      <Title name="projects" />
      {projectElms}

      <div className="m-auto flex items-center justify-center gap-2 text-xl font-semibold">
        More on my{" "}
        <a
          className="flex w-fit  items-center gap-1 rounded-sm  bg-sky-800 px-2 py-1 text-gray-50  hover:bg-sky-700"
          href="https://github.com/ShimShon1"
        >
          GitHub <FiGithub />
        </a>
      </div>
    </section>
  );
}
