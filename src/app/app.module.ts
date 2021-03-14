import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { DetalleCicloComponent } from './components/detalle-ciclo/detalle-ciclo.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { TextUpperPipe } from './pipes/text-upper.pipe';
import { ImagesPipe } from './pipes/images.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    CiclosComponent,
    DetalleCicloComponent,
    AsignaturasComponent,
    AsignaturaComponent,
    TextUpperPipe,
    ImagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
