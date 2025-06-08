import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mapping',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mapping.component.html',
  styleUrl: './mapping.component.scss'
})

export class MappingComponent {
  searchTerm: string = '';
  selectedIsApp: string = 'Show All';
  selectedGroupConfig: string = 'All';
  selectedAppGroup: string = 'All';
  selectedRegularExpression: string = 'All';

  addGroup() {
    console.log('Add Group clicked');
  }

  addNewRule() {
    console.log('Add New Rule clicked');
  }

  showMoreOptions() {
    console.log('More options clicked');
  }

}
