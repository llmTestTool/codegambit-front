import { useRoutes } from "react-router-dom";

import MainLayout from '../layout/MainLayout';
import DashBoardPage from "@page/applicant/DashBoardPage";
import AssignListPage from '../page/AssignList/AssignListPage';
import AssignEditPage from '../page/AssignEditPage';


const MainRoutes = () => {
  const routes = useRoutes([
    {

      path: "/", element: <MainLayout />,
      children: [
        { path: '/dashboard', element: <DashBoardPage />},
        { path: '/assignlist', element: <AssignListPage />},
        { path: '/assignedit', element: <AssignEditPage />},
      ]
    },
  ]);

  return routes;
};
export default MainRoutes;