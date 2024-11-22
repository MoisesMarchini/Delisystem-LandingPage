import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.scss'],
  host: {
    class: 'grid place-content-center'
  }
})
export class AppLogoComponent {
  @Input() bgColor = 'white';
  @Input() frontColor = environment.appColors.highlight;
  @Input() customCompanyLogoPath?: string;
}
