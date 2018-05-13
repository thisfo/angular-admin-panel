import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const AppRoutes: Routes = [{
    path: '',
    component: FullComponent,
    children: [{
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'apps',
      loadChildren: './apps/apps.module#AppsModule'
    }
  ]
  }, {
    path: '',
    component: AppBlankComponent,
    children: [{
      path: 'auth',
      loadChildren: './auth/auth.module#AuthModule'
    }]
  }, {
    path: '**',
    redirectTo: 'auth/404'
  }];
