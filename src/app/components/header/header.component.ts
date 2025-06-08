import { Component, Input } from '@angular/core';
import { User } from '../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() appName = 'RescueTime';
  @Input() user!: User;

}
