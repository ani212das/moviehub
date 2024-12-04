import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router) {}

  // Method to navigate based on button click
  change(index: number): void {
    if (index === 0) {
      this.router.navigate(['/user']);
    } else if (index === 1) {
      this.router.navigate(['/role']);
    }
  }
}
