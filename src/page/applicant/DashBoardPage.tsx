import React, { useState, useMemo } from 'react';
import { summaryStats, allApplicants } from 'mock/stats';
import { DashboardStats, ApplicantList } from '../../components/dashboard';
import type { Applicant, PaginatedResponse } from 'type/stats';

const DashBoardPage = () => {
  const PAGE_SIZE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [scoreFilter, setScoreFilter] = useState<string>('ALL');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleApplyFilters = (filters: { status: string; score: string }) => {
    setStatusFilter(filters.status);
    setScoreFilter(filters.score);
    setCurrentPage(1);
  };

  const filteredAll = useMemo(() => {
    return allApplicants.filter((applicant) => {
      // search
      if (
        !(
          applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          applicant.assignmentTitle
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      ) {
        return false;
      }

      // status
      if (statusFilter !== 'ALL' && applicant.status !== statusFilter)
        return false;

      // score
      if (scoreFilter !== 'ALL') {
        const [minStr, maxStr] = scoreFilter.split('-');
        const min = Number(minStr);
        const max = Number(maxStr);
        if (!Number.isFinite(min) || !Number.isFinite(max)) return true;
        if (applicant.score < min || applicant.score > max) return false;
      }

      return true;
    });
  }, [searchTerm, statusFilter, scoreFilter]);

  const totalItems = filteredAll.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PAGE_SIZE));
  const page = Math.max(1, Math.min(currentPage, totalPages));
  const startIndex = (page - 1) * PAGE_SIZE;
  const pageData = filteredAll.slice(startIndex, startIndex + PAGE_SIZE);

  const paginationData: PaginatedResponse<Applicant> = {
    pagination: {
      currentPage: page,
      pageSize: PAGE_SIZE,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
    data: pageData,
  };

  return (
    <div>
      <div className="mb-6">
        <p className="text-neural-900 text-xl font-semibold sm:text-2xl">
          지원자 수행 현황
        </p>
      </div>

      <DashboardStats stats={summaryStats} />

      <ApplicantList
        applicants={pageData}
        paginationData={paginationData}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onPageChange={handlePageChange}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default DashBoardPage;
