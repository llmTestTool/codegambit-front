export interface AssignStep {
  id: number;
  title: string;
  description: string;
  screenshot?: string | null; // 향후 파일 업로드 또는 URL 연결
}

export interface Assign {
  id: number;
  title: string;
  status: 'draft' | 'published' | 'archived';
  tags?: string[];
  overview?: string;
  userFlows: UserFlow[];
}

export interface UserFlow {
  id: number;
  title: string;
  steps: AssignStep[];
}