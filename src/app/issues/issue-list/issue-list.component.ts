import { Component, computed, inject, Signal, signal } from '@angular/core';
import { Issue, IssueStatus } from '../models/issue.model';
import { IssueRowComponent } from '../issue-row/issue-row.component';
import { IssueService } from '../service/issue.service';

@Component({
  selector: 'app-issue-list',
  imports: [IssueRowComponent],
  templateUrl: './issue-list.component.html',
  styleUrl: './issue-list.component.css',
})
export class IssueListComponent {
  private readonly issueService = inject(IssueService);

  protected readonly statusFilter = signal<IssueStatus | 'All'>('All');
  protected readonly unassignedOnly = signal(false);

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

  protected readonly filteredIssues = computed(() => {
    const filter = this.statusFilter();
    const unassigned = this.unassignedOnly();

    return this.issueService
      .issues()
      .filter((issue) => filter === 'All' || issue.status === filter)
      .filter((issue) => !unassigned || issue.assign == null);
  });

  protected readonly visibleCount = computed(() => this.filteredIssues().length);
}
