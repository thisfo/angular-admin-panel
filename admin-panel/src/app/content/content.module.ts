import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContentRoutes } from './content.routing';

import { InstitutesComponent } from './institutes/institutes.component';
import { InstituteComponent } from './institute/institute.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InstitutesComponent,
    InstituteComponent,
    ProjectsComponent,
    ProjectComponent,
    TaskboardComponent,
    TaskComponent
  ]
})
export class ContentModule { }
