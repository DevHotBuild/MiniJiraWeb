export interface Comment {
  id: number;
  issueId: number;
  author: string;
  body: string;
  createdAt: string;
  editedAt?: string | null;
}
