import { assignCardDto } from '../../type/assignlist/assignCardDto';
import { STATUS_CONFIG } from '../../type/assignlist/assignCardDto';
import { LuPen, LuUser } from 'react-icons/lu';
import { LuCalendar } from "react-icons/lu";
import { LuPencil } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { Link } from 'react-router-dom';

const AssignCard = ({ status, title, description, owner, updatedAt, flows, assets, versions }: assignCardDto) => {
  const statusStyle = STATUS_CONFIG[status];

  return (
    <div className="flex flex-col p-6 min-w-80 max-w-96 rounded-2xl border border-gray-400 gap-4 mt-2">
      <span className={`px-3 py-1 rounded-lg w-fit text-sm font-medium ${statusStyle.color}`}>
        {statusStyle.label}
      </span>

      <div className="space-y-10">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div className="flex flex-col text-sm text-gray-500 space-y-4">
          <div className="flex items-center">
            <LuUser className="mr-2" />
            <div>{owner}</div>
          </div>

          <div className="flex items-center">
            <LuCalendar className="mr-2" />
            <div>{updatedAt}</div>
          </div>
        </div>
      </div>

      <div className="w-full border border-gray-100 my-8"></div>

      <div className="flex justify-between text-sm font-medium">
        <div className="flex flex-col">
          <div>Flows</div>
          <div>{flows}</div>
        </div>
        <div className="flex flex-col">
          <div>Assets</div>
          <div>{assets}</div>
        </div>
        <div className="flex flex-col">
          <div>Versions</div>
          <div>{versions}</div>
        </div>

      </div>

      <div className="flex justify-between items-center mt-8 space-x-3">
        <Link to={`/assignedit`} className="flex items-center justify-center w-full h-10 bg-gray-900 text-white rounded-lg">
          <LuPencil className="mr-2" />
          수정
        </Link>
        <LuEye className="mr-2 text-2xl" />
      </div>
    </div>
  );
};

export default AssignCard;