import { Routes } from '@angular/router';
import { AdminLayoutComponent } from '@snovasys/timechamp-demo-header-and-sidenav';
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
