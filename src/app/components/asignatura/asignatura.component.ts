import { Component, Input, OnInit } from '@angular/core';
import { AsignaturasInterfaz } from 'src/app/utils/AsignaturasInterfaz';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {


  @Input() asignatura:AsignaturasInterfaz;

  constructor() { }

  ngOnInit(): void {
  }

}
