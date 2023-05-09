import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloListarPersonasComponent } from './modulo-listar-personas.component';

describe('ModuloListarPersonasComponent', () => {
  let component: ModuloListarPersonasComponent;
  let fixture: ComponentFixture<ModuloListarPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloListarPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloListarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
