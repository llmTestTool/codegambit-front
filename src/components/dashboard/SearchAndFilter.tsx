import React, { useState, useRef, useEffect } from 'react';
import { LuSearch, LuFilter } from 'react-icons/lu';
import { ApplicantStatus } from 'type/Status';
import { Slider } from 'components/ui/slider';

interface SearchAndFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onApplyFilters?: (filters: { status: string; score: string }) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  searchTerm,
  onSearchChange,
  onApplyFilters,
}) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<string>('ALL');
  const [range, setRange] = useState<number[]>([0, 100]);

  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (panelRef.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    if (open) document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);

  const handleApply = () => {
    const scoreString =
      range[0] === 0 && range[1] === 100 ? 'ALL' : `${range[0]}-${range[1]}`;
    onApplyFilters?.({ status, score: scoreString });
    setOpen(false);
  };

  const handleReset = () => {
    setStatus('ALL');
    setRange([0, 100]);
  };

  return (
    <div className="relative mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            className="inline-flex items-center rounded-md border-none bg-neutral-100 px-4 py-2 text-xs text-neutral-900 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none sm:text-sm"
          >
            <LuFilter className="mr-2 h-4 w-4" />
            필터
          </button>
        </div>
      </div>

      {open && (
        <div
          ref={panelRef}
          className="absolute right-0 z-20 mt-2 w-full max-w-sm rounded-md border border-gray-100 bg-white p-4 shadow-lg sm:right-0 sm:mt-3"
        >
          <div className="mb-3 flex items-center justify-start">
            <div className="text-sm font-medium text-gray-900">필터</div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                상태
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:ring-1 focus:ring-blue-500"
              >
                <option value="ALL">전체 상태</option>
                <option value={ApplicantStatus.COMPLETED}>
                  {ApplicantStatus.COMPLETED}
                </option>
                <option value={ApplicantStatus.IN_PROGRESS}>
                  {ApplicantStatus.IN_PROGRESS}
                </option>
                <option value={ApplicantStatus.PENDING}>
                  {ApplicantStatus.PENDING}
                </option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                점수 범위
              </label>
              <div className="mb-2 text-xs text-gray-500">
                {range[0]} - {range[1]}
              </div>

              <Slider
                value={range}
                min={0}
                max={100}
                step={1}
                onValueChange={(v: number[] | number) => {
                  if (Array.isArray(v)) setRange(v as number[]);
                  else setRange([v as number, range[1]]);
                }}
              />
            </div>

            <div className="flex items-center justify-between gap-2 pt-2">
              <button
                onClick={handleReset}
                className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-gray-50"
              >
                초기화
              </button>
              <div className="ml-auto flex items-center gap-2">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-700 hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  onClick={handleApply}
                  className="rounded-md bg-neutral-800 px-3 py-2 text-sm text-white hover:bg-neutral-900"
                >
                  적용
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
