import type { FC } from "react";
import { NavLink, type LinkProps } from "react-router";

export const NavButton: FC<LinkProps> = (props) => {
  return (
    <NavLink
      {...props}
      className="bg-pure nav-btn active:bg-heaven flex h-14 items-center justify-center px-4 text-sm font-semibold transition-colors active:transition-none"
    />
  );
};
