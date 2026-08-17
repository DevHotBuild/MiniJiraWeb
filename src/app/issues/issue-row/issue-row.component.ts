import { Component, input } from '@angular/core';
import { Issue } from '../models/issue.model';
import { StatusBadgeComponent } from '../../shared/status-badge/status-badge.component';
import { RelativeTimePipe } from '../../shared/pipes/relative-time-pipe';

@Component({
  selector: 'tr[app-issue-row]',
  imports: [StatusBadgeComponent, RelativeTimePipe],
  templateUrl: './issue-row.component.html',
  styleUrl: './issue-row.component.css',
})
export class IssueRowComponent {
  readonly issue = input.required<Issue>();
}
