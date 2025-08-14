import React from 'react';
import { Applicant } from 'type/stats';
import { ApplicantStatus } from 'type/Status';

interface ApplicantTableProps {
  applicants: Applicant[];
}

const ApplicantTable: React.FC<ApplicantTableProps> = ({ applicants }) => {
  const getStatusBadge = (status: ApplicantStatus) => {
    switch (status) {
      case ApplicantStatus.COMPLETED:
        return 'bg-green-200 text-green-800';
      case ApplicantStatus.IN_PROGRESS:
        return 'bg-sky-200 text-sky-700 ';
      case ApplicantStatus.PENDING:
        return 'bg-amber-200 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-sky-500';
    if (score >= 50) return 'text-amber-400';
    return 'text-red-600';
  };

  return (
    <div className="hidden overflow-hidden rounded-lg lg:block">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-base font-medium tracking-wider text-neutral-900 uppercase">
              지원자
            </th>
            <th className="px-6 py-3 text-left text-base font-medium tracking-wider text-neutral-900 uppercase">
              과제
            </th>
            <th className="px-6 py-3 text-left text-base font-medium tracking-wider text-neutral-900 uppercase">
              상태
            </th>
            <th className="px-6 py-3 text-left text-base font-medium tracking-wider text-neutral-900 uppercase">
              점수
            </th>
            <th className="px-6 py-3 text-left text-base font-medium tracking-wider text-neutral-900 uppercase">
              보기
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 bg-white">
          {applicants.map((applicant) => (
            <tr key={applicant.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-zinc-950">
                  {applicant.name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="max-w-xs truncate text-base text-zinc-950">
                  {applicant.assignmentTitle}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex rounded-md px-2 py-1 text-xs font-medium ${getStatusBadge(applicant.status)}`}
                >
                  {applicant.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className={`text-base ${getScoreColor(applicant.score)}`}>
                  {applicant.score}%
                </div>
              </td>
              <td className="px-6 py-4 text-base whitespace-nowrap text-neutral-900">
                {applicant.details}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantTable;
