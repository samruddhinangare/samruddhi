import { Component, OnInit } from '@angular/core';
import { displayService } from "./displayService.service";
import {  Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  post;
  constructor(private displayService: displayService,private router:Router) {

   }
  ngOnInit(){
    this.post=this.displayService.showDisplayData()
  }

  navigateBack() {
    this.router.navigateByUrl('/post');
  }
}
 

