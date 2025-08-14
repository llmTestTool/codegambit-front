import { Assign } from 'type/assign';

export const mockAssign: Assign = {
  id: 1,
  title: 'E-commerce Dashboard Requirements',
  status: 'draft',
  tags: ['UI', 'Web', 'Dashboard'],
  overview:
    'Define user flows with step-by-step descriptions and visual screenshots',
  steps: [
    {
      id: 1,
      title: 'Login Page',
      description: 'User lands on login page with email and password fields',
      screenshot: null,
    },
    {
      id: 2,
      title: 'Credential Input',
      description: 'User enters credentials and submits',
      screenshot: null,
    },
    {
      id: 3,
      title: 'Validation Process',
      description: 'Backend validates and redirects to dashboard',
      screenshot: null,
    },
  ],
};

export const fetchAssignById = (id: number): Assign => {
  // 목데이터 반환 (동기 함수로 단순화)
  return mockAssign;
};
