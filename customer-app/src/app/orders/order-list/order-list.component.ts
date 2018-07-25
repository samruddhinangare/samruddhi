import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  str:string;
  constructor() { 
     this.str="Welcome to orders"
  }

  ngOnInit() {
  }

}
