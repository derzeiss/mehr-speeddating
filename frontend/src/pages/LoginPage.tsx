import { type FormEvent } from "react";
import z from "zod";
import { Button } from "../components/Button";
import { ErrorMsg } from "../components/ErrorMsg";
import { TextBox } from "../components/TextBox";
import { useFormBucket } from "../utils/useFormBucket";

const loginSchema = z.object({
  ticketId: z
    .string("Bitte gib deine ID an")
    .length(9, "Deine Ticket-Id sollte genau 9 Zeichen lang sein."),
});

export const LoginPage = () => {
  const { register, errorFor, formData } = useFormBucket({
    initialData: { ticketId: "" },
    schema: loginSchema,
  });

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-pure mx-auto w-full max-w-md p-8">
      <div className="text-xl">Willkommen beim MEHR26</div>
      <h1 className="app-title">Speeddating</h1>
      <form onSubmit={handleSubmit}>
        <TextBox
          label="Deine MEHR Ticket-ID"
          placeholder="9-stellige Ticket-ID"
          className="mt-10"
          {...register("ticketId")}
        />
        {errorFor("ticketId", (msg) => (
          <ErrorMsg className="mt-2">{msg}</ErrorMsg>
        ))}
        <Button className="mt-5 w-full">Einloggen</Button>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};
