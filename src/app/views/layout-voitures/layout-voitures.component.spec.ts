import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVoituresComponent } from './layout-voitures.component';

describe('LayoutVoituresComponent', () => {
  let component: LayoutVoituresComponent;
  let fixture: ComponentFixture<LayoutVoituresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutVoituresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
