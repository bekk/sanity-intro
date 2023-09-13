import NextLink from "next/link";

import { Button } from "@nextui-org/button";
import { getProjects } from "@/utils/projects";
import { Divider } from "@nextui-org/divider";

import { ProjectList } from "./ProjectList";

export const ProjectSection = async () => {
  const projects = await getProjects();

  if (!projects.length) {
    return <div className="min-h-[20vh]"></div>;
  }

  return (
    <>
      <Divider className="my-4" />
      {projects.length > 0 && (
        <section className="container flex flex-col p-4 md:p-12 gap-6">
          <h2 className="text-3xl font-extrabold mb-4 text-blue-900/[0.8]">
            Prosjekter
          </h2>
          <div className="md:px-8">
            <ProjectList limit={3} />
          </div>
          <div className="self-center">
            <Button
              as={NextLink}
              href="/prosjekter"
              color="primary"
              size="lg"
              radius="sm"
            >
              <span className="text-xl">Flere prosjekter</span>
            </Button>
          </div>
        </section>
      )}
      <Divider />
    </>
  );
};
