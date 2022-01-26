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
  url="https://www.bridgelabz.com/";

  ngOnInit() {
    this.title="Hello World from Bridgelabz";
  }
  //uc3
  onClick($event:any){
    console.log("Save button is clicked!" ,$event);
    window.open(this.url, "_blank");
  }
}



