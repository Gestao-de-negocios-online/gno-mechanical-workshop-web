import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet />
  `,
  standalone: false
})
export class App {
  protected readonly title = signal('Gestão de Oficina Mecânica Online' /* Gno Mechanical Workshop */);
}
