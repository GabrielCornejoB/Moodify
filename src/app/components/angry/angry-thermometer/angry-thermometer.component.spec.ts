import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryThermometerComponent } from './angry-thermometer.component';

describe('AngryThermometerComponent', () => {
  let component: AngryThermometerComponent;
  let fixture: ComponentFixture<AngryThermometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngryThermometerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngryThermometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
