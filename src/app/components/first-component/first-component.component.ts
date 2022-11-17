import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Jonathas Oliveira';
  age: number = 27;
  job: string = 'Programador';
  hobbies = ['Malhar', 'Jogar', 'Estudar'];
  car = {
    name: 'Bicicleta',
    year: 2018,
  };

  constructor() {}

  ngOnInit() {}
}
