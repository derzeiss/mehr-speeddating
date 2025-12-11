import { createBrowserRouter } from "react-router";
import { App } from "./App";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { DatingPage } from "./pages/DatingPage";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "dating",
        element: <DatingPage />,
      },
    ],
  },
]);
