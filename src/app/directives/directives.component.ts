import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'mockproject';
  isSpecial:Boolean = true;
  revert () {
    this.isSpecial = !this.isSpecial;
    console.log(this.isSpecial);
  }

   objects:string [] = ['ngIf','ngFor','ngSwitch'];

  //  this variablee if for ngSwitch
  value:string 

}
