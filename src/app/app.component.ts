import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <router-outlet class="outlet"></router-outlet>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {

}
