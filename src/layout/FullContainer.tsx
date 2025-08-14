import { Outlet } from 'react-router-dom';

const FullContainer = () => {
  return (
    <div className="container py-4">
      <Outlet />
    </div>
  );
};

export default FullContainer;
