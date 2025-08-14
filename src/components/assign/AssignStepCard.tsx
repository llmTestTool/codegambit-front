import React from 'react';
import { LuPencil, LuTrash } from 'react-icons/lu';
import { AssignStep } from 'type/assign';

interface Props {
  step: AssignStep;
  index: number;
}

const AssignStepCard: React.FC<Props> = ({ step, index }) => {
  return (
    <div className="mb-6">
      <div className="rounded-lg border bg-white p-4">
        <div className="flex items-start gap-4">
          {/* numbered badge inside the border */}
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black font-bold text-white">
              {index}
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-1 truncate text-xs text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="min-h-[140px] rounded-md border bg-gray-50 p-3 text-sm text-gray-600">
                {step.description}
              </div>
              <div className="flex min-h-[140px] items-center justify-center rounded-md border bg-gray-50">
                {step.screenshot ? (
                  <img
                    src={step.screenshot}
                    alt={step.title}
                    className="max-h-36 object-contain"
                  />
                ) : (
                  <div className="text-xs text-gray-400">No Screenshot</div>
                )}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <button
                aria-label="edit step"
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <LuPencil className="h-4 w-4" />
              </button>
              <button
                aria-label="delete step"
                className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              >
                <LuTrash className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="ml-4 hidden text-xs text-gray-500 md:flex md:flex-col md:items-end md:justify-start">
            <div>Screenshot</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignStepCard;
