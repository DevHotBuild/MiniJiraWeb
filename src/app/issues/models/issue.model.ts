export type IssueStatus = 'Backlog' | 'Todo' | 'InProgress' | 'InReview' | 'Done';
export type IssuePriority = 'Low' | 'Medium' | 'High' | 'Critical';
export type IssueType = 'Bug' | 'Task' | 'Feature';

export interface Issue {
    id: number;
    key: string;
    title: string;
    description: string;
    type: IssueType;
    status: IssueStatus;
    priority: IssuePriority;
    assign: string | null;
    createdAt: string;
}