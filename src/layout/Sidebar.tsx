import { CiSearch } from 'react-icons/ci';
import { LuContactRound } from 'react-icons/lu';
import { LuClipboardList } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const sideItems = [
  { label: '전체 지원자', Img: LuContactRound, path: '/dashboard' },
  { label: '요구사항 확인', Img: LuClipboardList, path: '/assignlist' },
];

const Sidebar = () => {
  return (
    <aside className="min-h-screen w-60 bg-slate-50">
      <div className="flex items-center justify-center space-x-4 px-6 py-9">
        <h3 className="text-2xl font-bold text-gray-900">CodeGambit</h3>
      </div>

      <div className="flex items-center space-x-8 px-6">
        <div className="flex h-8 w-full items-center rounded-lg border border-gray-300 bg-white">
          <CiSearch className="mr-2 ml-2" />
          <span className="text-sm font-medium text-gray-900">검색</span>
        </div>
      </div>

      <nav className="flex flex-col space-y-2.5 px-6 py-8">
        {sideItems.map(({ label, Img, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center rounded-lg px-4 py-2 transition-colors ${
                isActive
                  ? 'bg-gray-900 font-medium text-white'
                  : 'text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Img
                  className={`text-lx mr-2 ${isActive ? 'text-white' : 'text-gray-900'}`}
                />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
