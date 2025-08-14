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
  onApplyFilters?: (filters: { status: string; score: string }) => void;
}

const ApplicantList: React.FC<ApplicantListProps> = ({
  applicants,
  paginationData,
  searchTerm,
  onSearchChange,
  onPageChange,
  onApplyFilters,
}) => {
  return (
    <div>
      <div className="mb-6">
        <p className="text-lg font-semibold text-neutral-900 sm:text-2xl">
          전체 지원자 목록
        </p>
      </div>
      <SearchAndFilter
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        onApplyFilters={onApplyFilters}
      />
      <div className="mb-6 rounded-lg border border-slate-200 bg-white">
        <ApplicantTable applicants={applicants} />
      </div>
      <Pagination
        pagination={paginationData.pagination}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ApplicantList;
