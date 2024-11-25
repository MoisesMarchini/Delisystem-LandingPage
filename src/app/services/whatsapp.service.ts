import { Injectable } from '@angular/core';
import { PricingName } from '../models/pricing-item';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  readonly defaultMessage = 'Olá! Gostaria de saber mais sobre o Delisystem';
  readonly baseNumber = '+5521992507864';
  readonly baseLink = `https://wa.me/${this.baseNumber}?text=`;

  constructor() { }

  sendMessageFromService(pricing: PricingName) {
    const message = `Olá! Gostaria de saber mais sobre o plano ${pricing} do Delisystem`

    this.sendMessage(message);
  }

  sendMessage(message: string = this.defaultMessage) {
    window.open(this.baseLink + message, '_blank');
  }
}
