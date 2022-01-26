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
  
  //uc4
  userName: string="";
  //uc5
  nameError: string="";

  ngOnInit() {
    this.title="Hello World from Bridgelabz";
  }
  //uc3
  onClick($event:any){
    console.log("Save button is clicked!" ,$event);
    window.open(this.url, "_blank");
  }

  //uc5
  onInput($event:any){
    console.log("Change Event Occured!", $event.data);
    const nameRegex=RegExp('^[A-Z]{1}[a-zA-z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is Incorrect";

  }
}



