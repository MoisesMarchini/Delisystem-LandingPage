import { Component, ElementRef, HostBinding } from '@angular/core';
import { SectionManagerService } from '../../services/section-manager.service';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-base-section',
  standalone: true,
  imports: [],
  templateUrl: './base-section.component.html',
  styleUrl: './base-section.component.scss',
  host: {
    class: `block relative -z-0 `
  }
})
export class BaseSectionComponent {
  protected sectionProps: any;
  protected sectionId?: string;
  hasPastSection = false;

  constructor(private windowService: WindowService, private sectionManagerService: SectionManagerService, private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.init();
  }

  private init() {
    this.sectionId = this.sectionProps?.id?? this.elementRef.nativeElement.id;

    if (!this.sectionId) return;

    this.windowService.getValueAsObservable('scrollY').subscribe(scrollY => {
      if (this.hasPastSection) return;
      if (this.sectionManagerService.hasPastSection(this.sectionId!)){
        this.onPastSection();
        this.hasPastSection = true;
      }
    })
  }

  onPastSection() {
  }

  @HostBinding('attr.active') get isActive() {
    return this.sectionProps?.id? this.hasPastSection : null
  }

  @HostBinding('attr.animate') get isAnimated() {
    return this.sectionProps?.id? this.sectionProps.animate?? true : null
  }

  @HostBinding('attr.id') get _sectionId() {
    return this.sectionProps?.id;
  }
}
