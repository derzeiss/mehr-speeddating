import { Outlet } from "react-router";
import { NavButton } from "./components/NavButton";

export const App = () => {
  return (
    <main className="bg-incense-100 flex h-dvh flex-col">
      <div className="flex h-full items-center-safe overflow-y-auto py-8">
        <Outlet />
      </div>

      <nav>
        <div className="mx-auto grid max-w-md grid-cols-3">
          <NavButton to="/login">Login</NavButton>
          <NavButton to="/profile">Profil</NavButton>
          <NavButton to="/matches">Matches xxxxx</NavButton>
        </div>
      </nav>
    </main>
  );
};
