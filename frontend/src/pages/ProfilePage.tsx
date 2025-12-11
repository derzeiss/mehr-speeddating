import { Form } from "react-router";
import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";
import { useState, type FormEvent } from "react";

const getValuesFromEvent = (ev: FormEvent<HTMLFormElement>) => {
  const formData = new FormData(ev.currentTarget);
  const values = Object.fromEntries(formData);
  return values;
};

const validate = (number: string) => {
  console.log(number);
  if (!number) {
    return "bitte nummer angeben";
  } else {
    if (number.length < 9) {
      return "zu wenig ziffern";
    }
  }
  return null;
};

export const ProfilePage = () => {
  const [number, setNumber] = useState("");
  // const [errorMessage, setErrorMessage] = useState<string | null>("");
  // setErrorMessage(validate(number));
  const errorMessage = validate(number);

  return (
    <div className="bg-pure mx-auto w-full max-w-md space-y-8 p-8">
      <div>
        <h1 className="h1">Profil</h1>
        <div className="text-xl">Nutze die Zeit</div>
      </div>
      <TextBox
        label="Profilbild"
        description="Lade ein Foto hoch"
        type="file"
      />
      <Form onSubmit={(ev) => console.log(getValuesFromEvent(ev))}>
        <TextBox
          name="code"
          label="Deine Handynummer"
          description="bitte 9 stellig"
          value={number}
          onChange={(ev) => setNumber(ev.target.value)}
        />
        {errorMessage}
      </Form>
      <TextBox
        label="Deine Code"
        description="Lade ein Foto hoch"
        type="file"
      />
      <Button className="w-full"> Fertig- los gehts </Button>
    </div>
  );
};
