import { Routes } from '@angular/router';
import { ProductivityDashboardComponent } from './components/productivity-dashboard/productivity-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductivityDashboardComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];
