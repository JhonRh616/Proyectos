import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSlotComponent } from './movie-slot.component';

describe('MovieSlotComponent', () => {
  let component: MovieSlotComponent;
  let fixture: ComponentFixture<MovieSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
