import React from 'react';

interface StatsCardProps {
  title: string;
  value: number | string;
  unit: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, unit, icon }) => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="ml-4 flex-1">
          <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
          <dd className="flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">{value}</div>
            <div className="ml-1 text-sm text-gray-500">{unit}</div>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
