import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngrySemaphoreComponent } from './angry-semaphore.component';

describe('AngrySemaphoreComponent', () => {
  let component: AngrySemaphoreComponent;
  let fixture: ComponentFixture<AngrySemaphoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngrySemaphoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngrySemaphoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
