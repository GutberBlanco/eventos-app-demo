import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private baseUrl = 'http://localhost:8080/api/eventos';

  constructor(private http: HttpClient) {}

  listarEventos(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  crearEvento(evento: any): Observable<any> {
    return this.http.post(this.baseUrl, evento);
  }
}
