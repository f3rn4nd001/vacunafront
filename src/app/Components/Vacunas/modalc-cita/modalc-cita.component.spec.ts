import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalcCitaComponent } from './modalc-cita.component';

describe('ModalcCitaComponent', () => {
  let component: ModalcCitaComponent;
  let fixture: ComponentFixture<ModalcCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalcCitaComponent]
    });
    fixture = TestBed.createComponent(ModalcCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
