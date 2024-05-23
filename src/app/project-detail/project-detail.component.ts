import { Component, Input } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Project } from '../interfaces/project';
import { Location } from '@angular/common';
import { ProjectService } from '../services/project.service';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { db } from '../../environments/environment';
import { doc, setDoc, getDoc, addDoc, collection, updateDoc, getDocs, limit, query, where, and, or } from 'firebase/firestore';
import { ProjectDetail } from '../interfaces/project-detail';

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
  };

  details = new Array<ProjectDetail>;

  constructor( private route: ActivatedRoute, private router: Router ) {}
  async ngOnInit() {
    await this.getProject();
  }

  async getProject(){
    const projectRef = (this.route.snapshot.paramMap.get('ref'));
    if (projectRef){
      const projectDoc = await getDoc(doc(db, 'project', projectRef));
      const detailsRef = await getDoc(doc(db, 'projectDetails', projectRef));
      this.project.name = projectDoc.get('id');
      this.project.ref = projectDoc.get('ref');
      this.project.technologies = projectDoc.get('technologies');
      this.project.name = projectDoc.get('name');
      this.project.link = projectDoc.get('link');
      this.project.description = projectDoc.get('desc');
      let i = 1;
      while (detailsRef.get('sect-'+i)){
        let formatText = detailsRef.get('sect-'+i)['text'] as string;
        formatText = formatText.replaceAll('/n', '\n');
        formatText = formatText.replaceAll('/t', '\t');
        console.log(formatText);
        let detail: ProjectDetail = {
          header: detailsRef.get('sect-'+i)['header'],
          text: formatText,
          contentRef: detailsRef.get('sect-'+i)['contentRef'],
          contentType: detailsRef.get('sect-'+i)['contentType'],
          contentCaption: detailsRef.get('sect-'+i)['contentCaption'],
          contentExt: detailsRef.get('sect-'+i)['contentExt']
        }
        this.details.push(detail);
        this.getContent(detail.contentRef, detail.contentType, detail.contentCaption, detail.contentExt);
        i++;
      }
    }
  }

  async getContent(contentRef: string, contentType: string, contentCaption: string, contentExt: string){
    if (contentType != 'null'){
      const storage = getStorage();
      const storageRef = ref(storage, 'project/'+this.project.ref+"/"+contentRef+contentExt);
      getDownloadURL(storageRef).then((url) => {
        if (contentType == 'img'){
          let content = document.createElement('img');
          content.src = url;
          content.alt = contentCaption;
          content.style.setProperty('max-width', '50rem');
          content.style.setProperty('text-align', 'center');
          document.getElementById(contentRef+'Content')?.appendChild(content);
        } else if (contentType == 'vid'){
          let content = document.createElement('video');
          content.src = url;
          content.controls = true;
          document.getElementById(contentRef+'Content')?.appendChild(content);
        }
        let caption = document.createElement('p');
        caption.textContent = contentCaption;
        caption.style.setProperty('font-style', 'italic');
        caption.style.setProperty('font-size', '.75rem');
        caption.style.setProperty('margin', '.5rem');
        caption.style.setProperty('color', 'grey');
        document.getElementById(contentRef+'Content')?.appendChild(caption);
      })
    }
  }
}
