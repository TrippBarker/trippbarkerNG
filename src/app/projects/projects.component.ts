import { Component } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS } from '../mockData/mock-projects';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectService } from '../services/project.service';
import { MessageService } from '../services/messages.service';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [
    NgFor,
    NgIf,
    UpperCasePipe,
    FormsModule,
    ProjectDetailComponent
  ]
})
export class ProjectsComponent {
  ngOnInit(): void {
    this.getProjects();
  }
  constructor(private projectService: ProjectService, private messageService: MessageService) {}
  projects: Project[] = [];
  selectedProject?: Project;
  getProjects(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects)
  }
  onSelect(project: Project): void {
    this.selectedProject = project;
    this.messageService.add(`ProjectsComponent: Selected project id=${project.id}`);
  }
}
