import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  interpolation = 'Interpolation Binding';
  style = {
    color: 'red'
  }
  classVar = 'classForBindig';
  value = 5;
  message;
  show:Boolean = false;
  changeColor() {
    this.message = 'Event Binding is Working'
    this.show = !this.show;
  }

  content:string =''

}
