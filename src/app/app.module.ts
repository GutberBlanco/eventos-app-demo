import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './eventos/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventosPaginaComponent } from './eventos-pagina/eventos-pagina.component';
import { DetallesEventoAComponent } from './pages/detalles-evento-a/detalles-evento-a.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DetallesEventoBComponent } from './pages/detalles-evento-b/detalles-evento-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NavbarComponent,
    EventosPaginaComponent,
    DetallesEventoAComponent,
    CalendarComponent,
    DetallesEventoBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
