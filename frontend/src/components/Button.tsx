import type { ComponentProps, FC } from "react";
import { cx } from "../utils/cx";

interface ButtonProps extends ComponentProps<"button"> {
  secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({ className, children }) => {
  return (
    <button
      className={cx(
        "bg-pray text-pure px-6 py-3 font-bold uppercase",
        className,
      )}
    >
      {children}
    </button>
  );
};
