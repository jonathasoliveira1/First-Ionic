import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.scss'],
})
export class NgforComponent implements OnInit {
  cursos: string[] = ['Angular', 'Java', 'Phonegap'];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.cursos.length; i++) {
      let curso = this.cursos[i];
    }
  }
}
