import { CiclosService } from './../../services/ciclos.service';
import { CiclosInterfaz } from './../../utils/CiclosInterfaz';
import { AsignaturasService } from './../../services/asignaturas.service';
import { AsignaturasInterfaz } from './../../utils/AsignaturasInterfaz';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  asignaturasDam:AsignaturasInterfaz[] = [];
  asignaturasDaw:AsignaturasInterfaz[] = [];
  ciclosDam:CiclosInterfaz[] = [];
  ciclosDaw:CiclosInterfaz[] = [];
  ciclos:CiclosInterfaz[] = [];

  constructor(private servicioAsignaturas: AsignaturasService, private ServicioCiclos:CiclosService,private rutas:Router) { }

  ngOnInit(): void {
    this.asignaturasDam = this.servicioAsignaturas.getAsignaturasFiltradas("DAM",-1);
    this.asignaturasDaw = this.servicioAsignaturas.getAsignaturasFiltradas("DAW",-1);
    this.ciclosDam = this.ServicioCiclos.getCiclosFiltrados("DAM");
    this.ciclosDaw = this.ServicioCiclos.getCiclosFiltrados("DAW");
    this.ciclos = this.ServicioCiclos.getAllCiclos();
  
  }

  verDetalles(ciclo:string,curso:number) {
    this.rutas.navigate(['detalleCiclos',ciclo,curso])

  }
}
