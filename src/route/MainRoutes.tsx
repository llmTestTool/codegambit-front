import { useRoutes } from "react-router-dom";

import DashBoardPage from "@page/applicant/DashBoardPage";
import MainLayout from '../layout/MainLayout';
import AssignEditPage from '../page/AssignEditPage';
import AssignListPage from '../page/AssignList/AssignListPage';
import AssignViewPage from '../page/AssignViewPage';
import ReportPage from "../page/report/ReportPage";


const MainRoutes = () => {
  const routes = useRoutes([
    {
      path: "/", element: <MainLayout />,
      children: [
        { path: '/dashboard', element: <DashBoardPage />},
        { path: '/assignlist', element: <AssignListPage />},
        { path: '/assignedit', element: <AssignEditPage />},
        { path: '/report/1', element: <ReportPage />},
        { path: "/assign/1", element: <AssignViewPage />}
      ]
    }
  ]);

  return routes;
};
export default MainRoutes;