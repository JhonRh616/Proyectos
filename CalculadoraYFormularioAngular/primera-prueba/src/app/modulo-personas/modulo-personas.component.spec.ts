import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPersonasComponent } from './modulo-personas.component';

describe('ModuloPersonasComponent', () => {
  let component: ModuloPersonasComponent;
  let fixture: ComponentFixture<ModuloPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
