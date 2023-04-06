import React, { useState } from "react";
import Project from "./Project";
import { projectsData, projectDataType } from "../data/projectsData";
import Title from "./Title";

export default function Projects() {
  let projectElms: JSX.Element[] = [];

  for (let i = 0; i < projectsData.length; i++) {
    let notReversed = i % 2 == 0;
    // isReversed = false;
    projectElms.push(
      <Project data={projectsData[i]} reversed={!notReversed} />
    );
    console.log("hey");
  }
  return (
    <section className="space-y-6 lg:space-y-10">
      <Title>Projects</Title>
      {projectElms}
    </section>
  );
}
