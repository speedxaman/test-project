import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface ApplicationGroup {
  applicationGroup: string;
  categoryName: string;
  priority: string;
}
@Component({
  selector: 'app-application-group',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './application-group.component.html',
  styleUrl: './application-group.component.scss'
})
export class ApplicationGroupComponent {
searchTerm: string = '';
  isToggleEnabled: boolean = false;

  applicationGroups: ApplicationGroup[] = [
    { applicationGroup: 'Education', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Email', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Entertainment', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Marketing', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'News', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Office Apps', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Others', categoryName: 'Uncategorized', priority: '' },
    { applicationGroup: 'Social Media', categoryName: 'Uncategorized', priority: '' }
  ];

  // Filtered data based on search
  get filteredApplicationGroups(): ApplicationGroup[] {
    if (!this.searchTerm.trim()) {
      return this.applicationGroups;
    }
    
    const searchLower = this.searchTerm.toLowerCase();
    return this.applicationGroups.filter(item => 
      item.applicationGroup.toLowerCase().includes(searchLower) ||
      item.categoryName.toLowerCase().includes(searchLower)
    );
  }

  
  trackByFn(index: number, item: ApplicationGroup): string {
    return item.applicationGroup;
  }

  toggleSignatureMatching(): void {
    console.log('Signature Matching toggled');
  }

  addGroup(): void {
    console.log('Add Group clicked');
  }

  editItem(item: ApplicationGroup): void {
    console.log('Edit item:', item);
  }

  downloadItem(item: ApplicationGroup): void {
    console.log('Download item:', item);
  }
}
