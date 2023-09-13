import groq from "groq";
import type { Image, PortableTextBlock, Slug } from "sanity";

import { client } from "@/sanity/utils/client";

export interface Project {
  _id: string;
  projectName: string;
  shortDescription: string;
  image: Image;
  slug: Slug;
  keywords?: string[];
  date?: string;
  content?: PortableTextBlock[];
}

export const getProjects = async () => {
  const query = groq`*[_type == 'project']`;

  return client.fetch<Project[]>(query, undefined, {
    next: { revalidate: 0 },
  });
};

export const getProject = async (slug: string) => {
  const query = groq`*[_type == 'project' && slug.current == $slug][0]`;

  return client.fetch<Project | null>(
    query,
    { slug },
    {
      next: { revalidate: 0 },
    }
  );
};
