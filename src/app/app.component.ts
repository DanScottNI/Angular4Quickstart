import { Component } from '@angular/core';

<<<<<<< HEAD
@Component({
=======
@Component({ 
>>>>>>> bdfb6b111c7d409dced5fc27d9232d3e04673154
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>`,
    styleUrls: [ './app.component.css' ]
})
export class AppComponent {
<<<<<<< HEAD
    title = 'Tour of Heroes';
=======
    title= 'Tour of Heroes';
>>>>>>> bdfb6b111c7d409dced5fc27d9232d3e04673154
}
