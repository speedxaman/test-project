import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApplicationGroup } from '../models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  @Input() data: ApplicationGroup[] = [];
  @Input() defaultLabel = 'Default';
  @Output() search = new EventEmitter<string>();
  @Output() globalSearch = new EventEmitter<string>();
  @Output() add = new EventEmitter<void>();

  searchTerm = '';
  globalSearchTerm = '';

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }

  onGlobalSearch(): void {
    this.globalSearch.emit(this.globalSearchTerm);
  }

  onAdd(): void {
    this.add.emit();
  }

  trackByName(index: number, item: ApplicationGroup): string {
    return item.name;
  }

}
