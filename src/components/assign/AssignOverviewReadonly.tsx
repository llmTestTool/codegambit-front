import React from 'react';
import { Assign } from 'type/assign';

interface Props {
  assign: Assign;
  title?: string;
}

const AssignOverviewReadonly: React.FC<Props> = ({
  assign,
  title = 'Screen Flows & Logic',
}) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-4 px-6">
      <div className="mb-6">
        <p className="text-lg font-semibold text-neutral-900 sm:text-2xl">
          {title}
        </p>
      </div>
      <div className="mb-2 text-sm font-medium text-gray-700">설명</div>
      <div className="w-full rounded-md border border-slate-300 bg-gray-50 p-3 text-sm text-gray-600 whitespace-pre-line">
        {assign.overview}
      </div>
    </div>
  );
};

export default AssignOverviewReadonly;
