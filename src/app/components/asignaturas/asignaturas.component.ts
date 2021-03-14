import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  contadorAsignaturas: number;
  asignaturas:AsignaturasInterfaz[] = [];
  constructor(private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturas = this.servicioAsignaturas.getAllAsignaturas()
    this.contadorAsignaturas = this.asignaturas.length
  }

  filtrar(nombre:string,ciclo:string,conocimiento:string) {
    this.asignaturas = this.servicioAsignaturas.getAsigFiltradasNCC(nombre,ciclo,conocimiento)
    this.contadorAsignaturas = this.asignaturas.length
  }

}
