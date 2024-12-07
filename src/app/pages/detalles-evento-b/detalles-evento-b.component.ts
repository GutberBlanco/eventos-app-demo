import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-evento-b',
  templateUrl: './detalles-evento-b.component.html',
  styleUrls: ['./detalles-evento-b.component.css']
})
export class DetallesEventoBComponent {
  mostrarModal: boolean = false; // Controla la visibilidad del modal
  ubicacionNombre: string = 'Universidad Católica Boliviana'; // Título del modal
  mapUrl: string =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068382076948!2d-68.11456612396452!3d-16.522645041310525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses!2sbo!4v1733522378114!5m2!1ses!2sbo';
  imagenes: string[] = [
    'https://i0.wp.com/amun.bo/wp-content/uploads/2019/09/PUC.jpeg?fit=1280%2C853&ssl=1',
    'https://cdn.bolivia.com/sdi/2021/11/13/preferia-navidena-la-paz-busca-impulsar-economia-con-miras-a-fiestas-de-fin-de-ano-970508-0.jpg',
    'https://estaticos-noticias.unitel.bo/binrepository/1200x800/0c85/1200d630/none/125450566/NKBH/2022120196374-encendido-del-arbol-de_101-4328791_20221223121738.jpg',
    'https://i0.wp.com/amun.bo/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-01-at-10.43.33-PM-1.jpeg?resize=696%2C467&ssl=1',
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
