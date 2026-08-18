import { Injectable, signal } from '@angular/core';
import { Project } from '../../issues/models/project.model';

export interface UserOption {
  id: number;
  displayName: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  readonly projects = signal<Project[]>([
    { id: 1, key: 'PRJ', name: 'Mini-Jira' },
    { id: 2, key: 'LAB', name: 'Home Lab' },
  ]);

  readonly users = signal<UserOption[]>([
    { id: 1, displayName: 'Dawid' },
    { id: 2, displayName: 'Anna' },
    { id: 3, displayName: 'Piotr' },
  ]);
}
