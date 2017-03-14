import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <header>
        <h2 class="row col-sm-12 logo">
            Chat App
        </h2>
    </header>
    
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { }
