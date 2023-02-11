import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryTimerComponent } from './angry-timer.component';

describe('AngryTimerComponent', () => {
  let component: AngryTimerComponent;
  let fixture: ComponentFixture<AngryTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngryTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngryTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
