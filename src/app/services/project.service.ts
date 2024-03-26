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
  constructor(private messageService: MessageService) { }
}
