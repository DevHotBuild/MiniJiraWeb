import { Injectable, signal } from '@angular/core';
import { Issue } from '../models/issue.model';

@Injectable({
  providedIn: 'root',
})
@Injectable({ providedIn: 'root' })
export class IssueService {
  readonly issues = signal<Issue[]>([
    {
      id: 1,
      key: 'PRJ-1',
      title: 'Repo configuration',
      description: 'Init repo and CI',
      type: 'Task',
      status: 'Done',
      priority: 'Medium',
      assign: 'Dawid',
      createdAt: '2026-08-17',
    },
    {
      id: 2,
      key: 'PRJ-2',
      title: 'Database model',
      description: '',
      type: 'Task',
      status: 'InProgress',
      priority: 'High',
      assign: 'Dawid',
      createdAt: '2026-08-16',
    },
    {
      id: 3,
      key: 'PRJ-3',
      title: 'Login form',
      description: '',
      type: 'Feature',
      status: 'Todo',
      priority: 'High',
      assign: null,
      createdAt: '2026-08-04',
    },
    {
      id: 4,
      key: 'PRJ-4',
      title: 'Email validation fix',
      description: 'UTF-8 chars',
      type: 'Bug',
      status: 'Backlog',
      priority: 'Critical',
      assign: null,
      createdAt: '2026-08-05',
    },
    {
      id: 5,
      key: 'PRJ-5',
      title: 'Permissions review',
      description: '',
      type: 'Task',
      status: 'InReview',
      priority: 'Low',
      assign: 'Anna',
      createdAt: '2026-08-05',
    },
  ]);
}
