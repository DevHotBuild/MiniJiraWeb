import { Component, computed, Signal, signal } from '@angular/core';
import { Issue, IssueStatus } from '../models/issue.model';
import { IssueRowComponent } from '../issue-row/issue-row.component';

@Component({
  selector: 'app-issue-list',
  imports: [IssueRowComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent {
  protected readonly issues = signal<Issue[]>([
    {
      id: 1,
      key: 'PRJ-1',
      title: 'Repo configuration',
      description: 'Init repo and CI',
      type: 'Task',
      status: 'Done',
      priority: 'Medium',
      assign: 'Dawid',
      createdAt: '2026-08-01',
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
      createdAt: '2026-08-03',
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

  protected readonly statusFilter = signal<IssueStatus | 'All'>('All');

  protected readonly statusOptions: (IssueStatus | 'All')[] = [
    'All',
    'Backlog',
    'Done',
    'InProgress',
    'InReview',
    'Todo',
  ];

  protected setFilter(status: IssueStatus | 'All') {
    this.statusFilter.set(status);
  }

  protected readonly unassignedOnly = signal(false);

  protected readonly filteredIssues = computed(() => {
    const filter = this.statusFilter();
    const unassigned = this.unassignedOnly();

    return this.issues()
      .filter((issue) => filter === 'All' || issue.status === filter)
      .filter((issue) => !unassigned || issue.assign == null);
  });

  protected readonly visibleCount = computed(() => this.filteredIssues().length);
}
