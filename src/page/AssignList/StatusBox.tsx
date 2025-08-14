import { statusBoxDto } from '../../type/assignlist/statusBoxDto';
import { IconType } from 'react-icons';
import { FiFileText } from 'react-icons/fi';
import { LuFileClock } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";

const StatusBox = ({ total, ing, first }: statusBoxDto) => {
  const statusItems: { label: string; Img: IconType; num: number }[] = [
    { label: '전체 과제', Img: FiFileText, num: total },
    { label: '진행 중인 과제', Img: LuFileClock, num: ing },
    { label: '초안', Img: FiEdit, num: first },
  ];

  return (
    <div className="flex w-full gap-6">
      {statusItems.map(({ label, Img, num }) => (
        <div key={label} className="flex flex-col flex-1 p-6 min-w-52 max-w-lg h-40 rounded-lg border border-gray-200 justify-between">
          <span className="font-bold text-gray-900 text-2xl">{label}</span>
          <div className="flex flex-0 justify-between items-end">
            <Img className="text-gray-900 text-2xl" />
            <div className="flex items-end">
              <div className="text-6xl font-bold text-gray-900">{num}</div>
              <div className="text-xl ml-1">개</div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatusBox;
