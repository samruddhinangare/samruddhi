import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <h3>{{str}}</h3>
  `,
})
export class ContactComponent implements OnInit {
str:string;
  constructor() { 
    this.str="This is Contact Page";
  }

  ngOnInit() {
  }

}
