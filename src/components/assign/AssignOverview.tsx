import React from 'react';
import { Assign } from 'type/assign';

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
    <div className="rounded-lg bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          {typeof stepsCount === 'number' && (
            <span className="rounded-full border px-2 py-0.5 text-xs text-gray-500">
              {stepsCount} Steps
            </span>
          )}
          <button className="text-xs text-gray-400 hover:text-gray-600">
            ✎
          </button>
        </div>
        <div>
          <button className="flex items-center gap-2 rounded-md bg-black px-3 py-1 text-xs text-white">
            + 플로우 추가
          </button>
        </div>
      </div>
      <textarea
        readOnly
        value={assign.overview}
        className="min-h-[72px] w-full resize-none rounded-md border border-gray-100 bg-gray-50 p-3 text-sm text-gray-600"
      />
    </div>
  );
};

export default AssignOverview;
