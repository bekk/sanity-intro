import NextLink from "next/link";
import { FC } from "react";

import { getProjects } from "@/utils/projects";

import { ProjectCard } from "./ProjectCard";

interface Props {
  /** Limits the amount of projects displayed in the section */
  limit?: number;
}
export const ProjectList: FC<Props> = async ({ limit }) => {
  const projects = await getProjects();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none">
      {projects.slice(0, limit).map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </ul>
  );
};
