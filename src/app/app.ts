import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IssueListComponent } from "./issues/issue-list/issue-list.component";
import { TopbarComponent } from './shared/topbar/topbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IssueListComponent, TopbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
