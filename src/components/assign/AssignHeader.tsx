import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Assign } from 'type/assign';

import { LuArrowLeft, LuPencil, LuDownload, LuGlobe } from 'react-icons/lu';

interface Props {
  assign: Assign;
}

const AssignHeader: React.FC<Props> = ({ assign }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-500"
        >
          <LuArrowLeft className="mr-1 inline" /> 과제 목록
        </button>
        <div className="flex items-center justify-between">
          <div className="flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className="flex min-w-0 flex-col items-start gap-1">
              <span className="inline-flex items-center rounded-md border-none bg-amber-200 px-2 py-1 text-xs font-medium text-amber-700">
                초안
              </span>
              <div className="flex min-w-0 items-baseline">
                <p className="mr-4 min-w-0 truncate text-lg font-semibold text-neutral-900 sm:text-2xl">
                  {assign.title}
                </p>
                <button className="ml-2 text-sm text-neutral-900 hover:text-gray-600">
                  <LuPencil className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto sm:flex-shrink-0">
              <button className="flex items-center rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm hover:bg-gray-50">
                <LuDownload className="h-4 w-4" />
                <span className="ml-2">저장</span>
              </button>
              <button className="flex items-center rounded-md bg-neutral-900/50 px-3 py-2 text-sm text-white hover:bg-neutral-800">
                <LuGlobe className="h-4 w-4" />
                <span className="ml-2">내보내기</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-1 truncate text-xs text-gray-500">
          {assign.tags?.join(' • ')}
        </div> */}
      </div>
    </div>
  );
};

export default AssignHeader;
