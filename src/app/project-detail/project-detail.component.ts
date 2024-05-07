import { Component, Input } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Project } from '../interfaces/project';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../services/project.service';

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
  constructor (
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}
  @Input() project?: Project;
  ngOnInit(): void {
  }
}
