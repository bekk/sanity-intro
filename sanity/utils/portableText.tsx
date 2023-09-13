import {
  PortableTextReactComponents,
  PortableTextTypeComponent,
} from "@portabletext/react";
import Image from "next/image";

import { urlForImage } from "./image";

const PortableTextImage: PortableTextTypeComponent = ({ value }) => {
  return (
    <div className="w-full flex justify-center max-h-24 my-16">
      <Image
        src={urlForImage(value).url()}
        alt="Project image"
        width={500}
        height={300}
        className="object-cover rounded-xl"
      />
    </div>
  );
};

export const componentsConfig: Partial<PortableTextReactComponents> = {
  types: {
    image: PortableTextImage,
  },
  block: {
    h1: ({ children }) => (
      <h2 className="text-3xl text-blue-900/[0.8]">{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl text-blue-900/[0.8]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl text-blue-900/[0.8]">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg text-blue-900/[0.8]">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-md text-blue-900/[0.8]">{children}</h5>
    ),
    normal: ({ children }) => <p className="mb-4 ">{children}</p>,
  },
};
