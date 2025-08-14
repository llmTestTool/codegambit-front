export type AssignmentStatus = "done" | "ing" | "first";

export interface assignCardDto {
  id: number;
  status: AssignmentStatus;
  title: string;
  description: string;
  owner: string;
  updatedAt: string;
  flows: number;
  assets: number;
  versions: number;

}

export const STATUS_CONFIG: Record<AssignmentStatus, { label: string; color: string }> = {
  "done": { label: "과제 테스트 완료", color: "bg-sky-200 text-sky-700" },
  "ing": { label: "진행 중", color: "bg-green-200 text-green-700" },
  "first": { label: "초안", color: "bg-yellow-200 text-yellow-700" },
};