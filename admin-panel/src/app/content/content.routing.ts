import { Routes } from '@angular/router';

import { InstitutesComponent } from './institutes/institutes.component';

export const ContentRoutes: Routes = [
        {
            path: '',
            children: [{
                path: 'institutes',
                component: InstitutesComponent
            }]
        }
    ];
