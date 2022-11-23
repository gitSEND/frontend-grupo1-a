import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const pagesRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'profesor',
      },
    ],
  },
];
