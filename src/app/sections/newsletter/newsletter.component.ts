import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseSectionComponent } from '../../layout/base-section/base-section.component';
import { PrimaryButtonComponent } from '../../components/buttons/primary-button/primary-button.component';
import { environment } from '../../../environments/environment';
import { WavesComponent } from "../../components/waves/waves.component";

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [BaseSectionComponent, CommonModule, PrimaryButtonComponent, WavesComponent],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent extends BaseSectionComponent {
  protected override sectionProps = environment.sectionProps.newsletter;
}
