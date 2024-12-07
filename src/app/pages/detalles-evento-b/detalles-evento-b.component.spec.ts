import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesEventoBComponent } from './detalles-evento-b.component';

describe('DetallesEventoBComponent', () => {
  let component: DetallesEventoBComponent;
  let fixture: ComponentFixture<DetallesEventoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesEventoBComponent]
    });
    fixture = TestBed.createComponent(DetallesEventoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
