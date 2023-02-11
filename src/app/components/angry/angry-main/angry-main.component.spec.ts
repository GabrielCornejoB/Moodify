import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryMainComponent } from './angry-main.component';

describe('AngryMainComponent', () => {
  let component: AngryMainComponent;
  let fixture: ComponentFixture<AngryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngryMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
