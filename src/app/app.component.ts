import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface ApplicationGroup {
  id: number;
  name: string;
  idleTimeConfig: string;
  isProductive: boolean;
}

interface CustomGroup {
  id: number;
  name: string;
}

interface IdleConfigModal {
  isOpen: boolean;
  applicationGroup: ApplicationGroup | null;
  selectedConfig: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showAddGroupModal = false;
  showEditGroupModal = false;
  newGroupName = '';
  editingGroup: CustomGroup | null = null;
  groupSearchQuery = '';
  appSearchQuery = '';

  idleConfigModal: IdleConfigModal = {
    isOpen: false,
    applicationGroup: null,
    selectedConfig: 'Default'
  };

  customGroups: CustomGroup[] = [
    { id: 1, name: 'kuuukjy' },
    { id: 2, name: 'abc' }
  ];

  applicationGroups: ApplicationGroup[] = [
    { id: 1, name: 'Education', idleTimeConfig: 'No Idle Time', isProductive: false },
    { id: 2, name: 'Email', idleTimeConfig: 'Default', isProductive: true },
    { id: 3, name: 'Entertainment', idleTimeConfig: 'Default', isProductive: true },
    { id: 4, name: 'Marketing', idleTimeConfig: 'Default', isProductive: true },
    { id: 5, name: 'News', idleTimeConfig: 'Default', isProductive: true },
    { id: 6, name: 'Office Apps', idleTimeConfig: 'No Idle Time', isProductive: true }
  ];

  get filteredApplicationGroups() {
    if (!this.appSearchQuery) return this.applicationGroups;
    return this.applicationGroups.filter(app => 
      app.name.toLowerCase().includes(this.appSearchQuery.toLowerCase())
    );
  }

  get filteredCustomGroups(){
    if (!this.groupSearchQuery) return;
    return this.customGroups.filter(app => 
      app.name.toLowerCase().includes(this.groupSearchQuery.toLowerCase())
    );
  }

  addCustomGroup() {
    if (this.newGroupName.trim()) {
      const newGroup: CustomGroup = {
        id: this.customGroups.length + 1,
        name: this.newGroupName.trim()
      };
      this.customGroups.push(newGroup);
      this.newGroupName = '';
      this.showAddGroupModal = false;
    }
  }

  deleteCustomGroup(id: number) {
    this.customGroups = this.customGroups.filter(group => group.id !== id);
  }

  toggleProductivity(id: number, isProductive: boolean) {
    const app = this.applicationGroups.find(a => a.id === id);
    if (app) {
      app.isProductive = isProductive;
    }
  }

  openIdleConfigModal(app: ApplicationGroup) {
    this.idleConfigModal = {
      isOpen: true,
      applicationGroup: app,
      selectedConfig: app.idleTimeConfig
    };
  }

  closeIdleConfigModal() {
    this.idleConfigModal = {
      isOpen: false,
      applicationGroup: null,
      selectedConfig: 'Default'
    };
  }

  updateIdleConfiguration() {
    if (this.idleConfigModal.applicationGroup) {
      const app = this.applicationGroups.find(a => a.id === this.idleConfigModal.applicationGroup!.id);
      if (app) {
        app.idleTimeConfig = this.idleConfigModal.selectedConfig;
      }
    }
    this.closeIdleConfigModal();
  }

  editCustomGroup(group: CustomGroup) {
    this.editingGroup = group;
    this.newGroupName = group.name;
    this.showEditGroupModal = true;
  }

  closeEditGroupModal() {
    this.showEditGroupModal = false;
    this.editingGroup = null;
    this.newGroupName = '';
  }

  updateCustomGroup() {
    if (this.editingGroup && this.newGroupName.trim()) {
      this.editingGroup.name = this.newGroupName.trim();
      this.closeEditGroupModal();
    }
  }
}
