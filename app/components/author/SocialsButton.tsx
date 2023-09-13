import NextLink from "next/link";
import { FC, ReactElement } from "react";

import { Button } from "@nextui-org/button";

interface Props {
  href: string;
  children: ReactElement;
}

export const SocialsButton: FC<Props> = ({ href, children }) => {
  return (
    <Button
      isIconOnly
      as={NextLink}
      href={href}
      variant="light"
      radius="sm"
      size="lg"
      className="text-9xl text-blue-900"
    >
      {children}
    </Button>
  );
};
