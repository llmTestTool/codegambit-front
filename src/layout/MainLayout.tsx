import Sidebar from './Sidebar';
import FullContainer from './FullContainer';

const MainLayout = () => {
    return (
      <div className="flex flex-row min-h-screen">
          <Sidebar />

          <main className="flex-1 p-6">
              <FullContainer />
          </main>
      </div>
    )
}

export default MainLayout;