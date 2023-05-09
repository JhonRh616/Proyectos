import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraResultadoComponent } from './calculadora-resultado.component';

describe('CalculadoraResultadoComponent', () => {
  let component: CalculadoraResultadoComponent;
  let fixture: ComponentFixture<CalculadoraResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
