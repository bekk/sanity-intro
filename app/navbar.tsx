import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { useRouter } from "next/navigation";

import { Link } from "@nextui-org/link";

export const Navbar = () => {
  return (
    <NextUiNavbar position="static">
      <NavbarBrand>
        <Link href="/" as={NextLink}>
          <p className="font-bold text-inherit">Portfolio</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/studio" color="foreground" as={NextLink}>
            Til studio
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUiNavbar>
  );
};
