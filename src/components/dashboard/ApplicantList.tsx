import React from 'react';
import { Applicant, PaginatedResponse } from 'type/stats';
import SearchAndFilter from './SearchAndFilter';
import ApplicantTable from './ApplicantTable';
import ApplicantCardList from './ApplicantCardList';
import Pagination from './Pagination';

interface ApplicantListProps {
  applicants: Applicant[];
  paginationData: PaginatedResponse<Applicant>;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onPageChange: (page: number) => void;
}

const ApplicantList: React.FC<ApplicantListProps> = ({
  applicants,
  paginationData,
  searchTerm,
  onSearchChange,
  onPageChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-4 sm:px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">전체 지원자 목록</h2>
      </div>

      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <ApplicantTable applicants={applicants} />
      <ApplicantCardList applicants={applicants} />

      <Pagination
        pagination={paginationData.pagination}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ApplicantList;
