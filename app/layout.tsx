import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { FC, PropsWithChildren } from "react";

import { Providers } from "./providers";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Min portfolio",
  description: "En samling av mine prosjekter",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="no">
      <body className={inter.className}>
        <Providers>
          <div className="light text-foreground min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
