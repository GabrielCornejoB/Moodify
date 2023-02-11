import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyMainComponent } from './happy-main.component';

describe('HappyMainComponent', () => {
  let component: HappyMainComponent;
  let fixture: ComponentFixture<HappyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
