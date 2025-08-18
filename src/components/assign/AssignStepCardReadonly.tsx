import React, { useState } from 'react';
import { AssignStep } from 'type/assign';
import ImageModal from '../ui/ImageModal';

interface Props {
  step: AssignStep;
  index: number;
}

const AssignStepCardReadonly: React.FC<Props> = ({ step, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              <div className="mt-1 h-48 max-h-48 overflow-y-auto text-sm text-slate-500 whitespace-pre-line border border-gray-200 rounded p-2 bg-gray-50">
                {step.description}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col sm:w-48 sm:flex-none">
            <div className="mb-2 text-sm text-slate-500">Screenshot</div>
            <div 
              className="relative w-full cursor-pointer" 
              style={{ paddingTop: '56.25%' }}
              onClick={() => step.screenshot && setIsModalOpen(true)}
            >
              {step.screenshot ? (
                <img
                  src={step.screenshot}
                  alt={`Screenshot for ${step.title}`}
                  className="absolute inset-0 h-full w-full rounded object-contain hover:opacity-90 transition-opacity bg-white"
                />
              ) : (
                <div className="absolute inset-0 rounded bg-neutral-50 flex items-center justify-center text-neutral-400 text-xs">
                  No screenshot
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {step.screenshot && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          src={step.screenshot}
          alt={`Screenshot for ${step.title}`}
        />
      )}
    </div>
  );
};

export default AssignStepCardReadonly;
