import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseSectionComponent } from '../../layout/base-section/base-section.component';
import { SecondaryButtonComponent } from '../../components/buttons/secondary-button/secondary-button.component';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [BaseSectionComponent, CommonModule, SecondaryButtonComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent extends BaseSectionComponent {

}
