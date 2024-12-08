import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../servicios/evento.service';

@Component({
  selector: 'app-eventos-pagina',
  templateUrl: './eventos-pagina.component.html',
  styleUrls: ['./eventos-pagina.component.css']
})
export class EventosPaginaComponent implements AfterViewInit, OnInit {
  
  @ViewChild('carousel') carousel: any;  // Referencia al contenedor del carrusel
  @ViewChild('prev') prevButton: any;  // Referencia al botón "Anterior"
  @ViewChild('next') nextButton: any;  // Referencia al botón "Siguiente"
  
  currentIndex = 0;
  totalSlides = 0;
  eventos: any[] = [];
  mostrarEventosRecomendados = true; 
  nombreBusqueda: string = '';
  constructor(private router: Router, private eventoService: EventoService) {}
  mostrarModal = false; // Controla la visibilidad del modal
  filtros = {
    tipo: '', // 'gratis' o 'costo'
    accesoLibre: false,
    registroPrevio: false,
    conEntrada: false,
    aireLibre: false,
    teatro: false,
  };
  ngOnInit(): void {
    this.cargarEventos(); 
    // Cargar eventos al iniciar el componente
  }

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

  cargarEventos(): void {
    this.eventoService.listarEventos().subscribe({
      next: (data) => {
        this.eventos = data; // Asignar la respuesta a la variable eventos
      },
      error: (err) => {
        console.error('Error al obtener los eventos:', err);
      }
    });
  }

  seleccionarTipoEvento(tipoEvento: string): void {
    this.mostrarEventosRecomendados = false; 
    this.eventoService.filtrarEventosPorTipo(tipoEvento).subscribe({
      next: (data) => {
        this.eventos = data; // Asignar los eventos filtrados a la lista
      },
      error: (err) => {
        console.error(`Error al filtrar eventos por tipo "${tipoEvento}":`, err);
      }
    });
  }
  buscarEventoPorNombre(): void {
    if (!this.nombreBusqueda.trim()) {
      console.warn('El campo de búsqueda está vacío.');
      return;
    }
  
    this.eventoService.buscarEventoPorNombre(this.nombreBusqueda).subscribe({
      next: (data) => {
        this.eventos = data; // Actualizar la lista de eventos con los resultados de la búsqueda
        this.mostrarEventosRecomendados = false; // Ocultar los eventos recomendados
      },
      error: (err) => {
        console.error('Error al buscar eventos por nombre:', err);
      }
    });
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  aplicarFiltros(): void {
    console.log('Filtros aplicados:', this.filtros);
    // Aquí puedes llamar al servicio para filtrar eventos usando los datos seleccionados
    this.cerrarModal();
  }

}
