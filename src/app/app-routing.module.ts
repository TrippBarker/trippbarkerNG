import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { BikeComponent } from './bike/bike.component';
import { BragComponent  } from './brag/brag.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'project/:ref', component: ProjectDetailComponent },
  { path: 'bike', component: BikeComponent },
  { path: 'brag/:year', component: BragComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }