import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-evento-a',
  templateUrl: './detalles-evento-a.component.html',
  styleUrls: ['./detalles-evento-a.component.css']
})
export class DetallesEventoAComponent {
  mostrarModal: boolean = false; // Controla la visibilidad del modal
  ubicacionNombre: string = 'Universidad Católica Boliviana'; // Título del modal
  mapUrl: string =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068382076948!2d-68.11456612396452!3d-16.522645041310525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses!2sbo!4v1733522378114!5m2!1ses!2sbo';
  imagenes: string[] = [
    'https://internacional.ucb.edu.bo/wp-content/uploads/2020/11/Regional-La-Paz.jpg',
    'https://www.ucb.edu.bo/wp-content/uploads/2020/03/EPC-min.jpg',
    'https://verdadcontinta.com/wp-content/uploads/2019/05/ucb-la-paz.jpg',
    'https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2019/01/DSC3303-copy.jpg?fit=1100%2C734&ssl=1',
  ]; // Galería de imágenes

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  
  isModalOpen2 = false;

  openModal2() {
    this.isModalOpen2 = true;
  }

  closeModal2() {
    this.isModalOpen2 = false;
  }
}
