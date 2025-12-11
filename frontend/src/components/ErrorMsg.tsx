import type { ComponentProps, FC } from "react";
import { cx } from "../utils/cx";

export const ErrorMsg: FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cx(
        className,
        "border-pray text-pray border-2 px-2 py-3 text-sm font-semibold italic",
      )}
    />
  );
};
