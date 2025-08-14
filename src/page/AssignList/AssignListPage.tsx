import { Link } from 'react-router-dom';
import StatusBox from './StatusBox';
import { CiSearch } from 'react-icons/ci';
import { FiFilter } from "react-icons/fi";
import AssignCard from './AssignCard';


const AssignListPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-900 text-xl font-bold">요구사항(과제) 관리</h3>
        <Link
          to={`/assignedit`}
          className="px-7 py-2.5 bg-gray-900 rounded-lg text-white">
          + 새 과제 생성 </Link>
      </div>

      <StatusBox total={4} ing={2} first={2} />

      <div className="flex flex-col py-20 space-y-4">
        <div className="text-xl font-bold text-gray-900">과제 목록</div>
        <div className="flex flex-0 space-x-3">
          <div className="flex items-center w-96 h-8 bg-white border border-gray-300 rounded-lg">
            <CiSearch className="ml-2 mr-2" />
            <span className="text-gray-900 text-sm font-medium">검색</span>
          </div>
          <div className="flex items-center px-1 w-20 h-8 bg-gray-100 rounded-lg">
            <FiFilter className="ml-2 mr-2" />
            <span className="text-gray-900 text-sm font-medium">필터</span>
          </div>
        </div>
        <AssignCard
          id={1}
          status="done"
          title="E-commerce Dashboard"
          description="Build a responsive admin panel to manage store."
          owner="김민수"
          updatedAt="24.1.15 수정됨"
          flows={2}
          assets={1523}
          versions={297}
        />

      </div>
    </div>
  );
};

export default AssignListPage;