import React from 'react';
import { Assign } from 'type/assign';

import { LuPencil, LuDownload, LuGlobe } from 'react-icons/lu';

interface Props {
  assign: Assign;
}

const AssignHeader: React.FC<Props> = ({ assign }) => {
  return (
    <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-sm text-gray-500">← 과제 목록</div>
        <div className="flex items-center gap-3">
          <h1 className="truncate text-lg font-semibold text-gray-900 sm:text-2xl">
            {assign.title}
          </h1>
          <span className="inline-flex items-center rounded-full border border-yellow-100 bg-yellow-50 px-2 py-0.5 text-xs font-medium text-yellow-700">
            초안
          </span>
          <button className="ml-2 text-sm text-gray-400 hover:text-gray-600">
            <LuPencil className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-1 truncate text-xs text-gray-500">
          {assign.tags?.join(' • ')}
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center gap-2">
        <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <LuDownload className="h-4 w-4" />
          저장
        </button>
        <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
          <LuGlobe className="h-4 w-4" />
          내보내기
        </button>
      </div>
    </div>
  );
};

export default AssignHeader;
