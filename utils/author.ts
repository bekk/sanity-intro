import groq from "groq";
import type { Image } from "sanity";

import { client } from "@/sanity/utils/client";

interface Author {
  name: string;
  bio: string;
  image?: Image;

  socials?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const query = groq`*[_type == 'author'][0]`;

export const getAuthor = async () => {
  return await client.fetch<Author | null>(query, undefined, {
    next: { revalidate: 0 },
  });
};
