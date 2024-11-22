import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpedSvgComponent } from './warped-svg.component';

describe('WarpedSvgComponent', () => {
  let component: WarpedSvgComponent;
  let fixture: ComponentFixture<WarpedSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarpedSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarpedSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
