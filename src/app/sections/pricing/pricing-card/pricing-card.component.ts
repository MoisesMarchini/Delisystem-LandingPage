import { Component, HostListener, Input } from '@angular/core';
import { PrimaryButtonComponent } from "../../../components/buttons/primary-button/primary-button.component";
import { CommonModule } from '@angular/common';
import { PricingItem } from '../../../models/items/pricing-item';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [PrimaryButtonComponent, CommonModule],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss',
  host: {
    class: 'relative'
  }
})
export class PricingCardComponent {
  @Input() pricingItem: Partial<PricingItem> = {};
  static currentHoverItem?: string;
  get currentHoverItem() {
    return PricingCardComponent.currentHoverItem;
  }

  @HostListener('mouseenter')
  onHover() {
    PricingCardComponent.currentHoverItem = this.pricingItem.name;
  }

  @HostListener('mouseleave')
  onBlur() {
    if (PricingCardComponent.currentHoverItem === this.pricingItem.name)
      PricingCardComponent.currentHoverItem = undefined;
  }
}
