import { AfterHeroCard } from "./after-hero-card";
import { ContentItem } from "./content-item";
import { PricingItem } from "./pricing-item";
import { ServiceItem } from "./service-item";

export interface SectionIdentifier {
  id?: string,
  animate?: boolean
}

export interface AfterHeroSection {
  items: AfterHeroCard[]
}

export interface HeroSection extends SectionIdentifier, ContentItem {
  ctaText: string
}

export interface ServicesSection extends SectionIdentifier {
  items: ServiceItem[]
}

export interface PricingSection extends SectionIdentifier, ContentItem {
  items: PricingItem[]
}
