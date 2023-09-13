/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { ReactElement } from "react";

import { Studio } from "./studio";

// Set the right `viewport`, `robots` and `referer` meta tags
export { metadata } from "next-sanity/studio/metadata";

export const StudioPage = () => {
  return <Studio />;
};

StudioPage.getLayout = (page: ReactElement) => page;

export default StudioPage;
