import type { ComponentProps, FC } from "react";
import { cx } from "../utils/cx";

interface TextBoxProps extends ComponentProps<"input"> {
  label: string;
  description?: string;
}

export const TextBox: FC<TextBoxProps> = ({
  className,
  label,
  description,
  ...props
}) => {
  return (
    <label className={cx(className, "block")}>
      <span className="block text-sm font-semibold tracking-wide">{label}</span>
      <span className="text-incense-500 block text-sm tracking-wide">
        {description}
      </span>
      <input className="bg-incense-100 mt-1 w-full px-4 py-3" {...props} />
    </label>
  );
};
