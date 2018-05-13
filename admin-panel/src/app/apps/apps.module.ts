import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AppsRoutes } from './apps.routing';
import { MailComponent } from './mail/mail.component';
import { MaterialDesignModule } from '../material-design-module';

/* DEMOCONTENT */
import { DialogDataExampleDialog } from './mail/mail.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    FlexLayoutModule,
    MaterialDesignModule,
    PerfectScrollbarModule
  ],
  declarations: [
    MailComponent
  ]
})
export class AppsModule { }
