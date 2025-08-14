import React from 'react';
import { PaginatedResponse } from 'type/stats';

interface PaginationProps {
  pagination: PaginatedResponse<any>['pagination'];
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
  const renderPaginationButtons = () => {
    const buttons = [];
    const { totalPages, currentPage: current } = pagination;
    
    // Previous 버튼
    buttons.push(
      <button
        key="prev"
        onClick={() => onPageChange(current - 1)}
        disabled={!pagination.hasPrevPage}
        className={`px-3 py-2 text-sm ${
          pagination.hasPrevPage
            ? 'text-gray-600 hover:text-gray-900'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        Previous
      </button>
    );

    // 페이지 번호들
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-2 text-sm mx-1 rounded ${
            i === current
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
        className={`px-3 py-2 text-sm ${
          pagination.hasNextPage
            ? 'text-gray-600 hover:text-gray-900'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    );

    return buttons;
  };

  return (
    <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
      <div className="flex items-center justify-between">
        <div className="flex justify-between items-center w-full">
          <div className="text-sm text-gray-700">
            <span className="font-medium">{pagination.currentPage}</span>
            <span> / </span>
            <span className="font-medium">{pagination.totalPages}</span>
            <span> 페이지</span>
          </div>
          <div className="flex items-center space-x-1">
            {renderPaginationButtons()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
