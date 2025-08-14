import React from 'react';
import { SummaryStats } from 'type/stats';
import StatsCard from './StatsCard';

import { LuUsers, LuUserCheck, LuClock4, LuChartLine } from 'react-icons/lu';

interface DashboardStatsProps {
  stats: SummaryStats;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatsCard
        title="전체 참여자"
        value={stats.inProgress}
        unit="명"
        icon={<LuUsers />}
      />
      <StatsCard title="과제 완료" value={2} unit="명" icon={<LuUserCheck />} />
      <StatsCard title="과제 진행 중" value={2} unit="명" icon={<LuClock4 />} />
      <StatsCard
        title="평균 점수"
        value={stats.averageScore}
        unit="%"
        icon={<LuChartLine />}
      />
    </div>
  );
};

export default DashboardStats;
