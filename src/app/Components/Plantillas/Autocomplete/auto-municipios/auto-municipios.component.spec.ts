import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMunicipiosComponent } from './auto-municipios.component';

describe('AutoMunicipiosComponent', () => {
  let component: AutoMunicipiosComponent;
  let fixture: ComponentFixture<AutoMunicipiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoMunicipiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoMunicipiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
