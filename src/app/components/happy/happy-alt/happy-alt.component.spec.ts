import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyAltComponent } from './happy-alt.component';

describe('HappyAltComponent', () => {
  let component: HappyAltComponent;
  let fixture: ComponentFixture<HappyAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappyAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappyAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
