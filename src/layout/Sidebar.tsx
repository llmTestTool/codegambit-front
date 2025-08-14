import { CiSearch } from "react-icons/ci";
import { LuContactRound } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

const sideItems = [
  {label: '전체 지원자', Img: LuContactRound, path: '/dashboard'},
  {label: '요구사항 확인', Img: LuClipboardList, path: '/assignlist'},
]

const Sidebar =() => {
  return(
    <aside className="w-60 min-h-screen bg-lightGray">
      <div className="px-6 py-9 flex items-center justify-center space-x-4">
        <h3 className="text-gray-900 text-2xl font-bold">CodeGambit</h3>
      </div>

      <div className="px-6 flex items-center space-x-8">
        <div className="flex items-center w-full h-8 bg-white border border-gray-300 rounded-lg">
          <CiSearch className="ml-2 mr-2" />
          <span className="text-gray-900 text-sm font-medium">검색</span>
        </div>
      </div>

      <nav className="px-6 py-8 flex flex-col space-y-2.5">
        {sideItems.map(({ label, Img, path }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-lg transition-colors ${
                isActive ? 'bg-gray-900 text-white font-medium' : 'text-gray-900'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Img className={`mr-2 text-lx ${isActive ? 'text-white' : 'text-gray-900'}`} />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;