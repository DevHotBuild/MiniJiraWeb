import { Injectable, signal } from '@angular/core';
import { Project } from '../../issues/models/project.model';

@Injectable({
  providedIn: 'root',
})

export interface UserOption{
    id: number;
    displayName: string
}

export class ProjectService {
  readonly projects = signal<Project[]>([
    {id: 1, key:"PRJ", name:"Mini-Jira"},
    {id: 2, key:"LAB", name:"Home Lab"},
  ]);
  
  readonly users = signal<UserOption[]>([
    {id: 1, displayName: "Dawid"},
    {id: 2, displayName: "Anna"},
    {id: 3, displayName: "Piotr"},
  ]);
}