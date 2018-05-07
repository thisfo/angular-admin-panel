import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutesComponent } from './institutes/institutes.component';
import { InstituteComponent } from './institute/institute.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', redirectTo: '/taskboard', pathMatch: 'full' },
  { path: 'institutes', component: InstitutesComponent },
  { path: 'institute/:id', component: InstituteComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: 'taskboard', component: TaskboardComponent },
  { path: 'task/:id', component: TaskComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
