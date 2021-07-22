import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lowercase = 'this message is stored in lowerCase but rendering in uppercase with the help of uppercase pipe ';
  uppercase = 'THIS MESSAGE IS STORED IN UPPERCASE BUT RENDERING IN LOWERCASE WITH THE HELP OF LOWERCASE PIPE';
  date:Date = new Date();
  currency = 200;
  percentage = 0.20
}
