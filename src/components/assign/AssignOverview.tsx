import React from 'react';
import { Assign } from 'type/assign';
import { LuPencil, LuPlus } from 'react-icons/lu';

interface Props {
  assign: Assign;
  title?: string;
  stepsCount?: number;
}

const AssignOverview: React.FC<Props> = ({
  assign,
  title = 'Screen Flows & Logic',
  stepsCount,
}) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-4 px-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold text-gray-900 sm:text-2xl">
            {title}
          </p>
          {typeof stepsCount === 'number' && (
            <span className="rounded-full border px-2 py-0.5 text-xs text-gray-500">
              {stepsCount} Steps
            </span>
          )}
          <button className="text-xs text-neutral-900 hover:text-gray-600">
            <LuPencil className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div>
          <button className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm text-white">
            <LuPlus className="h-4 w-4" />
            플로우 추가
          </button>
        </div>
      </div>
      <div className="mb-2 text-sm font-medium text-gray-700">설명</div>
      <textarea
        readOnly
        value={assign.overview}
        className="min-h-28 w-full resize-none rounded-md border border-slate-300 bg-white p-3 text-sm text-gray-600 shadow-xs"
      />
    </div>
  );
};

export default AssignOverview;
