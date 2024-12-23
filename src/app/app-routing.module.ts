import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './eventos/listar/listar.component';
import { DetallesEventoAComponent } from './pages/detalles-evento-a/detalles-evento-a.component';
import { EventosPaginaComponent } from './eventos-pagina/eventos-pagina.component';
import { DetallesEventoBComponent } from './pages/detalles-evento-b/detalles-evento-b.component';

const routes: Routes = [
  { path: '', component: EventosPaginaComponent },
  { path: 'eventos/listar', component: ListarComponent },
  { path: 'detalles-evento-a', component: DetallesEventoAComponent },
  { path: 'detalles-evento-b', component: DetallesEventoBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
