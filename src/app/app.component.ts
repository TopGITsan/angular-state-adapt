import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Hello, {{ title }}</h1>
    <router-outlet />
  `,
  styles: ``,
})
export class AppComponent {
  title = 'angular-state-adapt';
}
