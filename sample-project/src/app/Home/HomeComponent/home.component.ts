import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h3>{{str}}</h3>
  `,
})
export class HomeComponent implements OnInit {
str:string;
  constructor() { 
    this.str="This is Home Page";
  }

  ngOnInit() {
  }

}
