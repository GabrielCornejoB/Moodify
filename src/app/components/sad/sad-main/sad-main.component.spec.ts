import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadMainComponent } from './sad-main.component';

describe('SadMainComponent', () => {
  let component: SadMainComponent;
  let fixture: ComponentFixture<SadMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
