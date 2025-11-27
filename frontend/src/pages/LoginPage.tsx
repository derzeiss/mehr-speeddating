import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";

export const LoginPage = () => {
  return (
    <div className="bg-pure mx-auto w-full max-w-md p-8">
      <div className="text-xl">Willkommen beim MEHR26</div>
      <h1 className="app-title">Speeddating</h1>
      <TextBox
        label="Deine MEHR Ticket-ID"
        placeholder="9-stellige Ticket-ID"
        className="mt-10"
      />
      <Button className="mt-5 w-full">Einloggen</Button>
    </div>
  );
};
