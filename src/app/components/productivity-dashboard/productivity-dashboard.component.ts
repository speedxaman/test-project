import { Component, OnInit } from '@angular/core';
import { ApplicationGroup, CustomGroup, IdleConfigModal, SidebarItem, TabItem, User } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from '../data-table/data-table.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ProductivityService } from '../services/productivity.service';


@Component({
  selector: 'app-productivity-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SidebarComponent, DataTableComponent],
  templateUrl: './productivity-dashboard.component.html',
  styleUrl: './productivity-dashboard.component.scss'
})
export class ProductivityDashboardComponent implements OnInit {
  searchTerm = '';
  globalSearchTerm = '';
  sidebarHovered = false;
  showAddGroupModal = false;
  newGroupName = '';
  showEditGroupModal = false;
  editingGroup: CustomGroup | null = null;
  

  idleConfigModal: IdleConfigModal = {
    isOpen: false,
    applicationGroup: null,
    selectedConfig: 'Default'
  };

  sidebarItems1: SidebarItem[] = [
    { id: 'dashboard', icon: 'fas fa-chart-line', label: 'Dashboard', active: false },
    { id: 'reports', icon: 'fas fa-chart-bar', label: 'Reports', active: true },
    { id: 'applications', icon: 'fas fa-desktop', label: 'Applications', active: false },
    { id: 'screenshots', icon: 'fas fa-camera', label: 'Screenshots', active: false },
    { id: 'schedule', icon: 'fas fa-calendar', label: 'Schedule', active: false },
    { id: 'tracking', icon: 'fas fa-clock', label: 'Time Tracking', active: false },
    { id: 'documents', icon: 'fas fa-file-alt', label: 'Documents', active: false },
    { id: 'team', icon: 'fas fa-users', label: 'Team', active: false },
    { id: 'messages', icon: 'fas fa-envelope', label: 'Messages', active: false }
  ];

  mainTabs: TabItem[] = [
    { id: 'trends', label: 'Trends', icon: 'fas fa-chart-line', active: false },
    { id: 'timeline', label: 'Time Line', icon: 'fas fa-clock', active: false },
    { id: 'configure', label: 'Configure Apps', icon: 'fas fa-cog', active: true }
  ];

  subTabs: TabItem[] = [
    {
      id: 'profile', label: 'Productivity Profile', active: true,
      icon: ''
    },
    {
      id: 'mapping', label: 'Mapping', active: false,
      icon: ''
    },
    {
      id: 'groups', label: 'Application Groups', active: false,
      icon: ''
    }
  ];

  tableTabs = [
    { id: 'groups', label: 'Application Groups', active: true },
    { id: 'teams', label: 'Teams', active: false },
    { id: 'users', label: 'Users', active: false }
  ];

  applicationGroups: ApplicationGroup[] = [];

  constructor(private productivityService: ProductivityService) { }

  get filteredApplicationGroups(): ApplicationGroup[] {
    let filtered = this.applicationGroups;

    if (this.globalSearchTerm) {
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(this.globalSearchTerm.toLowerCase()) ||
        group.idleTimeConfiguration.toLowerCase().includes(this.globalSearchTerm.toLowerCase())
      );
    }

    return filtered;
  }

  get filteredCustomGroups() {
    if (!this.searchTerm) return;
    return this.customGroups.filter(app =>
      app.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.loadApplicationGroups();
  }

  customGroups: CustomGroup[] = [
    { id: 1, name: 'kuuukjy' },
    { id: 2, name: 'abc' }
  ];

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

  loadApplicationGroups(): void {
    this.productivityService.getApplicationGroups().subscribe(
      (groups: ApplicationGroup[]) => this.applicationGroups = groups
    );
  }

  setActiveSidebarItem(itemId: string): void {
    this.sidebarItems1.forEach(item => item.active = item.id === itemId);
  }

  setActiveTab(tabId: string): void {
    this.mainTabs.forEach(tab => tab.active = tab.id === tabId);
  }

  setActiveSubTab(subtabId: string): void {
    this.subTabs.forEach(tab => tab.active = tab.id === subtabId);
  }

  setActiveTableTab(tabId: string): void {
    this.tableTabs.forEach(tab => tab.active = tab.id === tabId);
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
        app.idleTimeConfiguration = this.idleConfigModal.selectedConfig;
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
  deleteCustomGroup(id: number) {
    this.customGroups = this.customGroups.filter(group => group.id !== id);
  }

  onAddApplicationGroup(): void {
    this.showAddGroupModal = true
    console.log('Add new application group');
  }
  sidebarCurr:any;
  sideBarClicked(item: any){
    console.log(item);
    this.sidebarCurr = item;
  }

  toggleProductivity(group: ApplicationGroup, isProductive: boolean): void {
    this.productivityService.updateApplicationGroup(group, isProductive).subscribe(
      (groups: ApplicationGroup[]) => this.applicationGroups = groups
    );
  }

  openIdleConfigModal(app: ApplicationGroup) {
    this.idleConfigModal = {
      isOpen: true,
      applicationGroup: app,
      selectedConfig: app.idleTimeConfiguration
    };
  }

  trackByName(index: number, item: ApplicationGroup): string {
    return item.name;
  }

}
