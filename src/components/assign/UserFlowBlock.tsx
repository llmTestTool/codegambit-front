import React from 'react';
import { LuPencil, LuTrash } from 'react-icons/lu';

interface Props {
  title: string;
  assign: string;
  stepsCount?: number;
  onAddFlow?: () => void;
  children?: React.ReactNode;
}

const UserFlowBlock: React.FC<Props> = ({
  title,
  assign,
  stepsCount,
  onAddFlow,
  children,
}) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-4 px-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex w-full justify-between">
          <p className="text-lg font-semibold text-neutral-900 sm:text-2xl">
            {title}
          </p>
          <div className="flex items-center gap-2">
            {typeof stepsCount === 'number' && (
              <span className="rounded-lg border border-neutral-200 px-2 py-1 text-xs font-medium text-neutral-900">
                {stepsCount} Steps
              </span>
            )}
            <button className="text-xs text-neutral-900 hover:text-gray-600">
              <LuPencil className="ml-2 h-4 w-4" />
            </button>
            <button className="text-xs text-neutral-900 hover:text-gray-600">
              <LuTrash className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="mb-2 text-sm font-medium text-gray-700">설명</div>
      <textarea
        // readOnly
        // value={assign}
        className="min-h-28 w-full resize-none rounded-md border border-slate-300 bg-white p-3 text-sm text-neutral-900 shadow-xs"
      />
      <div>{children}</div>
    </div>
  );
};

export default UserFlowBlock;
