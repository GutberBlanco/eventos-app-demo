import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-pagina',
  templateUrl: './eventos-pagina.component.html',
  styleUrls: ['./eventos-pagina.component.css']
})
export class EventosPaginaComponent implements AfterViewInit {
  
  @ViewChild('carousel') carousel: any;  // Referencia al contenedor del carrusel
  @ViewChild('prev') prevButton: any;  // Referencia al botón "Anterior"
  @ViewChild('next') nextButton: any;  // Referencia al botón "Siguiente"
  
  currentIndex = 0;
  totalSlides = 0;
  constructor(private router: Router) {}

  ngAfterViewInit() {
    // Acceder a los elementos del carrusel y obtener el número de slides
    const slides = this.carousel.nativeElement.children;
    this.totalSlides = slides.length;

    // Función para mostrar el slide correspondiente
    const showSlide = (index: number) => {
      const offset = -index * 100;  // Calcula el desplazamiento
      this.carousel.nativeElement.style.transform = `translateX(${offset}%)`;
    };

    // Cambiar automáticamente cada 8 segundos
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      showSlide(this.currentIndex);
    }, 8000);

    // Controles manuales (botones de siguiente y anterior)
    this.nextButton.nativeElement.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      showSlide(this.currentIndex);
    });

    this.prevButton.nativeElement.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      showSlide(this.currentIndex);
    });
  }
  toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('hidden');
    }
  }
  irADetallesEvento() {
    this.router.navigate(['/detalles-evento-a']);
  }
  irADetallesEventob() {
    this.router.navigate(['/detalles-evento-b']);
  }

  isVisible = false;

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
