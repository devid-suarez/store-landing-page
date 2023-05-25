import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-landing-page';
  sidenavOpened = false;

  openSidenav() {
    this.sidenavOpened = true;
  }

}
