import { SummaryStats, Applicant, PaginatedResponse } from "type/stats";
import { ApplicantStatus } from "type/Status";

export const summaryStats: SummaryStats = {
  totalApplicants: 12,
  completed: 7,
  inProgress: 4,
  averageScore: 84,
};

export const allApplicants: Applicant[] = [
  { id: 1, name: '김도윤', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.COMPLETED, score: 88, details: 'Basic Table Cell' },
  { id: 2, name: '차은우', assignmentTitle: 'Smart Document Summari...', status: ApplicantStatus.COMPLETED, score: 82, details: 'Basic Table Cell' },
  { id: 3, name: '최이서', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.COMPLETED, score: 93, details: 'Basic Table Cell' },
  { id: 4, name: '이지유', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.COMPLETED, score: 64, details: 'Basic Table Cell' },
  { id: 5, name: '김하린', assignmentTitle: 'Intelligent Chatbot Assistant', status: ApplicantStatus.PENDING, score: 56, details: 'Basic Table Cell' },
  { id: 6, name: '김선우', assignmentTitle: 'Intelligent Chatbot Assistant', status: ApplicantStatus.COMPLETED, score: 97, details: 'Basic Table Cell' },
  { id: 7, name: '양정원', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.IN_PROGRESS, score: 73, details: 'Basic Table Cell' },
  { id: 8, name: '최유준', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.IN_PROGRESS, score: 70, details: 'Basic Table Cell' },
  { id: 9, name: '박서아', assignmentTitle: 'Smart Document Summari...', status: ApplicantStatus.COMPLETED, score: 95, details: 'Basic Table Cell' },
  { id: 10, name: '이시우', assignmentTitle: 'Intelligent Chatbot Assistant', status: ApplicantStatus.IN_PROGRESS, score: 78, details: 'Basic Table Cell' },
  { id: 11, name: '정지안', assignmentTitle: 'AI-Powered Code Review...', status: ApplicantStatus.COMPLETED, score: 99, details: 'Basic Table Cell' },
  { id: 12, name: '황아윤', assignmentTitle: 'Smart Document Summari...', status: ApplicantStatus.IN_PROGRESS, score: 68, details: 'Basic Table Cell' },
];

export const fetchPaginatedApplicants = (
  page: number,
  pageSize: number
): PaginatedResponse<Applicant> => {
  const totalItems = allApplicants.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = allApplicants.slice(startIndex, endIndex);

  return {
    pagination: {
      currentPage: page,
      pageSize: pageSize,
      totalItems: totalItems,
      totalPages: totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
    },
    data: paginatedData,
  };
};
