import { Component } from '@angular/core';
import { ɵNgNoValidate } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //uc1
  title = 'Hello World';

  ngOnInit() {
    this.title="Hello World from Bridgelabz";
  }
}



