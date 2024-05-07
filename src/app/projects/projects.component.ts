import { Component } from '@angular/core';
import { Project } from '../interfaces/project';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectService } from '../services/project.service';
import { MessageService } from '../services/messages.service';
import { RouterLink } from '@angular/router';
import { db } from '../../environments/environment';
import { doc, setDoc, getDoc, addDoc, collection, updateDoc, getDocs, limit, query, where, and, or } from 'firebase/firestore';

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
    ProjectDetailComponent,
    RouterLink
  ],
})
export class ProjectsComponent {
  ngOnInit(): void {
    this.getProjects();
  }
  constructor(private projectService: ProjectService, private messageService: MessageService) {}
  projects = new Array<Project>();
  async getProjects() {
    const projects = await getDocs(query(collection(db, 'project')));
    projects.forEach((project) => {
      const newProject: Project = {
        id: project.id,
        ref: project.data()['ref'],
        images: project.data()['images'],
        technologies: project.data()['technologies'],
        name: project.data()['name'],
        description: project.data()['description']
      }
      this.projects.push(newProject);
    })
  }
}
