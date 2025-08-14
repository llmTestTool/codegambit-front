import { ApplicantStatus } from "./Status";

export interface SummaryStats {
  totalApplicants: number;
  completed: number;
  inProgress: number;
  averageScore: number;
}

export interface Applicant {
  id: number;
  name: string;
  assignmentTitle: string;
  status: ApplicantStatus;
  score: number;
  details: string;
}

export interface PaginatedResponse<T> {
  pagination: {
    currentPage: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  data: T[];
}