import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_Material';

  isSidebarVisible: boolean = false; 

  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible; 
  }
}
