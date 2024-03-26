import { Component, Input } from '@angular/core';
import { PROJECTS } from '../mockData/mock-projects';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../interfaces/project';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
  imports: [
    NgFor,
    NgIf,
    UpperCasePipe,
    FormsModule
  ]
})
export class ProjectDetailComponent {
  @Input() project?: Project;
}
