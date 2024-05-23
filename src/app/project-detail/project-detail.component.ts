import { Component, Input } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Project } from '../interfaces/project';
import { Location } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { ref } from 'firebase/storage';
import { db } from '../../environments/environment';
import { doc, setDoc, getDoc, addDoc, collection, updateDoc, getDocs, limit, query, where, and, or } from 'firebase/firestore';

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
  project: Project = {
    id: '',
    ref: '',
    technologies: new Array<string>,
    name: '',
    link: '',
    description: ''
  }
  constructor( private route: ActivatedRoute, private router: Router ) {}
  async ngOnInit() {
    await this.getProject();
  }

  async getProject(){
    const projectRef = (this.route.snapshot.paramMap.get('ref'));
    if (projectRef){
      const projectDoc = await getDoc(doc(db, 'project', projectRef));
      this.project.name = projectDoc.get('id');
      this.project.ref = projectDoc.get('ref');
      this.project.technologies = projectDoc.get('technologies');
      this.project.name = projectDoc.get('name');
      this.project.link = projectDoc.get('link');
      this.project.description = projectDoc.get('desc');
    }
  }
}
