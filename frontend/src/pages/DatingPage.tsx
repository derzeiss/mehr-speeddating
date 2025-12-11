import type { FormEvent } from "react";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { YesNoRadio } from "../components/RadioButton";

export const DatingPage = () => {
  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const values = Object.fromEntries(formData);

    console.log("v", values);
  };

  return (
    <div className="bg-pure mx-auto w-full max-w-md p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextBox name="lkjlkjlkj" label="test" />
        <div className="flex gap-2">
          <YesNoRadio className="w-full" isYes={true} name="is-interested">
            Ja
          </YesNoRadio>
          <YesNoRadio className="w-full" isYes={false} name="is-interested">
            Nein
          </YesNoRadio>
        </div>

        <Button>Submit</Button>
      </form>
    </div>
  );
};
