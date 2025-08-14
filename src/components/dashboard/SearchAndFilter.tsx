import React from 'react';
import { LuSearch, LuFilter } from 'react-icons/lu';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <div className="mb-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex-1">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <LuSearch className="h-5 w-5 text-neutral-700" />
            </div>
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="block w-full rounded-md border border-neutral-300 bg-white py-2 pr-3 pl-10 text-sm leading-5 placeholder-gray-500 shadow-xs focus:border-blue-500 focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex-shrink-0">
          <button className="inline-flex items-center rounded-md border-none bg-neutral-100 px-4 py-2 text-xs text-neutral-900 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:text-sm">
            <LuFilter className="mr-2 h-4 w-4" />
            필터
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
