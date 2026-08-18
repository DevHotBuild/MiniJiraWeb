export type ProjectRole = 'Viewer' | 'Developer' | 'Lead' | 'Admin';

export interface Project {
  id: number;
  key: string; // Prefiks zgłoszeń
  name: string;
}

export interface ProjectMember {
  userid: number;
  displayName: string;
  role: ProjectRole;
}
