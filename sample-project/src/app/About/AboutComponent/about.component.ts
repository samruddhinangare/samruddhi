import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <h3>{{str}}</h3>
  `,
})
export class AboutComponent implements OnInit {
str:string;
  constructor() { 
    this.str="This is About Page";
  }

  ngOnInit() {
  }

}
