"use client";
import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";

import { Project } from "@/utils/projects";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { urlForImage } from "@/sanity/utils/image";

export const ProjectCard: FC<Project> = ({
  projectName,
  shortDescription,
  image,
  slug,
  date,
  keywords,
}) => {
  const readableDate = date
    ? new Date(date).toLocaleDateString("no-nb", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : undefined;

  return (
    <li>
      <Card
        className="bg-white/[0.85] rounded-lg"
        as={NextLink}
        href={`/prosjekter/${slug?.current}`}
      >
        <CardHeader>
          <div className="w-full flex justify-center max-h-60">
            {image && (
              <Image
                src={urlForImage(image).url()}
                alt="Project image"
                width={500}
                height={300}
                className="object-cover rounded-xl"
              />
            )}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <span className="text-blue-900 text-xl font-semibold mb-1">
            {projectName}
          </span>
          <span className="mb-1 text-gray-500">{readableDate}</span>
          {keywords && (
            <span className="mb-1 text-blue-800/75">{keywords.join(", ")}</span>
          )}
          <span className="line-clamp-3">{shortDescription}</span>
        </CardBody>
      </Card>
    </li>
  );
};
