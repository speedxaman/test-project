import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarItem } from '../models';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() sidebarHovered = false;
  @Input() sidebarItems : any = [];
  @Input() clickedItem: any;
  @Output() sidebarItemsUpdated = new EventEmitter<SidebarItem>();

  onItemClick(item: SidebarItem): void {

  }

  trackByLabel(index: number, item: SidebarItem): string {
    return item.label;
  }

  setActiveSidebarItem(item: any) {
    this.sidebarItemsUpdated.emit(item);
  }

}
