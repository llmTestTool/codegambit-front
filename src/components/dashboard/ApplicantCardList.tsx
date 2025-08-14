import React from 'react';
import { Applicant } from 'type/stats';
import { ApplicantStatus } from 'type/Status';

interface ApplicantCardListProps {
  applicants: Applicant[];
}

const ApplicantCardList: React.FC<ApplicantCardListProps> = ({
  applicants,
}) => {
  const getStatusBadge = (status: ApplicantStatus) => {
    switch (status) {
      case ApplicantStatus.COMPLETED:
        return 'bg-green-100 text-green-800 border-green-200';
      case ApplicantStatus.IN_PROGRESS:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case ApplicantStatus.PENDING:
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="lg:hidden">
      {applicants.map((applicant) => (
        <div
          key={applicant.id}
          className="border-b border-gray-200 px-4 py-4 sm:px-6"
        >
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-medium text-gray-900">
                {applicant.name}
              </h3>
              <p className="truncate text-sm text-gray-500">
                {applicant.assignmentTitle}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className={`inline-flex rounded-md border px-2 py-1 text-xs font-medium ${getStatusBadge(applicant.status)}`}
              >
                {applicant.status}
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <div
              className={`text-sm font-medium ${getScoreColor(applicant.score)}`}
            >
              점수: {applicant.score}%
            </div>
            <div className="text-xs text-gray-500">{applicant.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicantCardList;
