import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { PaginatedResponse } from 'type/stats';

interface PaginationProps {
  pagination: PaginatedResponse<any>['pagination'];
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  onPageChange,
}) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const { totalPages, currentPage: current } = pagination;

    // Previous 버튼
    buttons.push(
      <button
        key="prev"
        onClick={() => onPageChange(current - 1)}
        disabled={!pagination.hasPrevPage}
        className={`flex items-center px-3 py-2 text-sm font-medium ${
          pagination.hasPrevPage
            ? 'text-neutral-900 hover:text-gray-900'
            : 'cursor-not-allowed text-gray-400'
        }`}
      >
        <FaChevronLeft className="mr-1 inline" />
        Previous
      </button>
    );

    // 페이지 번호들
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`mx-1 rounded-lg px-3 py-2 text-sm font-medium ${
            i === current
              ? 'border border-neutral-200 text-black shadow-sm'
              : 'text-neutral-900 hover:bg-gray-100 hover:text-gray-900'
          }`}
        >
          {i}
        </button>
      );
    }

    // Next 버튼
    buttons.push(
      <button
        key="next"
        onClick={() => onPageChange(current + 1)}
        disabled={!pagination.hasNextPage}
        className={`flex items-center px-3 py-2 text-sm font-medium ${
          pagination.hasNextPage
            ? 'text-neutral-900 hover:text-gray-900'
            : 'cursor-not-allowed text-gray-400'
        }`}
      >
        Next
        <FaChevronRight className="ml-1 inline" />
      </button>
    );

    return buttons;
  };

  return (
    <div className="bg-white px-4 py-3 sm:px-6">
      <div className="flex items-center justify-center">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Pagination;
