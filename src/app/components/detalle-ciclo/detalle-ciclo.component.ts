import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { AsignaturasService } from './../../services/asignaturas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-ciclo',
  templateUrl: './detalle-ciclo.component.html',
  styleUrls: ['./detalle-ciclo.component.css']
})
export class DetalleCicloComponent implements OnInit {

  ciclo:string = "";
  curso:number;
  asignaturas:AsignaturasInterfaz[] = [];
  conocimientos:any[] = [];

  constructor(private rutaActiva:ActivatedRoute,private servicioAsignaturas: AsignaturasService) { }

  ngOnInit(): void {
    this.ciclo = this.rutaActiva.snapshot.params.ciclo;
    this.curso = this.rutaActiva.snapshot.params.curso;
    this.asignaturas = this.servicioAsignaturas.getAsignaturasFiltradas(this.ciclo,this.curso)
    this.asignaturas.forEach(element => {
      //this.conocimientos.push(element.conocimientos[0])
      // element.conocimientos.forEach(element2 => {
        this.conocimientos.push(element.conocimientos)
      // });
      
    });
    
  }



}
