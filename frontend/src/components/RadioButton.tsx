import type { ComponentProps, FC } from "react";
import { cx } from "../utils/cx";

interface YesNoRadioProps extends ComponentProps<"input"> {
  isYes: boolean;
}
export const YesNoRadio: FC<YesNoRadioProps> = ({
  isYes,
  children,
  className,
  ...props
}) => {
  return (
    <label
      className={cx(
        "hover:bg-incense-100 cursor-pointer rounded-md border-3 px-6 py-3 text-center font-bold transition-colors",
        {
          "border-pray text-pray has-checked:bg-pray has-checked:text-pure":
            !isYes,
          "border-sacred text-sacred has-checked:bg-sacred has-checked:text-pure":
            isYes,
        },
        className,
      )}
    >
      <input
        value={isYes + ""}
        type="radio"
        className="pointer-events-none absolute opacity-0"
        {...props}
      />
      {children}
    </label>
  );
};
