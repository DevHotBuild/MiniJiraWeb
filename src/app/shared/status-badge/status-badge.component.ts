import { Component, input } from '@angular/core';
import { IssueStatus } from '../../issues/models/issue.model';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.component.html',
  styleUrl: './status-badge.component.css',
})
export class StatusBadgeComponent {
  readonly status = input.required<IssueStatus>();
}
