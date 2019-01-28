import { Component } from '@angular/core';

@Component({
  selector: 'app-ft-home',
  templateUrl: './ft-home.component.html'
})

export class FtHomeComponent {
  currentPage = 'home';
  filterBy = 'all';

  changePage(pageName: string) {
    this.currentPage = pageName;
  }
}
