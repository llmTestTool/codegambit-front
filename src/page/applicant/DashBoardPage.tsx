import React, { useState } from 'react';
import { summaryStats, fetchPaginatedApplicants } from 'mock/stats';
import { DashboardStats, ApplicantList } from '../../components/dashboard';

const DashBoardPage = () => {
  const PAGE_SIZE = 8;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const paginatedData = fetchPaginatedApplicants(currentPage, PAGE_SIZE);

  const filteredApplicants = paginatedData.data.filter(
    (applicant) =>
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.assignmentTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <div className="mb-8">
        <p className="text-neural-900 text-xl font-semibold sm:text-2xl">
          지원자 수행 현황
        </p>
      </div>

      <DashboardStats stats={summaryStats} />

      <ApplicantList
        applicants={filteredApplicants}
        paginationData={paginatedData}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DashBoardPage;
