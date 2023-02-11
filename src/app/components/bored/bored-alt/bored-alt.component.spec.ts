import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredAltComponent } from './bored-alt.component';

describe('BoredAltComponent', () => {
  let component: BoredAltComponent;
  let fixture: ComponentFixture<BoredAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoredAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
