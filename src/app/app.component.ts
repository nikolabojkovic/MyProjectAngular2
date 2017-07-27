import { Component } from '@angular/core';
import { ROUTES } from './constants/routes.constants';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="${ROUTES.dashboard}">Dashboard</a>
        <a routerLink="${ROUTES.heores}">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}