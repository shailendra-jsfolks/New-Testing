import { Component, ViewChild } from '@angular/core';
import { Test1Component } from './test1/test1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';

  constructor() {
    
    
  }
  @ViewChild(Test1Component) data!: Test1Component;

  data1 = "rahul pandey"
  onclick() {
    this.data?.name();
     this.data1 = this.data?.user;
  }





}
