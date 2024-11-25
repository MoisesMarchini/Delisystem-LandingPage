import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'button[secondary]',
  standalone: true,
  imports: [],
  template: '<ng-content></ng-content>',
  styleUrl: './secondary-button.component.scss',
  host: {
    animate:"false",
  }
})
export class SecondaryButtonComponent extends PrimaryButtonComponent{
  override defaultClasses = 'bg-transparent border-highlight border justify-items-center items-center hover:bg-highlight text-highlight hover:text-white transition inline-flex font-oswald py-4 px-8 lg:text-xl uppercase font-medium'

}
