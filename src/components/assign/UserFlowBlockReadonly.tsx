import React from 'react';

interface Props {
  title: string;
  stepsCount?: number;
  children?: React.ReactNode;
}

const UserFlowBlockReadonly: React.FC<Props> = ({
  title,
  stepsCount,
  children,
}) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-white p-4 px-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-lg font-semibold text-neutral-900 sm:text-2xl">
            {title}
          </p>
          {typeof stepsCount === 'number' && (
            <span className="rounded-lg border border-neutral-200 px-2 py-1 text-xs font-medium text-neutral-900">
              {stepsCount} Steps
            </span>
          )}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UserFlowBlockReadonly;
