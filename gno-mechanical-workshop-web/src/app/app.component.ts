import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar-component></app-navbar-component>

        <div class="container">
            <div style="margin-top:1rem" class="columns">
                <div class="column is-2">
                    <app-left-menu-component></app-left-menu-component>
                </div>
                <div class="column is-10">
                    <router-outlet></router-outlet>
                </div>
            </div>
        </div>
    `,
    standalone: false,
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    protected readonly title = "Gestão de Oficina Mecânica Online";
}
