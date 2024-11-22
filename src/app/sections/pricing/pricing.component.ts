import { Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/section-title/section-title.component";
import { environment } from '../../../environments/environment';
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";
import { PricingCardComponent } from "./pricing-card/pricing-card.component";
import { CommonModule } from '@angular/common';
import { BaseSectionComponent } from '../../layout/base-section/base-section.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [BaseSectionComponent, SectionTitleComponent, SectionHeaderComponent, PricingCardComponent, CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent extends BaseSectionComponent {
  override sectionProps = environment.sectionProps.pricing
}
