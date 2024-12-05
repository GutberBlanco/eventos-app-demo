import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEventoAComponent } from './detalles-evento-a.component';

describe('DetallesEventoAComponent', () => {
  let component: DetallesEventoAComponent;
  let fixture: ComponentFixture<DetallesEventoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesEventoAComponent]
    });
    fixture = TestBed.createComponent(DetallesEventoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
