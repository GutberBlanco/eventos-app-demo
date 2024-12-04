import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosPaginaComponent } from './eventos-pagina.component';

describe('EventosPaginaComponent', () => {
  let component: EventosPaginaComponent;
  let fixture: ComponentFixture<EventosPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosPaginaComponent]
    });
    fixture = TestBed.createComponent(EventosPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
