import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:  `
  <div class="nav">
    <div><h2>LOGO</h2></div>
    <ul class="menu">
      <li><a [routerLink]="['/movies']">All Movies</a></li>
      <li><a [routerLink]="['/home']">Home</a></li>
      <li><a [routerLink]="['/login']">Favorite Movies</a></li>
    </ul>
    </div>
  <div>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Movies';
}
