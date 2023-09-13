// ./src/app/studio/[[...index]]/Studio.tsx
"use client";

import { NextStudio } from "next-sanity/studio";
//  Supports the same props as `import {Studio} from 'sanity'`, `config` is required

import config from "../../../sanity.config";

export const Studio = () => <NextStudio config={config} />;
