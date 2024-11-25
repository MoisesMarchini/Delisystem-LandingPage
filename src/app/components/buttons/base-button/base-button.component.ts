import { Component, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './base-button.component.scss'
})
export class BaseButtonComponent {
  defaultClasses = '';
  @HostBinding('class') mergedClasses = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const hostClasses = this.el.nativeElement.className || '';
    this.mergedClasses = twMerge(this.defaultClasses, hostClasses);
    this.renderer.setAttribute(this.el.nativeElement, 'class', this.mergedClasses);
  }
}
