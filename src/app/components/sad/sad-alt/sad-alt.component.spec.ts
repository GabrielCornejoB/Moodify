import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadAltComponent } from './sad-alt.component';

describe('SadAltComponent', () => {
  let component: SadAltComponent;
  let fixture: ComponentFixture<SadAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
