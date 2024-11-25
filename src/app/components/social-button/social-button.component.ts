import { Component } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: '.social-btn',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './social-button.component.scss',
})
export class SocialButtonComponent extends BaseButtonComponent{
  override defaultClasses: string = "grid place-content-center w-8 h-8";
}
