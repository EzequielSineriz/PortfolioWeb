import { Component } from '@angular/core';
import { PROJECTS } from './project';
import { ProjectsCard } from './projects-card/projects-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectsCard,],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = PROJECTS;

}
