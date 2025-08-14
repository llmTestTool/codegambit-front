import { Link } from 'react-router-dom';
import StatusBox from './StatusBox';


const AssignListPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-900 text-xl font-bold">요구사항(과제) 관리</h3>
        <Link
          to={`/assignedit`}
          className="px-7 py-2.5 bg-gray-900 rounded-lg text-white"
        >
          + 새 과제 생성
        </Link>
      </div>

      <StatusBox total={4} ing={2} first={2} />
    </div>
  );
};

export default AssignListPage;