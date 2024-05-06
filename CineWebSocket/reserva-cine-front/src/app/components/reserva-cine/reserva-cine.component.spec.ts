import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaCineComponent } from './reserva-cine.component';

describe('ReservaCineComponent', () => {
  let component: ReservaCineComponent;
  let fixture: ComponentFixture<ReservaCineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaCineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservaCineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
