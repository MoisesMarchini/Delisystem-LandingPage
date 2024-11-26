import { BaseModel } from "../base/base-model";

export enum PricingName {
  basic = 'Básico',
  regular = 'Normal',
  pro = 'Completo'
}

export interface PricingItem {
  name: PricingName,
  price: string,
  items: string[],
  highlight: boolean
}

export class PricingItem extends BaseModel<PricingItem>{
  override defaultModel(): PricingItem {
    return {
      name: PricingName.basic,
      price: 'R$ 0,00',
      items: [''],
      highlight: false,
    } as PricingItem;
  }
}

