import { useRoutes } from "react-router-dom";
import ApplicantDashboard from "@page/applicant/ApplicantDashboard";

const MainRoutes = () => {
  const routes = useRoutes([
    {
      index: true,
      element: <div>Welcome to Code Gambit!</div>
    },
    {
      path: "/applicants",
      element: <ApplicantDashboard />,
    }
  ]);

  return routes;
};
export default MainRoutes;