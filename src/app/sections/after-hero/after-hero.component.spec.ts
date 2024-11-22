import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterHeroComponent } from './after-hero.component';

describe('AfterHeroComponent', () => {
  let component: AfterHeroComponent;
  let fixture: ComponentFixture<AfterHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
