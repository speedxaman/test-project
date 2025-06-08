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
  @Input() items: SidebarItem[] = [];
  @Output() itemSelected = new EventEmitter<SidebarItem>();

  onItemClick(item: SidebarItem): void {
    this.itemSelected.emit(item);
  }

  trackByLabel(index: number, item: SidebarItem): string {
    return item.label;
  }

}
