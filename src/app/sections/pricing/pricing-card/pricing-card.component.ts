import { Component, Input } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { SecondaryButtonComponent } from "../../../components/secondary-button/secondary-button.component";
import { CommonModule } from '@angular/common';
import { PricingItem } from '../../../models/pricing';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [PrimaryButtonComponent, SecondaryButtonComponent, CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
  host: {
    class: 'relative'
  }
})
export class PricingCardComponent {
  @Input() pricingItem: Partial<PricingItem> = {};

  onButtonClick() {

  }
}
