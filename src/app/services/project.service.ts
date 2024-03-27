import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { PROJECTS } from '../mockData/mock-projects';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(): Observable<Project[]>{
    const projects = of(PROJECTS);
    this.messageService.add('ProjectService: fetched projects');
    return projects;
  }
  getProject(id: number): Observable<Project> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = PROJECTS.find(p => p.id === id)!;
    this.messageService.add(`ProjectService: fetched project id=${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) { }
}
