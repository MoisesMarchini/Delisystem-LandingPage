import { BaseModel } from "./base-model";

export enum PricingName {
  basic = 'Básico',
  regular = 'Normal',
  pro = 'Completo'
}

export interface PricingItem {
  name: PricingName,
  price: string,
  items: string[],
}

export class PricingItem extends BaseModel<PricingItem>{
  override defaultModel(): PricingItem {
    return {
      name: PricingName.basic,
      price: 'R$ 0,00',
      items: [''],
    } as PricingItem;
  }
}

