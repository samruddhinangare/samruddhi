import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
str:string;
  constructor() { 
    this.str="Welcome to customer";
  }

  ngOnInit() {
  }

}
