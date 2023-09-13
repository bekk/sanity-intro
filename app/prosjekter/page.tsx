import NextLink from "next/link";

import { Link } from "@nextui-org/link";

import { ProjectList } from "../components/projects/ProjectList";

const Prosjekter = () => {
  return (
    <main className="py-12 px-4 md:px-12  bg-gradient-to-b from-blue-100 to-white">
      <section className="container">
        <Link
          as={NextLink}
          href={"/"}
          size="lg"
          color="secondary"
          underline="always"
          className="my-4"
        >
          Tilbake
        </Link>
        <h1 className="text-4xl font-extrabold mb-8 text-blue-900">
          Prosjekter
        </h1>
        <div className="md:px-8">
          <ProjectList />
        </div>
      </section>
    </main>
  );
};

export default Prosjekter;
