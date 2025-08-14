import React from 'react';

interface StatsCardProps {
  title: string;
  value: number | string;
  unit: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, unit, icon }) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-6">
        <div className="min-w-0">
          <dt className="truncate overflow-hidden text-lg font-semibold whitespace-nowrap text-neutral-900 sm:text-2xl">
            {title}
          </dt>
        </div>
        <div className="flex items-baseline justify-between">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center text-lg sm:text-2xl">
              {icon}
            </div>
          </div>
          <dd className="flex items-baseline">
            <div className="text-3xl font-semibold text-black sm:text-5xl">
              {value}
            </div>
            <div className="ml-1 text-base text-neutral-900 sm:text-xl">
              {unit}
            </div>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
