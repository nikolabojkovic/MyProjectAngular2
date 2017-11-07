import { Component } from '@angular/core';
import { ROUTES } from './constants/routes.constants';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="${ROUTES.dashboard}">Dashboard</a>
        <a routerLink="${ROUTES.heores}">Heroes</a>
        <a routerLink="${ROUTES.portfolio}">Porfolio</a>
        <a routerLink="${ROUTES.cv}">Cv</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}