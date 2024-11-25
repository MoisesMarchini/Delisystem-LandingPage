import { ContentItem } from "../items/content-item";
import { PricingItem } from "../items/pricing-item";
import { SectionIdentifier } from "../base/section-identifier";

export interface PricingSection extends SectionIdentifier, ContentItem {
  items: PricingItem[]
}
