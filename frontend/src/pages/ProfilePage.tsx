import { Button } from "../components/Button";
import { TextBox } from "../components/TextBox";

export const ProfilePage = () => {
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
      <TextBox label="Dein eigener Code" description="Lade ein Foto hoch" />
      <TextBox
        label="Deine Handynummer"
        description="Lade ein Foto hoch"
        type="file"
      />
      <Button className="w-full"> Fertig- los gehts </Button>
    </div>
  );
};
