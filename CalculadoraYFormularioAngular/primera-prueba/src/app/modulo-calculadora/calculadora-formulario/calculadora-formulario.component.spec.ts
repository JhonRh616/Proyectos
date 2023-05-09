import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraFormularioComponent } from './calculadora-formulario.component';

describe('CalculadoraFormularioComponent', () => {
  let component: CalculadoraFormularioComponent;
  let fixture: ComponentFixture<CalculadoraFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
