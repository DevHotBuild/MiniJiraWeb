import { Component, input } from '@angular/core';
import { Issue } from '../models/issue.model';
import { StatusBadgeComponent } from '../../shared/status-badge/status-badge.component';

@Component({
  selector: 'tr[app-issue-row]',
  imports: [StatusBadgeComponent],
  templateUrl: './issue-row.component.html',
  styleUrl: './issue-row.component.css',
})
export class IssueRowComponent {
  readonly issue = input.required<Issue>();
}
