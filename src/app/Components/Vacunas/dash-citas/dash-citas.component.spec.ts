import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCitasComponent } from './dash-citas.component';

describe('DashCitasComponent', () => {
  let component: DashCitasComponent;
  let fixture: ComponentFixture<DashCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
