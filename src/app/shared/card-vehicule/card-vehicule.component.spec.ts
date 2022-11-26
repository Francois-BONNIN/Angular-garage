import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVehiculeComponent } from './card-vehicule.component';

describe('CardVehiculeComponent', () => {
  let component: CardVehiculeComponent;
  let fixture: ComponentFixture<CardVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
