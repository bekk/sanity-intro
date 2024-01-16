import NextLink from "next/link";
import { FC } from "react";

import { Project, getProjects } from "@/utils/projects";

import { ProjectCard } from "./ProjectCard";

interface Props {
  projects?: Project[];
}
export const ProjectList: FC<Props> = async ({ projects }) => {
  if (!projects) {
    return null;
  }

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none">
      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </ul>
  );
};
