import React from 'react';
import { LuPencil, LuCopy } from 'react-icons/lu';

interface Props {
  title: string;
  stepsCount?: number;
  onAddFlow?: () => void;
  children?: React.ReactNode;
}

const UserFlowBlock: React.FC<Props> = ({
  title,
  stepsCount,
  onAddFlow,
  children,
}) => {
  return (
    <div className="bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
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
        <div className="flex items-center gap-2">
          <button
            onClick={onAddFlow}
            className="inline-flex items-center gap-2 rounded-md bg-black px-3 py-1 text-xs text-white"
          >
            + 플로우 추가
          </button>
          <button
            className="rounded p-1 text-gray-400 hover:text-gray-600"
            aria-label="duplicate flow"
          >
            <LuCopy className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default UserFlowBlock;
