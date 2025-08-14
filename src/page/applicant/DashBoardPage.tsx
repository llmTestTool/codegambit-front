import React, { useState } from 'react';
import { summaryStats, fetchPaginatedApplicants } from 'mock/stats';
import { DashboardStats, ApplicantList } from '../../components/dashboard';

const DashBoardPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const pageSize = 8;

  const paginatedData = fetchPaginatedApplicants(currentPage, pageSize);

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
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          지원자 수행 현황
        </h1>
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
