import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPersonasFormularioComponent } from './listado-personas-formulario.component';

describe('ListadoPersonasFormularioComponent', () => {
  let component: ListadoPersonasFormularioComponent;
  let fixture: ComponentFixture<ListadoPersonasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPersonasFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPersonasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
