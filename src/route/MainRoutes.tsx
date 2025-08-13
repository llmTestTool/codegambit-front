import { useRoutes } from "react-router-dom";

const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <div>Welcome to Code Gambit!</div>
    },
  ]);

  return routes;
};
export default MainRoutes;