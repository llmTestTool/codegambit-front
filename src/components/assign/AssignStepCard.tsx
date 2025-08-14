import React from 'react';
import { LuPencil, LuTrash } from 'react-icons/lu';
import { AssignStep } from 'type/assign';

interface Props {
  step: AssignStep;
  index: number;
}

const AssignStepCard: React.FC<Props> = ({ step, index }) => {
  return (
    <div className="mb-6 min-w-0">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
            {index}
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-2 rounded-lg border border-slate-300 p-4 px-5 sm:flex-row sm:items-start">
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="min-w-0">
              <p className="truncate text-lg font-bold text-zinc-950 sm:text-xl">
                {step.title}
              </p>
              <p className="mt-1 h-48 max-h-48 truncate text-sm text-slate-500">
                {step.description}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button
                aria-label="edit step"
                className="rounded p-1 text-neutral-900 hover:bg-slate-50 hover:text-gray-600"
              >
                <LuPencil className="h-4 w-4" />
              </button>
              <button
                aria-label="delete step"
                className="rounded p-1 text-neutral-900 hover:bg-slate-50 hover:text-gray-600"
              >
                <LuTrash className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col sm:w-48 sm:flex-none">
            <div className="mb-2 text-sm text-slate-500">Screenshot</div>
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <div className="absolute inset-0 rounded bg-neutral-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignStepCard;
