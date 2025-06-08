import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApplicationGroup } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductivityService {
  private applicationGroups: ApplicationGroup[] = [
    { id: 1, name: 'Education', idleTimeConfiguration: 'No Idle Time', isProductive: false },
    { id: 2, name: 'Email', idleTimeConfiguration: 'Default', isProductive: true },
    { id: 3, name: 'Entertainment', idleTimeConfiguration: 'Default', isProductive: true },
    { id: 4, name: 'Marketing', idleTimeConfiguration: 'Default', isProductive: true },
    { id: 5, name: 'News', idleTimeConfiguration: 'Default', isProductive: true },
    { id: 6, name: 'Office Apps', idleTimeConfiguration: 'No Idle Time', isProductive: true }
  ];

  getApplicationGroups(): Observable<ApplicationGroup[]> {
    return of(this.applicationGroups);
  }

  updateApplicationGroup(group: ApplicationGroup, isProductive: boolean): Observable<ApplicationGroup[]> {
    const index = this.applicationGroups.findIndex(g => g.name === group.name);
    if (index !== -1) {
      this.applicationGroups[index].isProductive = isProductive;
    }
    return of(this.applicationGroups);
  }
}