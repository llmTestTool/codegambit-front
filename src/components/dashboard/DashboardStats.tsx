import React from 'react';
import { SummaryStats } from 'type/stats';
import StatsCard from './StatsCard';
import { UsersIcon, DocumentIcon, ClockIcon, ChartIcon } from './Icons';

interface DashboardStatsProps {
  stats: SummaryStats;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatsCard
        title="전체 참여자"
        value={stats.inProgress}
        unit="명"
        icon={<UsersIcon />}
      />
      <StatsCard
        title="과제 완료"
        value={2}
        unit="명"
        icon={<DocumentIcon />}
      />
      <StatsCard
        title="과제 진행 중"
        value={2}
        unit="명"
        icon={<ClockIcon />}
      />
      <StatsCard
        title="평균 점수"
        value={stats.averageScore}
        unit="%"
        icon={<ChartIcon />}
      />
    </div>
  );
};

export default DashboardStats;
