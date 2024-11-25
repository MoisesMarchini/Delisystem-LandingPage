import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { PricingItem, PricingName } from '../../models/pricing-item';
@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [],
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.scss'
})
export class PrimaryButtonComponent {
  @Input() pricingName?: PricingName;
  @Input() pricingItem?: PricingItem;
  @Input() whatsappMessage?: string;
  @Output() onClickEv = new EventEmitter<any>();

  constructor(private whatsappService: WhatsappService) {

  }

  onClick() {
    this.onClickEv.emit();

    if (this.pricingName) {
      this.whatsappService.sendMessageFromService(this.pricingName);
      return;
    }

    if (this.pricingItem) {
      this.whatsappService.sendMessageFromService(this.pricingItem.name);
      return;
    }

    if(this.whatsappMessage)
      this.whatsappService.sendMessage(this.whatsappMessage);
  }
}
