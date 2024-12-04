import { Component } from '@angular/core';
import { EventoService } from 'src/app/servicios/evento.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  eventos: any[] = [];

  constructor(private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.listarEventos().subscribe(data => {
      this.eventos = data;
    });
  }
}
