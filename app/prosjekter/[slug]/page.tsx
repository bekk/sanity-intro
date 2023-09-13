import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarDays } from "react-icons/fa6";

import { getProject } from "@/utils/projects";
import { Link } from "@nextui-org/link";
import { urlForImage } from "@/sanity/utils/image";
import { PortableText } from "@portabletext/react";
import { componentsConfig } from "@/sanity/utils/portableText";
import { Chip } from "@nextui-org/chip";

const Project = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  if (!project) {
    return notFound();
  }

  const getChipVariant = (index: number) => {
    const variants = [
      "primary",
      "secondary",
      "success",
      "danger",
      "warning",
    ] as const;
    return variants[index % variants.length];
  };

  const { projectName, shortDescription, image, content, date, keywords } =
    project;

  const readableDate = date
    ? new Date(date).toLocaleDateString("no-nb", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : undefined;

  return (
    <main className="container w-full md:w-5/6 lg:w-3/5 mx-auto  py-2 pb-8 md:py-12 px-4 ">
      <Link
        as={NextLink}
        href={"/prosjekter"}
        size="lg"
        color="secondary"
        underline="always"
        className="my-4 mb-16"
      >
        Tilbake
      </Link>
      <div className="w-full flex flex-col items-center justify-center mb-8 gap-4">
        <div className="w-full md:w-3/4 relative aspect-video mb-4">
          <Image
            src={urlForImage(image).url()}
            alt="Project image"
            fill
            className="aspect-video rounded-xl object-cover"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-blue-900">{projectName}</h1>
        <div className="flex flex-wrap flex-row justify-center gap-2 ">
          {/* date */}
          {readableDate && (
            <Chip
              startContent={<FaCalendarDays />}
              radius="sm"
              variant="faded"
              className="mr-2"
            >
              {readableDate}
            </Chip>
          )}
          {/* Keywords */}
          {keywords &&
            keywords.map((keyword, i) => (
              <Chip
                key={keyword}
                radius="sm"
                variant="flat"
                color={getChipVariant(i)}
              >
                {keyword}
              </Chip>
            ))}
        </div>
      </div>

      <section className="flex flex-col md:flex-row gap-12">
        {/* Meta section */}
        <div className="w-full: md:w-1/4 flex flex-col gap-4 ">
          <div>
            <h2 className="text-2xl font-semibold text-blue-900">
              Kort om prosjektet
            </h2>
            <p>{shortDescription}</p>
          </div>
        </div>
        {/* Content section */}
        {content && (
          <div className="w-full md:w-3/4 ">
            <PortableText value={content} components={componentsConfig} />
          </div>
        )}
      </section>
    </main>
  );
};

export default Project;
