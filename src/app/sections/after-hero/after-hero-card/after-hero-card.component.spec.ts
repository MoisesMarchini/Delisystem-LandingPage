import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterHeroCardComponent } from './after-hero-card.component';

describe('AfterHeroCardComponent', () => {
  let component: AfterHeroCardComponent;
  let fixture: ComponentFixture<AfterHeroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterHeroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterHeroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
