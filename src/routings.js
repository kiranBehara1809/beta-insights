import { Navigate, useRoutes } from "react-router-dom";
import Home from "./layout/home";
import { BASE_ROUTE_PATH } from "./constants/project";
import PageNotFound from "./common/components/pageNotFound";
import MasterHome from "./modules/masters/masterHome";
import Login from "./modules/auth/login";
import SettingsHome from "./modules/settings/settingsHome";

export default function Routings() {
  const routes = useRoutes([
    {
      path: "",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: BASE_ROUTE_PATH,
      element: <Home />,
      children: [
        {
          path: "home",
          element: <>ki</>,
        },
        {
          path: "masters",
          element: <MasterHome />,
        },
        {
          path: "settings",
          element: <SettingsHome />,
        },
        {
          path: "*",
          element: (
            <>
              <PageNotFound />
            </>
          ),
        },
      ],
    },
    {
      path: "*",
      element: (
        <>
          <PageNotFound />{" "}
        </>
      ),
    },
  ]);

  return routes;
}