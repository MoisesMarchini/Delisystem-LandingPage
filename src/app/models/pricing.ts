export type PricingName = 'basic' | 'regular' | 'pro'

export type PricingItem = {
  name: PricingName,
  price: string,
  items: string[],
}
