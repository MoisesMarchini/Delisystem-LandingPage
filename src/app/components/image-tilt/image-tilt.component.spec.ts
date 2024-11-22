import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTiltComponent } from './image-tilt.component';

describe('ImageTiltComponent', () => {
  let component: ImageTiltComponent;
  let fixture: ComponentFixture<ImageTiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTiltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
